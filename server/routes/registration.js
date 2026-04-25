const express = require('express');
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const { sendRegistrationEmails } = require('../services/emailService');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '..', 'data', 'registrations.json');

function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]');
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

router.post(
  '/register',
  [
    body('parentName').trim().notEmpty().withMessage('Parent name is required'),
    body('parentEmail').isEmail().withMessage('Valid email is required'),
    body('parentPhone').trim().notEmpty().withMessage('Phone number is required'),
    body('childName').trim().notEmpty().withMessage('Child name is required'),
    body('childDob').trim().notEmpty().withMessage('Date of birth is required'),
    body('program').trim().notEmpty().withMessage('Program selection is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const registrations = readData();
      const newRegistration = {
        id: Date.now(),
        ...req.body,
        createdAt: new Date().toISOString(),
      };
      registrations.push(newRegistration);
      writeData(registrations);

      try {
        await sendRegistrationEmails(req.body);
      } catch (emailErr) {
        console.error('Email sending failed:', emailErr.message);
      }

      res.json({
        success: true,
        message: 'Registration submitted successfully! You will receive a confirmation email shortly.',
      });
    } catch (err) {
      console.error('Registration error:', err);
      res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
    }
  }
);

module.exports = router;
