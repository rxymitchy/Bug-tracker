const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bugRouter = require('./routes/bugRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Request logging
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/bugs', bugRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;