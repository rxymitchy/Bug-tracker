const express = require('express');
const { Bug, STATUS } = require('../models/bug');
const validateBug = require('../utils/validateBug');

const router = express.Router();

// Get all bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (error) {
    next(error);
  }
});

// Create a new bug
router.post('/', validateBug, async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
});

// Get a single bug
router.get('/:id', async (req, res, next) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json(bug);
  } catch (error) {
    next(error);
  }
});

// Update a bug
router.put('/:id', validateBug, async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json(bug);
  } catch (error) {
    next(error);
  }
});

// Delete a bug
router.delete('/:id', async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json({ message: 'Bug deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;