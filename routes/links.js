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

router.put('/:id', async (req, res) => {
    try {
      console.log(req.body)
      const updatedLink = await Link.findByIdAndUpdate(
        req.params.id,
        { link: req.body.link },
        { new: true }
      );
      if (!updatedLink) return res.status(404).json({ error: 'Link not found' });
      res.status(200).json(updatedLink);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update link' });
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const deletedLink = await Link.findByIdAndDelete(req.params.id);
      if (!deletedLink) return res.status(404).json({ error: 'Link not found' });
      res.status(200).json({ message: 'Link deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete link' });
    }
});

export default router;
