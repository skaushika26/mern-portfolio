const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// GET profile data
router.get('/', async (req, res) => {
  try {
    // Find the profile (assuming only one profile document exists)
    let profile = await Profile.findOne();
    
    // If no profile exists, create a default one
    if (!profile) {
      profile = new Profile();
      await profile.save();
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE profile (optional - for later use)
router.put('/', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {}, // empty filter means first document
      req.body,
      { new: true, upsert: true } // upsert creates if doesn't exist
    );
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;