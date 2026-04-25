const express = require('express');
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '..', 'data', 'contacts.json');

function readData() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, '[]');
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch {
    console.log('File write skipped (read-only filesystem)');
  }
}

router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const contacts = readData();
      const newContact = {
        id: Date.now(),
        ...req.body,
        createdAt: new Date().toISOString(),
      };
      contacts.push(newContact);
      writeData(contacts);

      try {
        await sendContactEmail(req.body);
      } catch (emailErr) {
        console.error('Email sending failed:', emailErr.message);
      }

      res.json({
        success: true,
        message: 'Thank you for reaching out! We will get back to you soon.',
      });
    } catch (err) {
      console.error('Contact error:', err);
      res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
    }
  }
);

module.exports = router;
