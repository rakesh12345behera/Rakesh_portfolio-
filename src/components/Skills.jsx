import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    // Backend
    { name: "C#", category: "backend", level: "Advanced", icon: "bi-filetype-cs", color: "#a855f7" },
    { name: "ASP.NET Core", category: "backend", level: "Advanced", icon: "bi-cpu-fill", color: "#38bdf8" },
    { name: "ASP.NET Core MVC", category: "backend", level: "Advanced", icon: "bi-diagram-3-fill", color: "#6366f1" },
    { name: "ASP.NET MVC", category: "backend", level: "Experienced", icon: "bi-window-stack", color: "#818cf8" },
    { name: "Web API", category: "backend", level: "Advanced", icon: "bi-hdd-network-fill", color: "#34d399" },
    { name: "REST API", category: "backend", level: "Advanced", icon: "bi-arrow-left-right", color: "#38bdf8" },
    { name: "Entity Framework", category: "backend", level: "Advanced", icon: "bi-layers-fill", color: "#f59e0b" },
    { name: "ADO.NET", category: "backend", level: "Experienced", icon: "bi-database-gear", color: "#ec4899" },
    { name: "JWT (JSON Web Token)", category: "backend", level: "Advanced", icon: "bi-shield-lock-fill", color: "#10b981" },
    { name: "Kafka", category: "backend", level: "Intermediate", icon: "bi-broadcast-pin", color: "#f97316" },

    // Frontend
    { name: "React.js", category: "frontend", level: "Advanced", icon: "bi-lightning-charge-fill", color: "#38bdf8" },
    { name: "Angular.js", category: "frontend", level: "Intermediate", icon: "bi-gem", color: "#ef4444" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: "bi-filetype-js", color: "#facc15" },
    { name: "jQuery", category: "frontend", level: "Experienced", icon: "bi-code-square", color: "#0ea5e9" },
    { name: "HTML5", category: "frontend", level: "Advanced", icon: "bi-filetype-html", color: "#f97316" },
    { name: "CSS3", category: "frontend", level: "Advanced", icon: "bi-filetype-css", color: "#3b82f6" },
    { name: "Bootstrap 5", category: "frontend", level: "Advanced", icon: "bi-bootstrap-fill", color: "#8b5cf6" },

    // Database
    { name: "SQL Server", category: "database", level: "Advanced", icon: "bi-database-fill-check", color: "#ef4444" },
    { name: "Stored Procedures", category: "database", level: "Advanced", icon: "bi-terminal-fill", color: "#10b981" },
    { name: "Joins & Aggregations", category: "database", level: "Advanced", icon: "bi-intersect", color: "#38bdf8" },
    { name: "Indexing & Tuning", category: "database", level: "Experienced", icon: "bi-speedometer2", color: "#f59e0b" },
    { name: "Database Triggers", category: "database", level: "Experienced", icon: "bi-cursor-fill", color: "#a855f7" },

    // Tools
    { name: "Git", category: "tools", level: "Advanced", icon: "bi-git", color: "#f97316" },
    { name: "GitHub", category: "tools", level: "Advanced", icon: "bi-github", color: "#f8fafc" },
    { name: "Visual Studio", category: "tools", level: "Advanced", icon: "bi-window-fullscreen", color: "#a855f7" },
    { name: "VS Code", category: "tools", level: "Advanced", icon: "bi-code-slash", color: "#0ea5e9" }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills', icon: 'bi-grid-fill' },
    { id: 'backend', label: 'Backend (.NET)', icon: 'bi-cpu-fill' },
    { id: 'frontend', label: 'Frontend', icon: 'bi-window' },
    { id: 'database', label: 'Database (SQL)', icon: 'bi-database' },
    { id: 'tools', label: 'Tools & IDEs', icon: 'bi-tools' },
  ];

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(7, 13, 25, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-stack"></i> Technical Competencies
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack across backend, frontend, database management, and developer tools.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn ${activeCategory === cat.id ? 'btn-gradient' : 'btn-glass-outline'} px-3 py-2 text-sm`}
            >
              <i className={`bi ${cat.icon}`}></i>
              <span>{cat.label}</span>
              {activeCategory === cat.id && (
                <span className="badge bg-light text-dark rounded-pill ms-1">
                  {cat.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="row g-3">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="skill-card h-100">
                <div 
                  className="skill-icon-wrapper" 
                  style={{ color: skill.color }}
                >
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6 className="text-white fw-bold mb-1 text-truncate" title={skill.name}>
                    {skill.name}
                  </h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="skill-tag">{skill.level}</span>
                    <small className="text-muted text-capitalize" style={{ fontSize: '0.72rem' }}>
                      {skill.category}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Summary Bar */}
        <div className="glass-card p-4 mt-5">
          <div className="row g-4 align-items-center">
            <div className="col-md-3 text-center text-md-start">
              <h5 className="fw-bold text-white mb-1">Stack Highlights</h5>
              <p className="text-muted small mb-0">Production-tested development strengths</p>
            </div>
            <div className="col-md-9">
              <div className="row g-3">
                <div className="col-sm-4">
                  <div className="d-flex justify-content-between small mb-1">
                    <span className="text-light">.NET & Web API</span>
                    <span className="text-info fw-bold">92%</span>
                  </div>
                  <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                    <div className="progress-bar bg-info" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex justify-content-between small mb-1">
                    <span className="text-light">SQL Server & EF Core</span>
                    <span className="text-primary fw-bold">90%</span>
                  </div>
                  <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                    <div className="progress-bar bg-primary" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex justify-content-between small mb-1">
                    <span className="text-light">React.js & Frontend</span>
                    <span className="text-success fw-bold">85%</span>
                  </div>
                  <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                    <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
