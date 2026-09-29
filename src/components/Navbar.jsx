import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background appearance toggle
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active link detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Collapse mobile menu after click
    setIsNavCollapsed(true);
  };

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand / Logo */}
        <a 
          className="navbar-brand navbar-brand-logo" 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo.svg`} 
            alt="Rakesh Behera Logo" 
            className="brand-logo-img"
          />
          <span className="brand-name-text">Rakesh Behera</span>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none text-light"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="portfolioNavbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'} fs-2 text-cyan`}></i>
        </button>

        {/* Collapsible Nav Links */}
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="portfolioNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                href="#education"
                onClick={(e) => handleNavClick(e, 'education')}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
            
            {/* GitHub Profile Button in Navbar */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="https://github.com/rakesh12345behera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-glass-outline px-2 py-1"
                title="GitHub: rakesh12345behera"
                aria-label="GitHub Profile"
              >
                <i className="bi bi-github"></i>
                <span className="d-lg-none ms-1">GitHub</span>
              </a>
            </li>

            {/* Quick Resume CTA in Navbar */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Rakesh_Behera_Resume.pdf"
                className="btn btn-sm btn-glass-outline px-3 py-1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-file-earmark-arrow-down text-info"></i>
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
