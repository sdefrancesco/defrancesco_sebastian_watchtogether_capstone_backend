import express from 'express';
import Link from '../models/link.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'All links' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch links' });
    }
});

export default router;
