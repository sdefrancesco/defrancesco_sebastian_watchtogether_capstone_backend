import express from 'express';
import User from '../models/user.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'All users' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch links' });
    }
});

export default router;
