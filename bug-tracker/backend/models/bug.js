const mongoose = require('mongoose');

// Define bug status enum
const STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved'
};

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  status: {
    type: String,
    enum: Object.values(STATUS),
    default: STATUS.OPEN
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
bugSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = { Bug, STATUS };