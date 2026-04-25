const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const registrationRoutes = require('../server/routes/registration');
const contactRoutes = require('../server/routes/contact');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', registrationRoutes);
app.use('/api', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Pacific Global School API is running' });
});

module.exports = app;
