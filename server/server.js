const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const registrationRoutes = require('./routes/registration');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', registrationRoutes);
app.use('/api', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Pacific Global School API is running' });
});

// Serve React client build in production
const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

// All non-API routes serve the React app (supports client-side routing)
app.get('*path', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
