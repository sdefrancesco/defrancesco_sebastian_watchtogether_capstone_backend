import express from 'express';
import Link from '../models/link.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let links = await Link.find()
        res.status(200).json(links);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch links' });
    }
});

router.post('/new', async (req, res) => {
    try {
        let newLink = new Link()
        newLink.link = req.body.link
        newLink.save()
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch links' });
    }
});

export default router;
