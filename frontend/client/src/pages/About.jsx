import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaCode, FaGraduationCap, FaBriefcase, FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import API from '../services/api';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log('Fetching from:', 'http://localhost:5000/api/profile');
        const response = await API.get('/profile');
        console.log('Profile data:', response.data);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Full error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Education timeline data
  const educationData = [
    {
      level: "B.E Computer Science & Engineering",
      institution: "Velammal College of Engineering and Technology, Madurai",
      year: "2023 - Present",
      grade: "CGPA: 8.49",
      icon: <FaGraduationCap color="#2eff7e" size={24} />,
      color: "#2eff7e"
    },
    {
      level: "XII (HSC) - Computer Science",
      institution: "Velammal Bodhi Campus, Madurai - Annupanadi",
      year: "2022 - 2023",
      grade: "87.6%",
      icon: <FaMedal color="#ffaa00" size={24} />,
      color: "#ffaa00"
    },
    {
      level: "X (SSLC)",
      institution: "Velammal Bodhi Campus, Madurai - Annupanadi",
      year: "2020 - 2021",
      grade: "88.2%",
      icon: <FaAward color="#ff6b6b" size={24} />,
      color: "#ff6b6b"
    }
  ];

  // Activities data
  const activitiesData = [
    {
      title: "In-house Internship",
      organization: "VCET (Velammal College of Engineering and Technology)",
      description: "Completed in-house internship at VCET, gaining hands-on experience in web development and modern technologies.",
      icon: <FaBriefcase color="#4ecdc4" size={20} />
    },
    {
      title: "Zoho Cliqtrix Participation",
      organization: "Zoho Corporation",
      description: "Actively participated in Zoho Cliqtrix '26, enhancing problem-solving skills and building innovative solutions.",
      icon: <FaTrophy color="#ffd93d" size={20} />
    },
    {
      title: "Online Naukri Member",
      organization: "Online Naukri Platform",
      description: "Joined Online Naukri to explore career opportunities and connect with industry professionals.",
      icon: <FaCertificate color="#a78bfa" size={20} />
    }
  ];

  // Soft skills with different colors
  const softSkills = [
    { name: "Problem Solving", color: "#ff6b6b", level: 90 },
    { name: "Leadership", color: "#4ecdc4", level: 85 },
    { name: "Team Collaboration", color: "#ffe66d", level: 88 },
    { name: "Time Management", color: "#a78bfa", level: 87 },
    { name: "Communication", color: "#ff9f1c", level: 86 },
    { name: "Adaptability", color: "#2eff7e", level: 89 }
  ];

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#0b1f0b'
      }}>
        <div style={{ color: '#2eff7e', fontSize: '1.5rem' }}>
          Loading profile...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#0b1f0b'
      }}>
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #ef4444',
          color: '#f87171',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>❌ Failed to Load Profile</h2>
          <p>{error}</p>
          <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
            Make sure:<br/>
            1. MongoDB is running (mongod)<br/>
            2. Backend is running (node server.js)<br/>
            3. Profile exists in database
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: '100px 20px 50px',
      backgroundColor: '#0b1f0b'
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Page Title with animation */}
        

        {/* Profile Section - Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Left Column - Profile Card */}
          <div style={{
            backgroundColor: 'rgba(30, 74, 30, 0.3)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '30px',
            border: '1px solid #2eff7e',
            boxShadow: '0 0 30px rgba(46, 255, 126, 0.2)'
          }}>
            {/* Profile Image */}
            
            
            <h2 style={{ 
              color: '#2eff7e', 
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '5px'
            }}>
              {profile?.name || ' Hello This is Kaushika S'}
            </h2>
            <h3 style={{ 
              color: '#b6ffb6', 
              textAlign: 'center', 
              marginBottom: '20px',
              fontSize: '1.2rem'
            }}>
              {profile?.title || 'MERN Stack Developer'}
            </h3>

            {/* Contact Info */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', justifyContent: 'center' }}>
                <FaMapMarkerAlt color="#2eff7e" />
                <span style={{ color: '#d1d5db' }}>{profile?.location || 'Madurai, Tamil Nadu'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', justifyContent: 'center' }}>
                <FaEnvelope color="#2eff7e" />
                <span style={{ color: '#d1d5db' }}>{profile?.email || 'tkvishnupriyacse@gmail.com'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px',
              borderTop: '1px solid rgba(46, 255, 126, 0.3)',
              paddingTop: '20px'
            }}>
              <a href={profile?.socialLinks?.github || '#'} target="_blank" rel="noopener noreferrer"
                 style={{ transition: 'transform 0.3s ease' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <FaGithub color="#b6ffb6" size={28} />
              </a>
              <a href={profile?.socialLinks?.linkedin || '#'} target="_blank" rel="noopener noreferrer"
                 style={{ transition: 'transform 0.3s ease' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <FaLinkedin color="#b6ffb6" size={28} />
              </a>
              <a href={profile?.socialLinks?.leetcode || '#'} target="_blank" rel="noopener noreferrer"
                 style={{ transition: 'transform 0.3s ease' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <SiLeetcode color="#b6ffb6" size={28} />
              </a>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div style={{
            backgroundColor: 'rgba(30, 74, 30, 0.3)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '30px',
            border: '1px solid #2eff7e'
          }}>
            <h2 style={{ color: '#2eff7e', fontSize: '2rem', marginBottom: '20px' }}>My Journey</h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '1.1rem' }}>
              {profile?.bio || 'Driven by creativity and innovation, I craft elegant and interactive web experiences. Currently pursuing Bachelor of Engineering in Computer Science and Engineering at Velammal College of Engineering and Technology.'}
            </p>
          </div>
        </div>

        {/* Education Timeline Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            color: '#2eff7e', 
            fontSize: '2.5rem', 
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Education Timeline
          </h2>
          
          <div style={{ position: 'relative' }}>
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

            {educationData.map((edu, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '30px',
                position: 'relative'
              }}>
                <div style={{
                  width: '45%',
                  backgroundColor: 'rgba(30, 74, 30, 0.4)',
                  backdropFilter: 'blur(10px)',
                  padding: '25px',
                  borderRadius: '20px',
                  border: `2px solid ${edu.color}`,
                  boxShadow: `0 0 20px ${edu.color}`,
                  position: 'relative',
                  animation: 'fadeInUp 0.5s ease'
                }}>
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    [index % 2 === 0 ? 'right' : 'left']: '-35px',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: edu.color,
                    boxShadow: `0 0 20px ${edu.color}`,
                    zIndex: 2
                  }}></div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    {edu.icon}
                    <h3 style={{ color: edu.color, fontSize: '1.3rem', margin: 0 }}>{edu.level}</h3>
                  </div>
                  
                  <p style={{ color: '#b6ffb6', marginBottom: '10px' }}>{edu.institution}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d1d5db' }}>
                    <span>{edu.year}</span>
                    <span style={{ color: edu.color, fontWeight: 'bold' }}>{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section with Colored Cards */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            color: '#2eff7e', 
            fontSize: '2.5rem', 
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Soft Skills
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {softSkills.map((skill, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(30, 74, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                padding: '25px',
                borderRadius: '20px',
                border: `2px solid ${skill.color}`,
                boxShadow: `0 0 20px ${skill.color}`,
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ color: skill.color, fontSize: '1.3rem', marginBottom: '15px', textAlign: 'center' }}>
                  {skill.name}
                </h3>
                
                {/* Skill Level Bar */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`,
                    animation: 'slideIn 1s ease'
                  }}></div>
                </div>
                
                <p style={{ color: '#b6ffb6', textAlign: 'center', marginTop: '10px' }}>
                  {skill.level}% Proficiency
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            color: '#2eff7e', 
            fontSize: '2.5rem', 
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Activities & Achievements
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {activitiesData.map((activity, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(30, 74, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                padding: '25px',
                borderRadius: '20px',
                border: '1px solid rgba(46, 255, 126, 0.5)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 30px #2eff7e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Background Glow Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(46,255,126,0.1) 0%, transparent 70%)',
                  animation: 'rotate 10s linear infinite'
                }}></div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', position: 'relative', zIndex: 2 }}>
                  {activity.icon}
                  <h3 style={{ color: '#2eff7e', fontSize: '1.2rem', margin: 0 }}>{activity.title}</h3>
                </div>
                
                <p style={{ color: '#b6ffb6', fontSize: '0.95rem', marginBottom: '10px', position: 'relative', zIndex: 2 }}>
                  {activity.organization}
                </p>
                
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>
                  {activity.description}
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
          &lt;KS /&gt; Driven by creativity and innovation, I craft elegant and interactive web experiences.
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
        
        @keyframes slideIn {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default About;