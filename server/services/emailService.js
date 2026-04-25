const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function loadTemplate(templateName, replacements) {
  let html = fs.readFileSync(
    path.join(__dirname, '..', 'templates', templateName),
    'utf-8'
  );
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), value || 'N/A');
  }
  return html;
}

async function sendRegistrationEmails(data) {
  const adminHtml = loadTemplate('registrationAdmin.html', {
    parentName: data.parentName,
    parentEmail: data.parentEmail,
    parentPhone: data.parentPhone,
    childName: data.childName,
    childDob: data.childDob,
    childGender: data.childGender,
    program: data.program,
    previousSchool: data.previousSchool,
    message: data.message,
    date: new Date().toLocaleDateString('en-IN'),
  });

  const confirmHtml = loadTemplate('registrationConfirm.html', {
    parentName: data.parentName,
    childName: data.childName,
    program: data.program,
    phone: process.env.ADMIN_PHONE,
    email: process.env.ADMIN_EMAIL,
  });

  await transporter.sendMail({
    from: `"Pacific Global School" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Registration - ${data.childName} | Pacific Global School`,
    html: adminHtml,
  });

  await transporter.sendMail({
    from: `"Pacific Global School" <${process.env.GMAIL_USER}>`,
    to: data.parentEmail,
    subject: 'Welcome to Pacific Global School - Registration Received!',
    html: confirmHtml,
  });
}

async function sendContactEmail(data) {
  const html = loadTemplate('contactNotify.html', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    date: new Date().toLocaleDateString('en-IN'),
  });

  await transporter.sendMail({
    from: `"Pacific Global School Website" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Enquiry: ${data.subject} | Pacific Global School`,
    html: html,
  });
}

module.exports = { sendRegistrationEmails, sendContactEmail };
