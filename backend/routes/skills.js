const express = require('express');
const router = express.Router();

const skills = {
  "programmingLanguages": ["Java", "C", "Python", "JavaScript"],
  "frontend": ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
  "backend": ["Node.js", "Express.js", "RESTful APIs"],
  "database": ["MongoDB", "MySQL"],
  "tools": ["Git", "GitHub", "Postman", "VS Code", "EmailJS", "Cloudinary"],
  "design": ["Figma"],
  "deployment": ["Vercel", "Render", "GitHub Pages"]
};

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;
