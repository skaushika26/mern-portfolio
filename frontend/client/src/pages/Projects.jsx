import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCat, 
  FaStore, 
  FaRobot, 
  FaFileAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaLightbulb
} from 'react-icons/fa';
import { 
  SiTailwindcss
} from 'react-icons/si';

const Projects = () => {
  const [catImage, setCatImage] = useState('cat1');
  const [bulbOn, setBulbOn] = useState(false);

  const toggleCat = () => {
    setCatImage(prev => prev === 'cat1' ? 'cat2' : 'cat1');
  };

  const toggleBulb = () => {
    setBulbOn(prev => !prev);
  };

  // Your projects data
  const projectsData = [
    // 1. Cat & Bulb Dynamic Page
    {
      title: "Cat & Bulb Dynamic Page",
      description: "Interactive page with cat and bulb images that change when clicking buttons.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      category: "javascript",
      github: "https://github.com/skaushika26/cat-bulb-demo",
      live: "https://cat-bulb-demo.vercel.app",
      icon: <FaCat />,
      color: "#f7df1e",
      isInteractive: true,
      features: [
        "Click button to change cat image",
        "Toggle bulb on/off with animation",
        "Pure JavaScript DOM manipulation"
      ],
      learning: "DOM manipulation, event handling, CSS animations"
    },

    // 2. Food Store Project
    {
      title: "Food Store Project",
      description: "A responsive food store website built with HTML, CSS, and Tailwind CSS.",
      fullDescription: "A fully responsive food store website showcasing various food items, categories, and an intuitive shopping interface.",
      technologies: ["HTML5", "CSS3", "Tailwind CSS"],
      icons: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />],
      category: "frontend",
      github: "https://github.com/skaushika26/food-store",
      live: "https://food-store.vercel.app",
      icon: <FaStore />,
      color: "#f97316",
      features: [
        "Fully responsive (mobile, tablet, laptop)",
        "Flexbox and Grid layouts",
        "Tailwind CSS utility classes",
        "Container and safety containers"
      ],
      skillsGained: "Basic HTML, CSS and Tailwind CSS. Mainly the layout properties like flex, grid, container and multiple safety containers are used. For phone the size is sm, tab-md, laptop-lg since the size of the website changes based on the device size to make it responsive."
    },

    // 3. ML Portfolio | 3 in 1 Projects
    {
      title: "ML Portfolio | 3 in 1 Projects",
      description: "A portfolio showcasing three machine learning projects with interactive thumbnails.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
      icons: [<FaHtml5 />, <SiTailwindcss />, <FaJs />],
      category: "ml",
      github: "https://github.com/skaushika26/ml-portfolio",
      live: "https://ml-portfolio.vercel.app",
      icon: <FaRobot />,
      color: "#9333ea",
      projects: [
        "Project 1: Image Classification",
        "Project 2: Sentiment Analysis", 
        "Project 3: Price Prediction"
      ],
      features: [
        "Three ML projects showcased",
        "Interactive thumbnails",
        "Project descriptions and outcomes"
      ]
    },

    // 4. Portfolio using HTML & Tailwind CSS
    {
      title: "Personal Portfolio",
      description: "A clean, responsive portfolio website built with HTML and Tailwind CSS.",
      technologies: ["HTML5", "Tailwind CSS"],
      icons: [<FaHtml5 />, <SiTailwindcss />],
      category: "frontend",
      github: "https://github.com/skaushika26/portfolio",
      live: "https://portfolio.vercel.app",
      icon: <FaFileAlt />,
      color: "#0ea5e9",
      features: [
        "Clean, minimalist design",
        "Fully responsive",
        "Project showcase section",
        "Skills and experience display"
      ]
    }
  ];

  return (
    <div style={styles.page}>
      {/* Main Content */}
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>My Projects</h1>
          <p style={styles.subtitle}>
            A curated collection of projects showcasing my skills, creativity, and problem-solving approach
          </p>
        </div>

        {/* Projects Grid */}
        <div style={styles.projectsGrid}>
          {projectsData.map((project, idx) => (
            <div key={idx} style={styles.projectCard} className="project-card">
              {/* Project Header */}
              <div style={styles.projectHeader}>
                <span style={{ ...styles.projectIcon, color: project.color }}>
                  {project.icon}
                </span>
                <h2 style={styles.projectTitle}>{project.title}</h2>
              </div>

              {/* Project Description */}
              <p style={styles.projectDescription}>{project.description}</p>
              {project.fullDescription && (
                <p style={styles.fullDescription}>{project.fullDescription}</p>
              )}

              {/* Interactive Demo for Cat & Bulb */}
              {project.isInteractive && (
                <div style={styles.demoContainer}>
                  <div style={styles.imageContainer}>
                    <div style={styles.demoBox}>
                      <span style={styles.demoText}>
                        {catImage === 'cat1' ? '😺 Cat 1' : '😸 Cat 2'}
                      </span>
                      <span style={styles.demoText}>
                        {bulbOn ? '💡 Bulb ON' : '⚫ Bulb OFF'}
                      </span>
                    </div>
                  </div>
                  <div style={styles.buttonGroup}>
                    <button onClick={toggleCat} style={styles.demoButton}>
                      <FaCat /> Change Cat
                    </button>
                    <button onClick={toggleBulb} style={styles.demoButton}>
                      <FaLightbulb /> {bulbOn ? 'Turn Off' : 'Turn On'}
                    </button>
                  </div>
                </div>
              )}

              {/* ML Projects List */}
              {project.projects && (
                <div style={styles.mlList}>
                  <h4 style={styles.mlTitle}>Projects included:</h4>
                  {project.projects.map((p, i) => (
                    <span key={i} style={styles.mlItem}>• {p}</span>
                  ))}
                </div>
              )}

              {/* Skills Gained Section */}
              {project.skillsGained && (
                <div style={styles.skillsGained}>
                  <h4 style={styles.skillsGainedTitle}>Skills gained:</h4>
                  <p style={styles.skillsGainedText}>{project.skillsGained}</p>
                </div>
              )}

              {/* Features List */}
              {project.features && (
                <div style={styles.featuresList}>
                  {project.features.map((feature, i) => (
                    <span key={i} style={styles.featureTag}>{feature}</span>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div style={styles.techStack}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={styles.techTag}>{tech}</span>
                ))}
              </div>

              {/* Learning Outcome */}
              {project.learning && (
                <p style={styles.learningText}>
                  <strong>Learning:</strong> {project.learning}
                </p>
              )}

              {/* Links */}
              <div style={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effects */}
      <style>{`
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(46, 160, 67, 0.2);
          border-color: #2ea043 !important;
        }
        
        .demo-button:hover {
          background-color: #2ea043 !important;
          color: white !important;
          transform: translateY(-2px);
        }
        
        .project-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

// Styles
const styles = {
  page: {
    backgroundColor: '#0a1a0a',
    minHeight: '100vh',
    paddingTop: '80px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 30px 50px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.8rem',
    color: '#2ea043',
    marginBottom: '15px',
    fontWeight: '600',
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    backgroundColor: '#0f1f0f',
    border: '1px solid #1f3a1f',
    borderRadius: '16px',
    padding: '25px',
    transition: 'all 0.3s ease',
  },
  projectHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  projectIcon: {
    fontSize: '2rem',
  },
  projectTitle: {
    color: '#ffffff',
    fontSize: '1.3rem',
    fontWeight: '500',
  },
  projectDescription: {
    color: '#b0b0b0',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  fullDescription: {
    color: '#9a9a9a',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  demoContainer: {
    marginBottom: '20px',
    textAlign: 'center',
    backgroundColor: '#1a2a1a',
    borderRadius: '12px',
    padding: '15px',
  },
  imageContainer: {
    marginBottom: '15px',
  },
  demoBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px',
  },
  demoText: {
    color: '#ffffff',
    fontSize: '1.2rem',
    padding: '10px 20px',
    backgroundColor: '#0f1f0f',
    borderRadius: '8px',
    border: '1px solid #2ea043',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  demoButton: {
    padding: '8px 20px',
    backgroundColor: '#0f1f0f',
    color: '#ffffff',
    border: '1px solid #2ea043',
    borderRadius: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },
  mlList: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#1a2a1a',
    borderRadius: '8px',
  },
  mlTitle: {
    color: '#2ea043',
    fontSize: '0.95rem',
    marginBottom: '8px',
  },
  mlItem: {
    display: 'block',
    color: '#b0b0b0',
    fontSize: '0.9rem',
    marginBottom: '5px',
  },
  skillsGained: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#1a2a1a',
    borderRadius: '8px',
  },
  skillsGainedTitle: {
    color: '#2ea043',
    fontSize: '0.95rem',
    marginBottom: '8px',
    fontWeight: '500',
  },
  skillsGainedText: {
    color: '#b0b0b0',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  featuresList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  },
  featureTag: {
    padding: '4px 10px',
    backgroundColor: '#1a2a1a',
    color: '#b0b0b0',
    borderRadius: '15px',
    fontSize: '0.8rem',
    border: '1px solid #2a4a2a',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  },
  techTag: {
    padding: '4px 10px',
    backgroundColor: '#1a2a1a',
    color: '#ffffff',
    borderRadius: '15px',
    fontSize: '0.8rem',
  },
  learningText: {
    color: '#b0b0b0',
    fontSize: '0.9rem',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  links: {
    display: 'flex',
    gap: '20px',
    marginTop: '15px',
    borderTop: '1px solid #1f3a1f',
    paddingTop: '15px',
  },
  link: {
    color: '#b0b0b0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'color 0.3s ease',
  },
};

export default Projects;