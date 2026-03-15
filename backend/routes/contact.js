const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log('📬 Contact form submission:', { name, email, subject, message });
    res.status(201).json({ 
      message: 'Message sent successfully',
      data: { name, email, subject, message }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
