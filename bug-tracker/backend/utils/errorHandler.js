// Centralized error handling middleware
function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    // Mongoose validation error
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: err.message
      });
    }
  
    // Mongoose cast error (invalid ObjectId)
    if (err.name === 'CastError') {
      return res.status(400).json({
        error: 'Invalid ID format',
        details: err.message
      });
    }
  
    // Default error handler
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
  
  module.exports = errorHandler;