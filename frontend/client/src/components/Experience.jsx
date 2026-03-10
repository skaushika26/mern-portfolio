import React, { useState } from 'react';
import { 
  FaBriefcase, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt,
  FaTrophy, FaRobot, FaCode, FaMicrochip, FaLaptopCode,
  FaMedal, FaAward, FaCertificate
} from 'react-icons/fa';
import { SiZoho } from 'react-icons/si';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  // All experiences from 2023 onwards
  const experiences = [
    {
      id: 1,
      title: "Zoho Cliqtrix '26",
      organization: "Zoho Corporation",
      date: "November 2025",
      location: "Chennai, Tamil Nadu",
      icon: <SiZoho color="#2eff7e" size={28} />,
      color: "#2eff7e",
      description: [
        "Gained hands-on experience building an interactive chatbot using Zoho SalesIQ's CodeLess Bot Builder.",
        "The chatbot was seamlessly integrated with a website and Zoho Forms to guide students in course selection and assist them during the form-filling process.",
        "This experience strengthened my understanding of chatbot workflows, user engagement, and no-code automation."
      ],
      skills: ["Logic", "Problem Solving", "User Experience", "Teamwork"],
      proofLink: "https://example.com/zoho-cliqtrix",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "IoT Project Hackathon",
      organization: "Hindustan Engineering College",
      date: "February 2026",
      location: "Coimbatore, Tamil Nadu",
      icon: <FaMicrochip color="#ffaa00" size={28} />,
      color: "#ffaa00",
      description: [
        "Worked on an innovative IoT project integrating sensors and microcontrollers for real-time data monitoring.",
        "Developed a smart monitoring system that collects environmental data and displays it through a web interface.",
        "Collaborated with a team of 4 members to design and implement the complete IoT solution."
      ],
      skills: ["IoT", "Arduino", "Sensors", "Team Collaboration", "Python"],
      proofLink: "https://example.com/iot-project",
      category: "Workshop"
    },
    {
      id: 3,
      title: "MERN Stack Internship",
      organization: "Dot Com Infoway",
      date: "December 2025 - January 2026",
      location: "Madurai, Tamil Nadu",
      icon: <FaLaptopCode color="#ff6b6b" size={28} />,
      color: "#ff6b6b",
      description: [
        "Completed intensive internship focused on full-stack development using MERN stack (MongoDB, Express.js, React, Node.js).",
        "Built real-world projects including an e-commerce platform and a task management application.",
        "Learned industry best practices for code organization, API design, and database optimization."
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      proofLink: "https://example.com/mern-internship",
      category: "Internship"
    },
    {
      id: 4,
      title: "In-house Internship",
      organization: "Velammal College of Engineering and Technology",
      date: "May 2025 - July 2025",
      location: "Madurai, Tamil Nadu",
      icon: <FaBriefcase color="#4ecdc4" size={28} />,
      color: "#4ecdc4",
      description: [
        "Completed in-house internship at VCET, gaining hands-on experience in web development and modern technologies.",
        "Worked on developing internal college portal features and optimizing existing web applications.",
        "Collaborated with faculty members to create interactive learning modules for students."
      ],
      skills: ["Web Development", "UI/UX", "JavaScript", "Teamwork"],
      proofLink: "https://example.com/inhouse-internship",
      category: "Internship"
    },
    {
      id: 5,
      title: "Mobile Robotics Workshop",
      organization: "Thiagarajar College of Engineering",
      date: "March 2024",
      location: "Madurai, Tamil Nadu",
      icon: <FaRobot color="#a78bfa" size={28} />,
      color: "#a78bfa",
      description: [
        "Participated in intensive workshop on mobile robotics, learning about autonomous navigation and control systems.",
        "Built and programmed a line-following robot using Arduino and various sensors.",
        "Gained practical experience in embedded systems, motor control, and sensor integration."
      ],
      skills: ["Robotics", "Arduino", "Embedded Systems", "C++", "Sensors"],
      proofLink: "https://example.com/robotics-workshop",
      category: "Workshop"
    },
    {
      id: 6,
      title: "Mepco Hackathon",
      organization: "Mepco Schlenk Engineering College",
      date: "September 2024",
      location: "Sivakasi, Tamil Nadu",
      icon: <FaCode color="#ff9f1c" size={28} />,
      color: "#ff9f1c",
      description: [
        "Participated in 24-hour hackathon focused on building innovative solutions for social problems.",
        "Developed a prototype for a waste management system using web technologies.",
        "Collaborated with cross-functional team to present the solution to judges within tight deadlines."
      ],
      skills: ["Hackathon", "Problem Solving", "Teamwork", "Presentation", "Rapid Prototyping"],
      proofLink: "https://example.com/mepco-hackathon",
      category: "Hackathon"
    },
    {
      id: 7,
      title: "Naukri Online Coding Contest",
      organization: "Online Naukri Platform",
      date: "January 2026",
      location: "Online",
      icon: <FaTrophy color="#ffd93d" size={28} />,
      color: "#ffd93d",
      description: [
        "Participated in national-level online coding competition hosted by Naukri platform.",
        "Solved complex algorithmic problems under time constraints, competing with thousands of participants.",
        "Improved problem-solving skills and learned new approaches to algorithmic challenges."
      ],
      skills: ["Algorithms", "Data Structures", "Competitive Programming", "Time Management"],
      proofLink: "https://example.com/naukri-contest",
      category: "Competition"
    }
  ];

  // Group experiences by category
  const categories = {
    Internship: experiences.filter(exp => exp.category === "Internship"),
    Workshop: experiences.filter(exp => exp.category === "Workshop"),
    Hackathon: experiences.filter(exp => exp.category === "Hackathon"),
    Competition: experiences.filter(exp => exp.category === "Competition")
  };

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
            EXPERIENCE
          </h1>
          <p style={{ 
            color: '#b6ffb6', 
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            My journey through workshops, internships, hackathons, and competitions
          </p>
        </div>

        {/* Timeline View - All experiences in chronological order */}
        <div style={{ marginBottom: '50px', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, #2eff7e 0%, #8affa0 50%, #2eff7e 100%)',
            boxShadow: '0 0 20px #2eff7e'
          }}></div>

          {[...experiences].sort((a, b) => {
            // Sort by date (most recent first)
            const dateA = new Date(a.date.split(' ')[1] === '2026' ? '2026' : '2025');
            const dateB = new Date(b.date.split(' ')[1] === '2026' ? '2026' : '2025');
            return dateB - dateA;
          }).map((exp, index) => (
            <div key={exp.id} style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '40px',
              position: 'relative',
              animation: 'fadeInUp 0.5s ease'
            }}>
              <div style={{
                width: '45%',
                backgroundColor: 'rgba(30, 74, 30, 0.4)',
                backdropFilter: 'blur(10px)',
                padding: '25px',
                borderRadius: '20px',
                border: `2px solid ${exp.color}`,
                boxShadow: `0 0 20px ${exp.color}`,
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = `0 0 30px ${exp.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 20px ${exp.color}`;
              }}
              onClick={() => toggleExpand(exp.id)}>
                
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [index % 2 === 0 ? 'right' : 'left']: '-35px',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: exp.color,
                  boxShadow: `0 0 20px ${exp.color}`,
                  zIndex: 2
                }}></div>

                {/* Category Badge */}
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  backgroundColor: exp.color,
                  color: '#0b1f0b',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {exp.category}
                </span>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  {exp.icon}
                  <div>
                    <h2 style={{ color: exp.color, fontSize: '1.3rem', margin: 0 }}>{exp.title}</h2>
                  </div>
                </div>

                {/* Organization and Date */}
                <div style={{ marginBottom: '15px' }}>
                  <p style={{ color: '#b6ffb6', fontSize: '1rem', marginBottom: '5px' }}>{exp.organization}</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#d1d5db', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaCalendar /> {exp.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description (show first line always, full when expanded) */}
                <div style={{ marginBottom: '15px' }}>
                  {expandedId === exp.id ? (
                    exp.description.map((para, idx) => (
                      <p key={idx} style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '10px' }}>
                        {para}
                      </p>
                    ))
                  ) : (
                    <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                      {exp.description[0]}
                    </p>
                  )}
                </div>

                {/* Skills Tags - Always visible */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '20px' 
                }}>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(46, 255, 126, 0.1)',
                      border: `1px solid ${exp.color}`,
                      color: exp.color,
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Proof Button - Exactly like screenshot */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  borderTop: '1px solid rgba(46, 255, 126, 0.2)',
                  paddingTop: '15px'
                }}>
                  <a 
                    href={exp.proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: exp.color,
                      textDecoration: 'none',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${exp.color}`;
                      e.currentTarget.style.gap = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.gap = '5px';
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    [View Proof] <FaExternalLinkAlt size={12} />
                  </a>
                </div>

                {/* Expand/Collapse Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '20px',
                  color: exp.color,
                  fontSize: '0.8rem',
                  opacity: 0.7
                }}>
                  {expandedId === exp.id ? 'Click to collapse' : 'Click to expand'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Summary Cards */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            color: '#2eff7e', 
            fontSize: '2rem', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Experience Summary
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} style={{
                backgroundColor: 'rgba(30, 74, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(46, 255, 126, 0.5)',
                borderRadius: '20px',
                padding: '20px',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ color: '#2eff7e', fontSize: '1.2rem', marginBottom: '10px' }}>
                  {category}
                </h3>
                <p style={{ color: '#b6ffb6', fontSize: '2rem', fontWeight: 'bold' }}>
                  {items.length}
                </p>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                  {items.length === 1 ? 'Experience' : 'Experiences'}
                </p>
              </div>
            ))}
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
          &lt;KS /&gt; Learning through experiences, growing with every opportunity.
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(46, 255, 126, 0.3); }
          50% { text-shadow: 0 0 40px rgba(46, 255, 126, 0.7); }
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

export default Experience;