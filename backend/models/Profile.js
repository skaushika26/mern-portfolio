const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    default: "Kaushika S"
  },
  title: { 
    type: String, 
    required: true,
    default: "MERN Stack Developer"
  },
  bio: { 
    type: String, 
    required: true,
    default: "Driven by creativity and innovation, I craft elegant and interactive web experiences. Currently pursuing Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)."
  },
  location: {
    type: String,
    default: "Madurai, Tamil Nadu, India"
  },
  email: {
    type: String,
    default: "kaushika@example.com"
  },
  photoUrl: {
    type: String,
    default: "/images/profile.jpg"
  },
  socialLinks: {
    github: { type: String, default: "https://github.com/kaushika" },
    linkedin: { type: String, default: "https://linkedin.com/in/kaushika" },
    leetcode: { type: String, default: "https://leetcode.com/kaushika" }
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Profile', profileSchema);