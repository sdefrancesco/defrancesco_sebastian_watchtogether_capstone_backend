import express from 'express';
import Comment from '../models/comment.js';

const router = express.Router();

// GET /api/comments/:linkId - Get all comments for a specific video link
router.get('/:linkId', async (req, res) => {
  try {
    const comments = await Comment.find({ linkId: req.params.linkId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching comments' });
  }
});

// POST /api/comments - Add a new comment
router.post('/', async (req, res) => {
  const { text, linkId, author } = req.body;

  if (!text || !linkId) {
    return res.status(400).json({ message: 'Text and linkId are required' });
  }

  try {
    const newComment = new Comment({ text, linkId, author });
    const saved = await newComment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving comment' });
  }
});

export default router;
