import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';  // ← IMPORTED Projects page
import Experience from './components/Experience';
import Certificates from './pages/Certificates';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css';

// Placeholders for OTHER pages (REMOVE Projects from here)
const Education = () => <div style={{ paddingTop: '100px', textAlign: 'center', color: '#2eff7e' }}>Education Page Coming Soon</div>;
const Activities = () => <div style={{ paddingTop: '100px', textAlign: 'center', color: '#2eff7e' }}>Activities Page Coming Soon</div>;
const Coding = () => <div style={{ paddingTop: '100px', textAlign: 'center', color: '#2eff7e' }}>Coding Profiles Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />  {/* ← Using imported Projects */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/education" element={<Education />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;