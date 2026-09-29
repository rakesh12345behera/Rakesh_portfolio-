import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // =========================================================================
  // PLACEHOLDER SOCIAL LINKS - REPLACE WITH YOUR ACTUAL URLS HERE:
  // =========================================================================
  const GITHUB_URL = "https://github.com/rakesh12345behera";
  const LINKEDIN_URL = "https://www.linkedin.com/in/rakesh-behera-3402652a1";
  const EMAIL_ADDRESS = "beherarakesh9337@gmail.com";

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="pt-5 pb-4 border-top border-secondary border-opacity-25" style={{ background: '#050913' }}>
        <div className="container">
          <div className="row gy-4 align-items-center justify-content-between mb-4">
            {/* Logo and Pitch */}
            <div className="col-lg-4 text-center text-lg-start">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="navbar-brand-logo mb-2 d-inline-flex text-decoration-none"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}logo.svg`} 
                  alt="Rakesh Behera Logo" 
                  className="brand-logo-img"
                />
                <span className="brand-name-text">Rakesh Behera</span>
              </a>
              <p className="text-secondary small mb-0" style={{ maxWidth: '340px' }}>
                .NET Full Stack Developer specializing in C#, ASP.NET Core, SQL Server, and modern React.js web architectures.
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="col-lg-5 text-center">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-secondary text-decoration-none small hover-text-white">Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-secondary text-decoration-none small hover-text-white">About</a>
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-secondary text-decoration-none small hover-text-white">Skills</a>
                <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-secondary text-decoration-none small hover-text-white">Experience</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-secondary text-decoration-none small hover-text-white">Projects</a>
                <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="text-secondary text-decoration-none small hover-text-white">Education</a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-secondary text-decoration-none small hover-text-white">Services</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-secondary text-decoration-none small hover-text-white">Contact</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="col-lg-3 text-center text-lg-end">
              <div className="d-flex justify-content-center justify-content-lg-end gap-2">
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a 
                  href={`mailto:${EMAIL_ADDRESS}`} 
                  className="social-icon-btn"
                  title="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-wrap justify-content-between align-items-center gap-2 small text-secondary">
            <div>
              &copy; 2026 Rakesh Behera. All Rights Reserved.
            </div>
            <div className="text-muted">
              Built with <span className="text-info">React.js</span>, <span className="text-primary">Bootstrap 5</span> &amp; Modern .NET mindset.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
        title="Back to Top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
};

export default Footer;
