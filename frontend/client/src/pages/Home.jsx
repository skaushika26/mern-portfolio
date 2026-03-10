import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px',
        width: '100%'
      }}>
        <div className="home-grid">
          {/* Left Column - Text Content */}
          <div className="home-content">
            <span className="home-greeting">Hello, I'm</span>
            <h1 className="home-name">Kaushika S</h1>
            <h2 className="home-title">MERN Stack Developer</h2>
            
            <p className="home-description">
              Driven by creativity and innovation, I craft elegant and interactive web experiences. 
              Currently pursuing Bachelor of Engineering in Computer Science and Engineering (B.E. CSE).
            </p>

            {/* Buttons with shine effect */}
            <div className="home-buttons">
              <Link to="/projects" className="btn btn-primary shine-button">
                View My Works →
              </Link>
              
              <a href="#" className="btn btn-outline shine-button">
                Download CV →
              </a>
              
              <Link to="/contact" className="btn btn-outline shine-button">
                Get in Touch →
              </Link>
            </div>
          </div>

          {/* Right Column - YOUR PHOTO with glow effect */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #2ea043',
              boxShadow: '0 0 30px rgba(46, 160, 67, 0.5)',
              transition: 'all 0.3s ease',
              animation: 'photoGlow 3s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 0 40px #2ea043';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(46, 160, 67, 0.5)';
            }}>
              <img 
                src="/images/profile.png" 
                alt="Kaushika S"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes photoGlow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(46, 160, 67, 0.5);
          }
          50% {
            box-shadow: 0 0 50px rgba(46, 160, 67, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;