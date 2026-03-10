import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0a210a',
      borderTop: '1px solid #2eff7e',
      padding: '40px 0 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Left Column - Quote */}
          <div>
            <p style={{
              color: '#b6ffb6',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}>
              "Driven by creativity and innovation, I craft elegant and interactive web experiences. Currently pursuing Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)."
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 style={{ color: '#2eff7e', marginBottom: '20px', fontSize: '1.2rem' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>
                  <Link 
                    to={item === 'About' ? '/about' : `/${item.toLowerCase()}`}
                    style={{ color: '#b6ffb6', textDecoration: 'none' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 style={{ color: '#2eff7e', marginBottom: '20px', fontSize: '1.2rem' }}>
              Contact
            </h3>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <FaEnvelope color="#2eff7e" size={14} />
                <span style={{ color: '#b6ffb6' }}>kaushishika7@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <FaPhone color="#2eff7e" size={14} />
                <span style={{ color: '#b6ffb6' }}>+91 8939097775</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaMapMarkerAlt color="#2eff7e" size={14} />
                <span style={{ color: '#b6ffb6' }}>Madurai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(46, 255, 126, 0.3)',
          color: '#9ca3af',
          fontSize: '0.9rem'
        }}>
          © 2026 Kaushika S. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;