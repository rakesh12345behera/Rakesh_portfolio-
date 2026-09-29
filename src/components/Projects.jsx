import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // =========================================================================
  // PLACEHOLDER PROJECT LINKS - REPLACE WITH YOUR ACTUAL URLS HERE:
  // =========================================================================
  const projectsData = [
    {
      id: 1,
      title: "Microfinance Loan Management System (LMS)",
      category: "ASP.NET MVC & SQL Server",
      image: `${import.meta.env.BASE_URL}projects/project1.jpg`,
      description: "A web-based microfinance software designed to manage the complete loan lifecycle for small finance institutions from member registration to loan settlement.",
      longDescription: "A web-based microfinance software designed to manage the complete loan lifecycle for small finance institutions. Streamlines operations including member onboarding, collector registration & assignment, branch administration, loan request and approval workflows, loan disbursement, EMI collection, and final loan settlement.",
      technologies: ["ASP.NET MVC", "C#", "MS SQL Server", "ADO.NET", "HTML5", "CSS3", "Bootstrap"],
      features: [
        "Member and Collector registration forms with server & client-side validation",
        "Admin collector-member assignment and branch creation & management",
        "End-to-end loan request, review, approval, and disbursement workflows",
        "EMI collection tracking, automated ledger updates, and loan settlement options",
        "Normalized SQL database tables for members, loans, EMIs, and branches"
      ],
      // Replace with your project repo & demo links
      githubUrl: "https://github.com/rakesh12345behera/microfinance-lms",
      demoUrl: "https://microfinance-lms-demo.example.com"
    },
    {
      id: 2,
      title: "REST API Management System",
      category: "Web API & Security",
      image: `${import.meta.env.BASE_URL}projects/project2.jpg`,
      description: "A production-grade, secure RESTful Web API ecosystem featuring JWT token authentication, API rate limiting, and interactive Swagger documentation.",
      longDescription: "Designed for high concurrency and enterprise throughput, this API service utilizes ASP.NET Core Web API, SQL Server, and Dapper/Entity Framework. It provides end-to-end token validation, custom exception filtering, response caching, and full OpenAPI / Swagger documentation for third-party client integrations.",
      technologies: ["ASP.NET Core Web API", "JWT", "SQL Server", "Swagger / OpenAPI", "C#", "Dependency Injection"],
      features: [
        "Stateless JWT bearer authentication with secure refresh token lifecycles",
        "Normalized SQL Server database with high-performance stored procedures",
        "Global error handling middleware and structured JSON response contracts",
        "Interactive Swagger UI for live endpoint testing and documentation"
      ],
      // Replace with your project repo & demo links
      githubUrl: "https://github.com/rakesh12345behera/rest-api-management-system",
      demoUrl: "https://api-management-demo.example.com/swagger"
    },
    {
      id: 3,
      title: "Full Stack Authentication Application",
      category: "Full Stack .NET & React",
      image: `${import.meta.env.BASE_URL}projects/project3.jpg`,
      description: "A secure end-to-end authentication and identity solution combining a modern React.js frontend with an ASP.NET Core Web API backend.",
      longDescription: "This full-stack system showcases modern authentication patterns including multi-factor readiness, encrypted password hashing, session management, and role-based route guards. The frontend is built in React.js with responsive Bootstrap styling, interacting seamlessly with ASP.NET Core Web API endpoints via Axios interceptors.",
      technologies: ["React.js", "ASP.NET Core Web API", "JWT", "C#", "SQL Server", "Bootstrap 5", "Axios"],
      features: [
        "Client-side React route guards protecting sensitive authenticated routes",
        "Secure cookie/token storage with automated token refresh handling",
        "User profile management and activity audit log dashboard",
        "Responsive, glassmorphic UI with real-time form validation"
      ],
      // Replace with your project repo & demo links
      githubUrl: "https://github.com/rakesh12345behera/fullstack-auth-application",
      demoUrl: "https://auth-application-demo.example.com"
    },
    {
      id: 4,
      title: "Business Management Dashboard",
      category: "React & REST API",
      image: `${import.meta.env.BASE_URL}projects/project4.jpg`,
      description: "An analytical business intelligence dashboard presenting real-time KPI metrics, revenue performance charts, and transactional monitoring.",
      longDescription: "Developed to give business stakeholders actionable insights, this dashboard interfaces with RESTful services to visualize ARR, monthly recurring revenue, churn rates, and regional user activities. Features responsive chart visualizations, customizable filter periods, and data export facilities.",
      technologies: ["React.js", "Bootstrap 5", "REST API", "JavaScript", "Chart Components", "CSS3"],
      features: [
        "Dynamic KPI summary widgets with percentage change indicators",
        "Interactive revenue trends and product sales distribution charts",
        "Data filtering by date ranges, departments, and geographic regions",
        "Fully responsive layout optimized for mobile, tablet, and widescreen monitors"
      ],
      // Replace with your project repo & demo links
      githubUrl: "https://github.com/rakesh12345behera/business-management-dashboard",
      demoUrl: "https://business-dashboard-demo.example.com"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(7, 13, 25, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-code-square"></i> Portfolio Showcase
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of enterprise .NET Full Stack applications, secure REST APIs, and modern React dashboards built with scalability in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="project-card">
                {/* Project Image Frame */}
                <div className="project-img-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                  />
                  <span className="project-badge">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 p-md-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold text-white mb-0 fs-5">{project.title}</h4>
                  </div>

                  <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Technologies Badges */}
                  <div className="mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary border-opacity-25 align-items-center justify-content-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-sm btn-glass-outline px-3 py-2"
                      title="View Architecture & Features"
                    >
                      <i className="bi bi-info-circle text-info"></i>
                      <span>Details</span>
                    </button>

                    <div className="d-flex gap-2">
                      {/* GitHub Link */}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-glass-outline px-3 py-2"
                        title="View Source Code on GitHub"
                      >
                        <i className="bi bi-github"></i>
                        <span>Code</span>
                      </a>

                      {/* Live Demo Link */}
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-gradient px-3 py-2"
                        title="Open Live Application"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Deep Dive */}
        {selectedProject && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1060 }}
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="modal-dialog modal-dialog-centered modal-lg" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content glass-card border-0 shadow-lg text-light">
                <div className="modal-header border-secondary border-opacity-25 pb-3">
                  <div>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill mb-1">
                      {selectedProject.category}
                    </span>
                    <h5 className="modal-title fw-bold text-white fs-4">{selectedProject.title}</h5>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="img-fluid rounded-3 mb-3 border border-secondary border-opacity-25 w-100"
                    style={{ maxHeight: '280px', objectFit: 'cover' }}
                  />

                  <h6 className="fw-bold text-info mb-2">Project Overview</h6>
                  <p className="text-secondary small mb-3" style={{ lineHeight: '1.7' }}>
                    {selectedProject.longDescription}
                  </p>

                  <h6 className="fw-bold text-info mb-2">Key Highlights & Architecture</h6>
                  <ul className="list-unstyled mb-3 d-flex flex-column gap-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="d-flex align-items-start gap-2 text-secondary small">
                        <i className="bi bi-check-circle-fill text-success mt-1"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <h6 className="fw-bold text-info mb-2">Technologies Used</h6>
                  <div className="d-flex flex-wrap gap-1 mb-2">
                    {selectedProject.technologies.map((t, idx) => (
                      <span key={idx} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer border-secondary border-opacity-25 pt-3">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-glass-outline"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub Repository</span>
                  </a>
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-gradient"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    <span>Launch Live Demo</span>
                  </a>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm ms-auto" 
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
