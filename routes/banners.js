const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner'); // Assuming the Banner model is in the models directory

// Create a new banner
router.post('/', async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();
    res.status(201).json(banner);
  } catch (error) {
    res.status(400).json({ message: 'Error creating banner', error });
  }
});

// Get all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving banners', error });
  }
});

// Other routes for update, delete, etc.

module.exports = router;
