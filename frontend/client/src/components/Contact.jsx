import React, { useState } from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGraduationCap, FaPaperPlane, FaUser, FaComment, FaTag,
  FaCertificate, FaMedal, FaAward
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Kaushika's contact information
  const contactInfo = {
    primaryEmail: "kaushika.kaushishika@gmail.com",
    alternateEmail: "23csea16kaushika.s@gmail.com",
    mobile: "8939097775",
    location: "Madurai, Tamil Nadu, India"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  // Education data matching About page style
  const educationData = [
    {
      level: "B.E Computer Science & Engineering",
      institution: "Velammal College of Engineering and Technology, Madurai",
      year: "2023 - Present",
      grade: "CGPA: 8.5/10",
      icon: <FaGraduationCap color="#2eff7e" size={24} />,
      color: "#2eff7e"
    }
  ];

  // Certificate data
  const certificatesData = [
    {
      name: "Full Stack Web Development - MERN",
      issuer: "MERN Stack Certification",
      icon: <FaCertificate color="#ffaa00" size={20} />,
      color: "#ffaa00"
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "LeetCode Certification",
      icon: <FaMedal color="#ff6b6b" size={20} />,
      color: "#ff6b6b"
    },
    {
      name: "JavaScript Mastery",
      issuer: "HackerRank",
      icon: <FaAward color="#4ecdc4" size={20} />,
      color: "#4ecdc4"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '100px 20px 50px',
      backgroundColor: '#0b1f0b',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header Section with animation - matching About page style */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ 
            color: '#2eff7e', 
            fontSize: '3rem',
            marginBottom: '15px',
            animation: 'glow 2s ease-in-out infinite',
            textShadow: '0 0 20px rgba(46, 255, 126, 0.3)'
          }}>
            Connect with Me
          </h1>
          <p style={{ 
            color: '#b6ffb6', 
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Share Your Message - Feel free to reach out for collaborations or opportunities.
          </p>
        </div>

        {/* Main Grid - Two Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.8fr',
          gap: '30px'
        }}>
          {/* LEFT COLUMN - Contact Form */}
          <div style={{ width: '100%' }}>
            <div style={{
              backgroundColor: 'rgba(30, 74, 30, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #2eff7e',
              borderRadius: '30px',
              padding: '30px',
              boxShadow: '0 0 30px rgba(46, 255, 126, 0.2)'
            }}>
              <h2 style={{
                color: '#2eff7e',
                fontSize: '2rem',
                marginBottom: '25px',
                fontWeight: '500'
              }}>
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name Field */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaUser color="#2eff7e" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    placeholder="Your Name"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#2eff7e'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(46, 255, 126, 0.3)'}
                  />
                </div>

                {/* Primary Email - Pre-filled */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaEnvelope color="#2eff7e" /> Primary Email
                  </label>
                  <input
                    type="email"
                    value={contactInfo.primaryEmail}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#2eff7e',
                      fontSize: '0.95rem',
                      opacity: '0.8',
                      cursor: 'not-allowed'
                    }}
                    disabled
                    readOnly
                  />
                </div>

                {/* Email Field */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaEnvelope color="#2eff7e" /> Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    placeholder="your.email@example.com"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#2eff7e'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(46, 255, 126, 0.3)'}
                  />
                </div>

                {/* Alternate Email - Pre-filled */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaEnvelope color="#2eff7e" /> Alternate Email
                  </label>
                  <input
                    type="email"
                    value={contactInfo.alternateEmail}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#2eff7e',
                      fontSize: '0.95rem',
                      opacity: '0.8',
                      cursor: 'not-allowed'
                    }}
                    disabled
                    readOnly
                  />
                </div>

                {/* Subject Field */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaTag color="#2eff7e" /> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    placeholder="Message Subject"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#2eff7e'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(46, 255, 126, 0.3)'}
                  />
                </div>

                {/* Mobile - Pre-filled */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaPhone color="#2eff7e" /> Mobile
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.mobile}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#2eff7e',
                      fontSize: '0.95rem',
                      opacity: '0.8',
                      cursor: 'not-allowed'
                    }}
                    disabled
                    readOnly
                  />
                </div>

                {/* Message Field */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontSize: '0.95rem'
                  }}>
                    <FaComment color="#2eff7e" /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      backgroundColor: 'rgba(20, 50, 20, 0.5)',
                      border: '1px solid rgba(46, 255, 126, 0.3)',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    placeholder="Your message here..."
                    rows="4"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#2eff7e'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(46, 255, 126, 0.3)'}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: '#2eff7e',
                    color: '#0b1f0b',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    marginTop: '10px'
                  }}
                  disabled={isSubmitting}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8affa0';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(46, 255, 126, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2eff7e';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaPaperPlane /> 
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{
                    marginTop: '15px',
                    padding: '12px',
                    backgroundColor: 'rgba(46, 255, 126, 0.2)',
                    border: '1px solid #2eff7e',
                    borderRadius: '15px',
                    color: '#2eff7e',
                    textAlign: 'center'
                  }}>
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{
                    marginTop: '15px',
                    padding: '12px',
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    border: '1px solid #ef4444',
                    borderRadius: '15px',
                    color: '#f87171',
                    textAlign: 'center'
                  }}>
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN - Education and Social Links */}
          <div style={{ width: '100%' }}>
            {/* Education Card - Matching About page style */}
            <div style={{
              backgroundColor: 'rgba(30, 74, 30, 0.3)',
              backdropFilter: 'blur(10px)',
              border: `2px solid #2eff7e`,
              borderRadius: '30px',
              padding: '25px',
              marginBottom: '20px',
              boxShadow: `0 0 20px #2eff7e`
            }}>
              <h2 style={{
                color: '#2eff7e',
                fontSize: '1.5rem',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FaGraduationCap /> Education
              </h2>
              
              {educationData.map((edu, index) => (
                <div key={index} style={{ marginLeft: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    {edu.icon}
                    <h3 style={{ color: edu.color, fontSize: '1.2rem', margin: 0 }}>{edu.level}</h3>
                  </div>
                  <p style={{ color: '#b6ffb6', marginBottom: '5px', marginLeft: '40px' }}>{edu.institution}</p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    color: '#d1d5db',
                    marginLeft: '40px'
                  }}>
                    <span>{edu.year}</span>
                    <span style={{ color: edu.color, fontWeight: 'bold' }}>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Preview - Matching About page style */}
            <div style={{
              backgroundColor: 'rgba(30, 74, 30, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(46, 255, 126, 0.5)',
              borderRadius: '30px',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <h2 style={{
                color: '#2eff7e',
                fontSize: '1.5rem',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FaCertificate /> Recent Certificates
              </h2>
              
              <div style={{ marginBottom: '15px' }}>
                {certificatesData.map((cert, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: index < certificatesData.length - 1 ? '1px solid rgba(46, 255, 126, 0.2)' : 'none'
                  }}>
                    {cert.icon}
                    <div>
                      <span style={{ color: '#ffffff', fontSize: '0.95rem' }}>{cert.name}</span>
                      <p style={{ color: '#b6ffb6', fontSize: '0.8rem' }}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="#certificates" style={{
                color: '#2eff7e',
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'inline-block',
                marginTop: '5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px #2eff7e'}
              onMouseLeave={(e) => e.target.style.textShadow = 'none'}>
                View All Certificates →
              </a>
            </div>

            {/* Social Links - Matching About page style */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <a 
                href="https://www.linkedin.com/in/kaushika-s-92a31a308/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#0077b5',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '15px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 119, 181, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a 
                href="https://github.com/skaushika26" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#333333',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '15px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(51, 51, 51, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaGithub /> GitHub
              </a>
            </div>

            {/* Location Card */}
            <div style={{
              backgroundColor: 'rgba(30, 74, 30, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(46, 255, 126, 0.5)',
              borderRadius: '30px',
              padding: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                fontSize: '0.95rem'
              }}>
                <FaMapMarkerAlt color="#2eff7e" size={20} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline - Matching About page */}
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

      {/* Animations - Matching About page */}
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

export default Contact;