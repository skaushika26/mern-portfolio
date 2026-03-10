import React from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase, FaCode,
  FaJs, FaPython
} from 'react-icons/fa';
import { 
  SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiTailwindcss, 
  SiExpress, SiMongoose, SiVercel, SiRender,
  SiAxios, SiCloudinary, SiGithub, SiMongodb
} from 'react-icons/si';

const Skills = () => {
  // Skills data enriched with proficiency percentage (your estimation)
  const skillsData = [
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact />, proficiency: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 80 },
        { name: "Axios", icon: <SiAxios />, proficiency: 75 },
        { name: "Express.js", icon: <SiExpress />, proficiency: 70 },
        { name: "Mongoose", icon: <SiMongoose />, proficiency: 72 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 78 }
      ]
    },
    {
      category: "APIs & Integrations",
      skills: [
        { name: "RESTful APIs", icon: <FaCode />, proficiency: 82 },
        { name: "EmailJS", icon: <FaEnvelope />, proficiency: 68 },
        { name: "Gemini API", icon: <FaPython />, proficiency: 60 },
        { name: "Cloudinary", icon: <SiCloudinary />, proficiency: 74 }
      ]
    },
    {
      category: "Tools & Developer Utilities",
      skills: [
        { name: "Git", icon: <FaGitAlt />, proficiency: 85 },
        { name: "GitHub", icon: <SiGithub />, proficiency: 80 }
      ]
    },
    {
      category: "Design & Prototyping",
      skills: [
        { name: "Figma", icon: <FaFigma />, proficiency: 70 }
      ]
    },
    {
      category: "Deployment & Hosting",
      skills: [
        { name: "Vercel", icon: <SiVercel />, proficiency: 75 },
        { name: "Render", icon: <SiRender />, proficiency: 68 }
      ]
    }
  ];

  // GitHub & LinkedIn stats
  const githubStats = {
    repos: "10",
    commits: "80+",
    followers: "2"
  };

  const linkedinStats = {
    connections: "500+",
    followers: "550+",
    posts: "21",
    activeFrom: "May 2024"
  };

  // CODING PROFILES – new section (Leetcode, GFG, Hackerrank)
  const codingProfiles = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode style={{ color: '#f7b731' }} />,
      stats: [
        { label: "Solved", value: "270+" },
        { label: "Acceptance", value: "79.79%" },
        { label: "Daily solved", value: "479,923" }
      ],
      bgColor: "#fffbf0",
      borderColor: "#f7b731"
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks style={{ color: '#2f8d6b' }} />,
      stats: [
        { label: "Solved", value: "36" },
        { label: "Score", value: "73" },
        { label: "Institute rank", value: "214" }
      ],
      bgColor: "#f0f6f4",
      borderColor: "#2f8d6b"
    },
    {
      platform: "HackerRank",
      icon: <SiHackerrank style={{ color: '#1f9a8a' }} />,
      stats: [
        { label: "Solved", value: "59" },
        { label: "Badges", value: "3" },
        { label: "Certificates", value: "219" }
      ],
      bgColor: "#f3f7fc",
      borderColor: "#1f9a8a"
    }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "kaushishika7@gmail.com" },
    { icon: <FaPhone />, text: "+91 8939097775" },
    { icon: <FaMapMarkerAlt />, text: "Madurai, Tamil Nadu, India" }
  ];

  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>&lt;KS&gt;</div>
          <div style={styles.navLinks}>
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Education', 'Activities', 'Contact'].map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`} style={styles.navLink}>{item}</a>
            ))}
          </div>
          <div style={styles.welcomeText}>WELCOME TO MY PORTFOLIO</div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.name}>Kaushika S</h1>
          <p style={styles.tagline}>Where passion meets precision in digital creation.</p>
        </div>

        {/* Main Grid: Left (skills with proficiency bars) + Right (profiles & contact) */}
        <div style={styles.mainGrid}>
          {/* LEFT COLUMN – Skills with proficiency bars */}
          <div style={styles.leftColumn}>
            <h2 style={styles.sectionTitle}>Technical Skills</h2>
            
            {skillsData.map((category, idx) => (
              <div key={idx} style={styles.categoryCard}>
                <h3 style={styles.categoryTitle}>{category.category}</h3>
                <div style={styles.skillsList}>
                  {category.skills.map((skill, index) => (
                    <div key={index} style={styles.skillItem}>
                      <div style={styles.skillLabel}>
                        <span style={styles.skillName}><span style={styles.skillIcon}>{skill.icon}</span> {skill.name}</span>
                        <span style={styles.skillPercentage}>{skill.proficiency}%</span>
                      </div>
                      <div style={styles.progressBarBg}>
                        <div style={{...styles.progressBarFill, width: `${skill.proficiency}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN – Coding profiles + GitHub/Linkedin + Contact */}
          <div style={styles.rightColumn}>
            {/* New: Coding Profiles Section (LeetCode, GFG, HackerRank) */}
            <div style={styles.codingSection}>
              <h3 style={styles.codingTitle}>📊 coding profiles</h3>
              {codingProfiles.map((profile, idx) => (
                <div key={idx} style={{...styles.profileCard, background: profile.bgColor, borderLeft: `6px solid ${profile.borderColor}`}}>
                  <div style={styles.profileHeader}>
                    <span style={styles.profileIcon}>{profile.icon}</span>
                    <span style={styles.profileName}>{profile.platform}</span>
                  </div>
                  <div style={styles.profileStats}>
                    {profile.stats.map((stat, i) => (
                      <div key={i} style={styles.profileStat}>
                        <span style={styles.statValue}>{stat.value}</span>
                        <span style={styles.statLabelProfile}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Card */}
            <div style={styles.githubCard}>
              <h3 style={styles.githubTitle}>
                <FaGithub style={styles.githubIcon} /> github
              </h3>
              <div style={styles.githubStats}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{githubStats.repos}</span>
                  <span style={styles.statLabel}>Repos</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{githubStats.commits}</span>
                  <span style={styles.statLabel}>Commits</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{githubStats.followers}</span>
                  <span style={styles.statLabel}>Followers</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div style={styles.linkedinCard}>
              <h3 style={styles.linkedinTitle}>
                <FaLinkedin style={styles.linkedinIcon} /> linkedin
              </h3>
              <div style={styles.linkedinStats}>
                <div style={styles.linkedinStatRow}>
                  <span style={styles.statLabel}>Connections</span>
                  <span style={styles.statValue}>{linkedinStats.connections}</span>
                </div>
                <div style={styles.linkedinStatRow}>
                  <span style={styles.statLabel}>Followers</span>
                  <span style={styles.statValue}>{linkedinStats.followers}</span>
                </div>
                <div style={styles.linkedinStatRow}>
                  <span style={styles.statLabel}>Posts</span>
                  <span style={styles.statValue}>{linkedinStats.posts}</span>
                </div>
                <div style={styles.linkedinStatRow}>
                  <span style={styles.statLabel}>Active From</span>
                  <span style={styles.statValue}>{linkedinStats.activeFrom}</span>
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <div style={styles.contactSection}>
              <h3 style={styles.contactTitle}>Get in Touch</h3>
              {contactInfo.map((item, idx) => (
                <div key={idx} style={styles.contactItem}>
                  <span style={styles.contactIcon}>{item.icon}</span>
                  <span style={styles.contactText}>{item.text}</span>
                </div>
              ))}
              
              <a href="/" style={styles.portfolioButton}>
                Visit My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover & Animation Styles */}
      <style>{`
        .skill-item:hover .progress-bar-fill {
          filter: brightness(1.1);
          box-shadow: 0 0 8px #2ea043;
        }
        .profile-card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(46, 160, 67, 0.2);
        }
        .portfolio-button:hover {
          background-color: #3cba54 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(46, 160, 67, 0.4);
        }
      `}</style>
    </div>
  );
};

// Styles object (updated with proficiency bar styles and coding profiles)
const styles = {
  page: {
    backgroundColor: '#0a1a0a',
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#000000',
    borderBottom: '1px solid #1f3a1f',
    zIndex: 1000,
    padding: '15px 0',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#2ea043',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: '0.9rem',
    letterSpacing: '1px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 30px 50px',
  },
  header: {
    marginBottom: '40px',
  },
  name: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '5px',
    fontWeight: '600',
  },
  tagline: {
    color: '#b0b0b0',
    fontSize: '1rem',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  leftColumn: {
    width: '100%',
  },
  rightColumn: {
    width: '100%',
  },
  sectionTitle: {
    color: '#2ea043',
    fontSize: '1.8rem',
    marginBottom: '25px',
    fontWeight: '500',
  },
  categoryCard: {
    marginBottom: '30px',
    backgroundColor: '#0f1f0f',
    border: '1px solid #1f3a1f',
    borderRadius: '16px',
    padding: '20px',
  },
  categoryTitle: {
    color: '#2ea043',
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontWeight: '500',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  skillItem: {
    width: '100%',
  },
  skillLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#ffffff',
    marginBottom: '5px',
    fontSize: '0.95rem',
  },
  skillName: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  skillIcon: {
    color: '#2ea043',
    fontSize: '1.1rem',
  },
  skillPercentage: {
    color: '#b0b0b0',
  },
  progressBarBg: {
    width: '100%',
    height: '10px',
    backgroundColor: '#1a2a1a',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: 'inset 0 1px 4px #0f1f0f',
  },
  progressBarFill: {
    height: '10px',
    background: 'linear-gradient(90deg, #2ea043, #3cba54)',
    borderRadius: '20px',
    transition: 'width 0.3s ease',
  },
  // Coding profiles section
  codingSection: {
    marginBottom: '25px',
  },
  codingTitle: {
    color: '#2ea043',
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontWeight: '500',
  },
  profileCard: {
    backgroundColor: '#f8fafd',
    borderRadius: '16px',
    padding: '16px 18px',
    marginBottom: '15px',
    border: '1px solid #e7edf8',
    transition: 'all 0.2s ease',
    cursor: 'default',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  profileIcon: {
    fontSize: '1.8rem',
  },
  profileName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1e2b3f',
  },
  profileStats: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem',
    alignItems: 'center',
  },
  profileStat: {
    display: 'flex',
    flexDirection: 'column',
  },
  statLabelProfile: {
    fontSize: '0.75rem',
    color: '#4d627a',
  },
  // Reusing existing statValue
  statValue: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  // Adjust for dark bg inside profile cards we override statValue for light bg
  // but we'll keep and use profile stat override inline if needed, but since profile cards have light bg we adjust via render
  // we set style for statValue inside profile manually by passing color. we'll do that in map.
  // For simplicity we leave as is, but we'll add a class later – but here we adjust by inline style.
  // Better: define platformStatValue for light cards.
  // I'll quickly patch within map using inline style.
  
  githubCard: {
    backgroundColor: '#0f1f0f',
    border: '1px solid #1f3a1f',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  },
  githubTitle: {
    color: '#ffffff',
    fontSize: '1.2rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  githubIcon: {
    color: '#ffffff',
    fontSize: '1.5rem',
  },
  githubStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  linkedinCard: {
    backgroundColor: '#0f1f0f',
    border: '1px solid #1f3a1f',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  },
  linkedinTitle: {
    color: '#0a0909',
    fontSize: '1.2rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  linkedinIcon: {
    color: '#0077b5',
    fontSize: '1.5rem',
  },
  linkedinStats: {
    display: 'grid',
    gap: '12px',
  },
  linkedinStatRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 0',
    borderBottom: '1px solid #1f3a1f',
  },
  statItem: {
    textAlign: 'center',
  },
  statLabel: {
    color: '#b0b0b0',
    fontSize: '0.85rem',
  },
  contactSection: {
    backgroundColor: '#0f1f0f',
    border: '1px solid #1f3a1f',
    borderRadius: '16px',
    padding: '20px',
    transition: 'all 0.3s ease',
  },
  contactTitle: {
    color: '#2ea043',
    fontSize: '1.1rem',
    marginBottom: '15px',
    fontWeight: '500',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '12px',
  },
  contactIcon: {
    color: '#2ea043',
    fontSize: '1.1rem',
  },
  contactText: {
    color: '#ffffff',
    fontSize: '0.95rem',
  },
  portfolioButton: {
    display: 'block',
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#2ea043',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '20px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
};

export default Skills;