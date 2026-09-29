import React from 'react';

const Hero = () => {
  // =========================================================================
  // PLACEHOLDER SOCIAL LINKS - REPLACE WITH YOUR ACTUAL URLS HERE:
  // =========================================================================
  const GITHUB_URL = "https://github.com/rakesh12345behera";
  const LINKEDIN_URL = "https://www.linkedin.com/in/rakesh-behera-3402652a1";
  const EMAIL_ADDRESS = "beherarakesh9337@gmail.com"; // From resume

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Hero Left Content */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* Immediate Joiner Status Pill */}
            <div className="status-pill mb-3">
              <span className="pulse-dot"></span>
              <span>Available for Hire &bull; Immediate Joiner</span>
            </div>

            {/* Main Greeting */}
            <h1 className="display-4 fw-bold mb-2">
              Hi, I'm <span className="gradient-text">Rakesh Behera</span>
            </h1>

            {/* Role Title with Code Tag Styling */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
              <span className="fs-3 fw-semibold text-info">
                .NET Full Stack Developer
              </span>
            </div>

            {/* Description */}
            <p className="lead text-secondary mb-4 pe-lg-4" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
              I build scalable, responsive and user-friendly web applications using modern 
              <strong className="text-light"> .NET</strong> and <strong className="text-light">frontend technologies</strong>. 
              Passionate about high-throughput REST APIs, robust database architectures, and intuitive user experiences.
            </p>

            {/* Tech Stack Chips */}
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
              <span className="tech-badge"><i className="bi bi-code-slash text-info me-1"></i>C#</span>
              <span className="tech-badge"><i className="bi bi-cpu text-primary me-1"></i>ASP.NET Core</span>
              <span className="tech-badge"><i className="bi bi-braces text-success me-1"></i>Web API</span>
              <span className="tech-badge"><i className="bi bi-database text-warning me-1"></i>SQL Server</span>
              <span className="tech-badge"><i className="bi bi-layers text-danger me-1"></i>Entity Framework</span>
              <span className="tech-badge"><i className="bi bi-lightning-charge text-info me-1"></i>React.js</span>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-gradient"
              >
                <span>View My Work</span>
                <i className="bi bi-arrow-right"></i>
              </a>

              {/* Resume Download Button */}
              {/* Note: place your real resume PDF in the 'public/' folder named 'resume.pdf' */}
              <a 
                href={`${import.meta.env.BASE_URL}resume.pdf`} 
                download="Rakesh_Behera_Resume.pdf"
                className="btn btn-glass-outline"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-download text-info"></i>
                <span>Download Resume</span>
              </a>

              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-glass-outline"
              >
                <i className="bi bi-chat-dots"></i>
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Connect */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 pt-2">
              <span className="text-muted small fw-medium">Connect with me:</span>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href={`mailto:${EMAIL_ADDRESS}`} 
                className="social-icon-btn"
                title="Send Email"
              >
                <i className="bi bi-envelope-at-fill"></i>
              </a>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="col-lg-5 text-center">
            <div className="hero-avatar-frame mx-auto">
              {/* Profile Image (stored in public/profile.jpg) */}
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                alt="Rakesh Behera - .NET Full Stack Developer" 
                className="hero-avatar-img img-fluid"
              />

              {/* Floating Badge 1 - Top Left */}
              <div className="floating-badge badge-top-left">
                <div className="bg-primary bg-opacity-25 p-2 rounded-circle text-info">
                  <i className="bi bi-patch-check-fill fs-5"></i>
                </div>
                <div className="text-start">
                  <div className="fw-bold text-white small">10 Months</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>Internship</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="floating-badge badge-bottom-right">
                <div className="bg-success bg-opacity-25 p-2 rounded-circle text-success">
                  <i className="bi bi-lightning-fill fs-5"></i>
                </div>
                <div className="text-start">
                  <div className="fw-bold text-white small">Immediate</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>Joiner</div>
                </div>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="terminal-card text-start mx-auto mt-4" style={{ maxWidth: '420px' }}>
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="ms-auto text-muted small" style={{ fontSize: '0.75rem' }}>DeveloperProfile.cs</span>
              </div>
              <pre className="m-0 text-info">
                <code>
{`var dev = new Developer {
  Name = "Rakesh Behera",
  Role = ".NET Full Stack Dev",
  Stack = ["ASP.NET Core", "React"],
  OpenToWork = true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
