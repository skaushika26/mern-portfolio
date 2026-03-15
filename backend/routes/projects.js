const express = require('express');
const router = express.Router();

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Cat & Bulb Dynamic Page",
    description: "Interactive page with cat and bulb images that change when clicking buttons.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "javascript",
    github: "https://github.com/skaushika26/cat-bulb-demo",
    live: "https://cat-bulb-demo.vercel.app"
  },
  {
    id: 2,
    title: "Food Store Project",
    description: "A responsive food store website built with HTML, CSS, and Tailwind CSS.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/skaushika26/food-store",
    live: "https://food-store.vercel.app"
  },
  {
    id: 3,
    title: "ML Portfolio | 3 in 1 Projects",
    description: "A portfolio showcasing three machine learning projects with interactive thumbnails.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    category: "ml",
    github: "https://github.com/skaushika26/ml-portfolio",
    live: "https://ml-portfolio.vercel.app"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A clean, responsive portfolio website built with HTML and Tailwind CSS.",
    technologies: ["HTML5", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/skaushika26/portfolio",
    live: "https://portfolio.vercel.app"
  }
];

router.get('/', (req, res) => {
  res.json(projects);
});

router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;
