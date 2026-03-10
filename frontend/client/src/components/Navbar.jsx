import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/certificates', label: 'Certificates' },
    
   
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: '#000000',  // BLACK background
      borderBottom: '1px solid #1f3a1f',
      padding: '15px 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px'
      }}>
        {/* Left - KS Logo */}
        <Link to="/" style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          color: '#2ea043',  // Green logo
          textDecoration: 'none',
          letterSpacing: '1px'
        }}>
          &lt;KS&gt;
        </Link>

        {/* Center - Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? '#2ea043' : '#ffffff',  // White text, green when active
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: location.pathname === item.path ? '600' : '400',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#2ea043'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#2ea043' : '#ffffff'}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right - Welcome Text */}
        <div style={{
          color: '#ffffff',  // White text
          fontSize: '0.9rem',
          fontWeight: '400',
          letterSpacing: '1px'
        }}>
          WELCOME TO MY PORTFOLIO
        </div>
      </div>
    </nav>
  );
};

export default Navbar;