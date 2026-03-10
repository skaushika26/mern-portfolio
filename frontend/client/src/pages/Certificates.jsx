import React, { useState } from 'react';
import { 
  FaCertificate, FaExternalLinkAlt, FaCalendar, FaAward,
  FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaReact,
  FaDatabase, FaBrain, FaShieldAlt, FaMicrochip, FaChartBar,
  FaGoogle, FaMicrosoft, FaApple
} from 'react-icons/fa';
import { 
  SiMongodb, SiCisco, SiNvidia, SiHackerrank, SiCoursera,
  SiTensorflow, SiNumpy, SiPandas, SiScikitlearn,
  SiOpencv
} from 'react-icons/si';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // All certificates data
  const certificates = [
    // Programming Languages
    {
      id: 1,
      title: "Python",
      issuer: "Marcello Tech",
      date: "2023",
      category: "Programming",
      icon: <FaPython color="#3776AB" size={24} />,
      color: "#3776AB",
      description: "Beginner-level course covering Python basics, syntax, and programming concepts.",
      skills: ["Python", "Programming Basics", "Syntax"],
      credentialId: "PYT2023-001",
      link: "https://example.com/certificate/python",
      thumbnail: "/certificates/python.jpg"
    },
    {
      id: 2,
      title: "Masters in Core Python",
      issuer: "Elysium Group of Companies",
      date: "2024",
      category: "Programming",
      icon: <FaPython color="#4B8BBE" size={24} />,
      color: "#4B8BBE",
      description: "Advanced Python programming covering OOP, file handling, modules, and real-world applications.",
      skills: ["Advanced Python", "OOP", "Modules", "File Handling"],
      credentialId: "ELYSIUM-PY-2024",
      link: "https://example.com/certificate/elysium-python",
      thumbnail: "/certificates/32665.png"
    },
    {
      id: 3,
      title: "Masters in C & C++",
      issuer: "Elysium Group of Companies",
      date: "2024",
      category: "Programming",
      icon: <FaJava color="#00599C" size={24} />,
      color: "#00599C",
      description: "Comprehensive course covering C and C++ programming fundamentals to advanced concepts.",
      skills: ["C", "C++", "Pointers", "Memory Management", "OOP"],
      credentialId: "ELYSIUM-CPP-2024",
      link: "https://example.com/certificate/elysium-cpp",
      thumbnail: "/certificates/32663.png"
    },
    {
      id: 4,
      title: "Java",
      issuer: "HackerRank",
      date: "2024",
      category: "Programming",
      icon: <FaJava color="#007396" size={24} />,
      color: "#007396",
      description: "Java programming certification covering core concepts and problem-solving.",
      skills: ["Java", "OOP", "Problem Solving"],
      credentialId: "HR-JAVA-2024",
      link: "https://example.com/certificate/hackerrank-java",
      thumbnail: "/certificates/12852.png"
    },
    {
      id: 5,
      title: "Introduction to C",
      issuer: "NPTEL",
      date: "2024",
      category: "Programming",
      icon: <FaJava color="#2277AA" size={24} />,
      color: "#2277AA",
      description: "Foundation course on C programming language covering basics to intermediate concepts.",
      skills: ["C Programming", "Pointers", "Arrays", "Functions"],
      credentialId: "NPTEL-C-2024",
      link: "https://example.com/certificate/nptel-c",
      thumbnail: "/certificates/4476.png"
    },

    // Databases
    {
      id: 6,
      title: "MongoDB",
      issuer: "MongoDB University",
      date: "2024",
      category: "Database",
      icon: <SiMongodb color="#47A248" size={24} />,
      color: "#47A248",
      description: "Hands-on training on MongoDB fundamentals, CRUD operations, and data modeling.",
      skills: ["MongoDB", "NoSQL", "CRUD", "Data Modeling", "Aggregation"],
      credentialId: "MDB-2024-001",
      link: "https://example.com/certificate/mongodb",
      thumbnail: "/certificates/mongodb.jpg"
    },
    {
      id: 7,
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      date: "December 2025",
      category: "Database",
      icon: <FaDatabase color="#F29111" size={24} />,
      color: "#F29111",
      description: "Comprehensive introduction to SQL and relational database concepts.",
      skills: ["SQL", "MySQL", "Database Design", "Queries", "Joins"],
      credentialId: "df8e8fe4a1c24b869bf648456eb0fdc8",
      link: "https://example.com/certificate/sql",
      thumbnail: "/certificates/sql.jpg"
    },

    // AI & Machine Learning
    {
      id: 8,
      title: "Machine Learning",
      issuer: "Marcello Tech",
      date: "2024",
      category: "AI/ML",
      icon: <FaBrain color="#FF6F00" size={24} />,
      color: "#FF6F00",
      description: "Theoretical aspects of machine learning algorithms and their applications.",
      skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Algorithms"],
      credentialId: "ML2024-002",
      link: "https://example.com/certificate/ml",
      thumbnail: "/certificates/ml.jpg"
    },
    {
      id: 9,
      title: "AI/ML Internship",
      issuer: "Internshala Trainings",
      date: "February 2026",
      category: "AI/ML",
      icon: <FaBrain color="#0A66C2" size={24} />,
      color: "#0A66C2",
      description: "Hands-on internship covering machine learning algorithms and AI applications.",
      skills: ["Machine Learning", "AI", "Python", "Scikit-learn", "TensorFlow"],
      credentialId: "IS-AIML-2026",
      link: "https://example.com/certificate/internshala-aiml",
      thumbnail: "/certificates/34116.png"
    },
    {
      id: 10,
      title: "Machine Learning with AI – Skill India (NSDC)",
      issuer: "Internshala",
      date: "2025",
      category: "AI/ML",
      icon: <FaBrain color="#FF9933" size={24} />,
      color: "#FF9933",
      description: "Government-certified program on machine learning and AI applications.",
      skills: ["Machine Learning", "AI", "Python", "Data Science"],
      credentialId: "NSDC-ML-2025",
      link: "https://example.com/certificate/nsdc-ml",
      thumbnail: "/certificates/29818.png"
    },
    {
      id: 11,
      title: "Introduction to Deep Learning Fundamentals",
      issuer: "NVIDIA",
      date: "2025",
      category: "AI/ML",
      icon: <SiNvidia color="#76B900" size={24} />,
      color: "#76B900",
      description: "Foundational course on deep learning concepts and neural networks.",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "GPU Computing"],
      credentialId: "NVIDIA-DL-2025",
      link: "https://example.com/certificate/nvidia-dl",
      thumbnail: "/certificates/4474.png"
    },
    {
      id: 12,
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "AI/ML",
      icon: <FaDatabase color="#00A4EF" size={24} />,
      color: "#00A4EF",
      description: "Comprehensive introduction to data science concepts and workflows.",
      skills: ["Data Science", "Python", "Statistics", "Visualization"],
      credentialId: "INFOSYS-DS-2025",
      link: "https://example.com/certificate/infosys-ds",
      thumbnail: "/certificates/4482.png"
    },
    {
      id: 13,
      title: "Data Science and Data Analytics",
      issuer: "HP LIFE",
      date: "2025",
      category: "AI/ML",
      icon: <FaChartBar color="#0096D6" size={24} />,
      color: "#0096D6",
      description: "Practical training on data science and analytics tools and techniques.",
      skills: ["Data Science", "Analytics", "Excel", "Visualization"],
      credentialId: "HP-DS-2025",
      link: "https://example.com/certificate/hp-ds",
      thumbnail: "/certificates/4467.png"
    },

    // Generative AI
    {
      id: 14,
      title: "Certified Generative AI",
      issuer: "Coursera",
      date: "2025",
      category: "Generative AI",
      icon: <SiCoursera color="#0056D2" size={24} />,
      color: "#0056D2",
      description: "Comprehensive certification on generative AI technologies and applications.",
      skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"],
      credentialId: "COURSERA-GENAI-2025",
      link: "https://example.com/certificate/coursera-genai",
      thumbnail: "/certificates/coursera.jpg"
    },
    {
      id: 15,
      title: "Introduction to Large Language Models",
      issuer: "United Latino Students Association",
      date: "October 2025",
      category: "Generative AI",
      icon: <FaBrain color="#FF6B6B" size={24} />,
      color: "#FF6B6B",
      description: "Foundational course on large language models and their applications.",
      skills: ["LLMs", "NLP", "Transformers", "GPT"],
      credentialId: "JNZGT54129I7",
      link: "https://example.com/certificate/llm",
      thumbnail: "/certificates/llm.jpg"
    },
    {
      id: 16,
      title: "Introduction to Generative AI",
      issuer: "United Latino Students Association",
      date: "October 2025",
      category: "Generative AI",
      icon: <FaBrain color="#4ECDC4" size={24} />,
      color: "#4ECDC4",
      description: "Introduction to generative AI concepts, tools, and applications.",
      skills: ["Generative AI", "AI Art", "Content Generation", "Prompting"],
      credentialId: "4WT22X8PEEJI",
      link: "https://example.com/certificate/genai",
      thumbnail: "/certificates/genai.jpg"
    },

    // Cybersecurity
    {
      id: 17,
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "2025",
      category: "Cybersecurity",
      icon: <FaShieldAlt color="#1BA0D7" size={24} />,
      color: "#1BA0D7",
      description: "Essential cybersecurity concepts, threats, and protection mechanisms.",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis", "Security Best Practices"],
      credentialId: "CISCO-CSE-2025",
      link: "https://example.com/certificate/cisco-cyber",
      thumbnail: "/certificates/31858.png"
    },
    {
      id: 18,
      title: "Software Testing",
      issuer: "NPTEL",
      date: "2025",
      category: "Cybersecurity",
      icon: <FaShieldAlt color="#FF6B6B" size={24} />,
      color: "#FF6B6B",
      description: "Comprehensive course on software testing methodologies and practices.",
      skills: ["Testing", "QA", "Test Cases", "Automation", "Debugging"],
      credentialId: "NPTEL-ST-2025",
      link: "https://example.com/certificate/nptel-testing",
      thumbnail: "/certificates/4478.png"
    },

    // IoT
    {
      id: 19,
      title: "Exploring Internet of Things with Cisco Packet Tracer",
      issuer: "Cisco",
      date: "2025",
      category: "IoT",
      icon: <FaMicrochip color="#00BCEB" size={24} />,
      color: "#00BCEB",
      description: "Hands-on IoT simulation and networking using Cisco Packet Tracer.",
      skills: ["IoT", "Cisco Packet Tracer", "Networking", "Simulation"],
      credentialId: "CISCO-IOT-2025",
      link: "https://example.com/certificate/cisco-iot",
      thumbnail: "/certificates/iot.jpg"
    },

    // Frontend Development
    {
      id: 20,
      title: "Frontend Development",
      issuer: "REVAMP",
      date: "2025",
      category: "Frontend",
      icon: <FaReact color="#61DAFB" size={24} />,
      color: "#61DAFB",
      description: "Comprehensive frontend development course covering modern web technologies.",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      credentialId: "REVAMP-FE-2025",
      link: "https://example.com/certificate/revamp",
      thumbnail: "/certificates/4470.png"
    },

    // Data Analytics - FIXED: Removed SiPowerbi and used FaChartBar instead
    {
      id: 21,
      title: "Microsoft Certified: Power BI Data Analyst",
      issuer: "Microsoft",
      date: "January 2026",
      category: "Data Analytics",
      icon: <FaChartBar color="#F2C811" size={24} />,  // Using FaChartBar instead
      color: "#F2C811",
      description: "Professional certification for Power BI data analysis and visualization.",
      skills: ["Power BI", "Data Visualization", "DAX", "Data Modeling"],
      credentialId: "MS-PBI-2026",
      link: "https://example.com/certificate/powerbi",
      thumbnail: "/certificates/29821.png"
    },
    {
      id: 22,
      title: "Board Certificate for Data Science for Beginners",
      issuer: "Board",
      date: "2025",
      category: "Data Analytics",
      icon: <FaChartBar color="#4CAF50" size={24} />,
      color: "#4CAF50",
      description: "Foundation certification for data science concepts and practices.",
      skills: ["Data Science", "Statistics", "Analysis", "Visualization"],
      credentialId: "BOARD-DS-2025",
      link: "https://example.com/certificate/board-ds",
      thumbnail: "/certificates/29823.png"
    },

    // NLP
    {
      id: 23,
      title: "Introduction to Neural Language Processing",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "NLP",
      icon: <FaBrain color="#9C27B0" size={24} />,
      color: "#9C27B0",
      description: "Foundation course on neural approaches to language processing.",
      skills: ["NLP", "Neural Networks", "Text Processing", "Tokenization"],
      credentialId: "INFOSYS-NLP-2025",
      link: "https://example.com/certificate/infosys-nlp",
      thumbnail: "/certificates/4488.png"
    },

    // Google Certifications
    {
      id: 24,
      title: "Google Analytics Certification",
      issuer: "United Latino Students Association",
      date: "April 2025",
      expiry: "April 2026",
      category: "Analytics",
      icon: <FaGoogle color="#4285F4" size={24} />,
      color: "#4285F4",
      description: "Professional certification in Google Analytics for web analytics.",
      skills: ["Google Analytics", "Web Analytics", "Data Tracking", "Reporting"],
      credentialId: "140661540",
      link: "https://example.com/certificate/google-analytics",
      thumbnail: "/certificates/google.jpg"
    },

    // Participation Certificates
    {
      id: 25,
      title: "Naukri Contest Participation",
      issuer: "Naukri Campus",
      date: "2026",
      category: "Participation",
      icon: <FaAward color="#FF5733" size={24} />,
      color: "#FF5733",
      description: "Participation certificate for Naukri online coding contest.",
      skills: ["Coding", "Problem Solving", "Algorithms"],
      credentialId: "NAUKRI-PART-2026",
      link: "https://example.com/certificate/naukri-part",
      thumbnail: "/certificates/33105.png"
    },
    {
      id: 26,
      title: "Participation Certificate - Intercollege Event",
      issuer: "Velammal College of Engineering & Technology",
      date: "2025",
      category: "Participation",
      icon: <FaAward color="#2E7D32" size={24} />,
      color: "#2E7D32",
      description: "Participation certificate for intercollege technical event.",
      skills: ["Teamwork", "Technical Skills", "Presentation"],
      credentialId: "VCET-PART-2025",
      link: "https://example.com/certificate/vcet-part",
      thumbnail: "/certificates/9914.png"
    },
    {
      id: 27,
      title: "Naukri Contest Participation Certificate",
      issuer: "Naukri.com",
      date: "2026",
      category: "Participation",
      icon: <FaAward color="#1E88E5" size={24} />,
      color: "#1E88E5",
      description: "Participation certificate for Naukri coding competition.",
      skills: ["Competitive Programming", "Algorithms", "Problem Solving"],
      credentialId: "NAUKRI-2026",
      link: "https://example.com/certificate/naukri",
      thumbnail: "/certificates/35563.png"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Certificates', count: certificates.length },
    { id: 'Programming', name: 'Programming', count: certificates.filter(c => c.category === 'Programming').length },
    { id: 'Database', name: 'Database', count: certificates.filter(c => c.category === 'Database').length },
    { id: 'AI/ML', name: 'AI & ML', count: certificates.filter(c => c.category === 'AI/ML').length },
    { id: 'Generative AI', name: 'Generative AI', count: certificates.filter(c => c.category === 'Generative AI').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: certificates.filter(c => c.category === 'Cybersecurity').length },
    { id: 'IoT', name: 'IoT', count: certificates.filter(c => c.category === 'IoT').length },
    { id: 'Frontend', name: 'Frontend', count: certificates.filter(c => c.category === 'Frontend').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: certificates.filter(c => c.category === 'Data Analytics').length },
    { id: 'NLP', name: 'NLP', count: certificates.filter(c => c.category === 'NLP').length },
    { id: 'Analytics', name: 'Analytics', count: certificates.filter(c => c.category === 'Analytics').length },
    { id: 'Participation', name: 'Participation', count: certificates.filter(c => c.category === 'Participation').length }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '100px 20px 50px',
      backgroundColor: '#0b1f0b',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ 
            color: '#2eff7e', 
            fontSize: '3rem',
            marginBottom: '15px',
            animation: 'glow 2s ease-in-out infinite',
            textShadow: '0 0 20px rgba(46, 255, 126, 0.3)'
          }}>
            My Certifications
          </h1>
          <p style={{ 
            color: '#b6ffb6', 
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explore the milestones I've earned through learning and dedication.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                backgroundColor: selectedCategory === category.id ? '#2eff7e' : 'transparent',
                color: selectedCategory === category.id ? '#0b1f0b' : '#b6ffb6',
                border: `1px solid ${selectedCategory === category.id ? '#2eff7e' : '#2eff7e'}`,
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: selectedCategory === category.id ? 'bold' : 'normal'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(46, 255, 126, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '50px'
        }}>
          {filteredCertificates.map(cert => (
            <div
              key={cert.id}
              style={{
                backgroundColor: 'rgba(30, 74, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${cert.color}`,
                borderRadius: '20px',
                padding: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: expandedId === cert.id ? `0 0 30px ${cert.color}` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 0 25px ${cert.color}`;
              }}
              onMouseLeave={(e) => {
                if (expandedId !== cert.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
              onClick={() => toggleExpand(cert.id)}
            >
              {/* Background Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${cert.color}15 0%, transparent 70%)`,
                animation: 'rotate 10s linear infinite',
                zIndex: 1
              }}></div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Header with Icon and Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: '10px',
                    borderRadius: '12px'
                  }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h2 style={{ color: cert.color, fontSize: '1.2rem', margin: 0 }}>{cert.title}</h2>
                    <p style={{ color: '#b6ffb6', fontSize: '0.9rem' }}>{cert.issuer}</p>
                  </div>
                </div>

                {/* Date */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  marginBottom: '10px'
                }}>
                  <FaCalendar />
                  <span>{cert.date}</span>
                  {cert.expiry && (
                    <>
                      <span style={{ margin: '0 5px' }}>•</span>
                      <span>Expires {cert.expiry}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p style={{ 
                  color: '#d1d5db', 
                  lineHeight: '1.6',
                  marginBottom: '15px',
                  fontSize: '0.95rem'
                }}>
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '15px' 
                }}>
                  {cert.skills.slice(0, expandedId === cert.id ? cert.skills.length : 3).map((skill, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(46, 255, 126, 0.1)',
                      border: `1px solid ${cert.color}`,
                      color: cert.color,
                      padding: '4px 10px',
                      borderRadius: '15px',
                      fontSize: '0.8rem'
                    }}>
                      {skill}
                    </span>
                  ))}
                  {expandedId !== cert.id && cert.skills.length > 3 && (
                    <span style={{
                      color: '#b6ffb6',
                      fontSize: '0.8rem',
                      padding: '4px 0'
                    }}>
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p style={{ 
                    color: '#b6ffb6', 
                    fontSize: '0.8rem',
                    marginBottom: '15px'
                  }}>
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Show Credential Button */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  borderTop: '1px solid rgba(46, 255, 126, 0.2)',
                  paddingTop: '15px'
                }}>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: cert.color,
                      textDecoration: 'none',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${cert.color}`;
                      e.currentTarget.style.gap = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.gap = '5px';
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    [Show credential] <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          <div style={{
            backgroundColor: 'rgba(30, 74, 30, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #2eff7e',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <FaCertificate color="#2eff7e" size={40} />
            <h3 style={{ color: '#2eff7e', fontSize: '2rem', margin: '10px 0' }}>
              {certificates.length}
            </h3>
            <p style={{ color: '#b6ffb6' }}>Total Certifications</p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(30, 74, 30, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #2eff7e',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <FaBrain color="#2eff7e" size={40} />
            <h3 style={{ color: '#2eff7e', fontSize: '2rem', margin: '10px 0' }}>
              {certificates.filter(c => c.category.includes('AI') || c.category.includes('ML')).length}
            </h3>
            <p style={{ color: '#b6ffb6' }}>AI/ML Certifications</p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(30, 74, 30, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #2eff7e',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <FaAward color="#2eff7e" size={40} />
            <h3 style={{ color: '#2eff7e', fontSize: '2rem', margin: '10px 0' }}>
              {certificates.filter(c => c.category === 'Participation').length}
            </h3>
            <p style={{ color: '#b6ffb6' }}>Participation</p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '30px',
          borderTop: '1px solid rgba(46, 255, 126, 0.3)',
          color: '#b6ffb6',
          fontSize: '1.1rem',
          fontStyle: 'italic'
        }}>
          &lt;KS /&gt; Continuous learning, continuous growth.
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(46, 255, 126, 0.3); }
          50% { text-shadow: 0 0 40px rgba(46, 255, 126, 0.7); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Certificates;