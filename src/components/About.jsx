import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: "bi-gear-wide-connected",
      title: "Backend API Engineering",
      desc: "Architecting robust RESTful Web APIs using ASP.NET Core, JWT auth, and Entity Framework Core."
    },
    {
      icon: "bi-database-check",
      title: "Database Optimization",
      desc: "Crafting performant SQL Server schemas, stored procedures, indexing, and data integrity triggers."
    },
    {
      icon: "bi-window-sidebar",
      title: "Frontend Development",
      desc: "Building clean, reactive UI components with React.js, modern JavaScript, and responsive Bootstrap 5."
    },
    {
      icon: "bi-shield-check",
      title: "Clean & Maintainable Code",
      desc: "Adhering to SOLID principles, repository patterns, and modular architectures for easy scalability."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-person-badge"></i> Professional Summary
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated to engineering high-performance .NET full-stack solutions, bridging resilient backends with intuitive web interfaces.
          </p>
        </div>

        <div className="row gy-4 align-items-center">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5 h-100">
              <h3 className="h4 fw-bold mb-3 text-white">
                Hi, I'm <span className="text-info">Rakesh Behera</span>
              </h3>
              
              <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                I am an enthusiastic <strong>.NET Developer</strong> with hands-on experience in building and supporting web applications using <strong>C#, ASP.NET MVC, Web API, and SQL Server</strong>. Skilled in frontend tools like <strong>HTML, CSS, Bootstrap, and JavaScript/React</strong>, with <strong>10 months of hands-on internship experience</strong> in the IT industry.
              </p>

              <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                Strong knowledge of <strong>MS SQL Server</strong>, including Stored Procedures, Triggers, and User-Defined Functions. Experienced in developing controller action methods, performing validations, and fixing bugs to ensure seamless application performance adhering to the MVC architectural pattern.
              </p>

              {/* Highlights List */}
              <div className="row g-3 pt-2">
                {highlights.map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <div className="text-info fs-5 mt-1">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold text-light mb-1 small">{item.title}</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Key Profile Facts */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5">
              <h4 className="fw-bold mb-4 text-white d-flex align-items-center justify-content-between">
                <span>Key Statistics</span>
                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 fs-6 rounded-pill">
                  <i className="bi bi-clock-history me-1"></i> Ready to Join
                </span>
              </h4>

              {/* 4 Stat Boxes */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">10 Mos</div>
                    <p className="stat-label">Internship Experience</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">10+</div>
                    <p className="stat-label">Core Technologies</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">8.5</div>
                    <p className="stat-label">MCA SGPA</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number text-success">0 Days</div>
                    <p className="stat-label">Immediate Joiner</p>
                  </div>
                </div>
              </div>

              {/* Personal Details Table */}
              <div className="p-3 rounded-3" style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-subtle)' }}>
                <div className="row g-2 small">
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Role:</span>
                    <strong className="text-light">.NET Full Stack Developer</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Location:</span>
                    <strong className="text-light">Bhubaneswar, Odisha, India 🇮🇳</strong>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <span className="text-muted d-block">Degree:</span>
                    <strong className="text-light">MCA (BPUT Odisha, 2024 – 8.5 SGPA)</strong>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <span className="text-muted d-block">Availability:</span>
                    <strong className="text-success">Immediate Joiner</strong>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-sm-start">
                <a 
                  href="#contact" 
                  className="btn btn-gradient w-100 justify-content-center"
                >
                  <i className="bi bi-briefcase-fill"></i>
                  <span>Let's Discuss Opportunities</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
