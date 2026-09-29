import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "bi-laptop",
      title: ".NET Web Development",
      description: "Building scalable, maintainable, and enterprise-grade web applications using ASP.NET Core, MVC architecture, and Entity Framework Core.",
      capabilities: [
        "ASP.NET Core & MVC Architecture",
        "Clean Architecture & Dependency Injection",
        "Secure User Authentication & Session Management",
        "Cross-platform .NET 8 / 9 hosting & deployment"
      ]
    },
    {
      icon: "bi-hdd-network",
      title: "REST API Development",
      description: "Designing and implementing high-throughput, secure RESTful APIs engineered for seamless third-party consumer integration and high concurrency.",
      capabilities: [
        "Stateless JWT Token Authentication & RBAC",
        "Standardized OpenAPI / Swagger Documentation",
        "Global Exception Handling & Rate Limiting",
        "Payload Validation & Response Compression"
      ]
    },
    {
      icon: "bi-layers-half",
      title: "Full Stack Development",
      description: "Delivering complete end-to-end web applications bridging powerful .NET backend business logic with dynamic, reactive React.js user interfaces.",
      capabilities: [
        "React.js Single Page Applications (SPAs)",
        "Axios REST Integration & State Management",
        "Mobile-first Responsive Design with Bootstrap 5",
        "Smooth Client-Side Validation & Feedback Loops"
      ]
    },
    {
      icon: "bi-database-fill-gear",
      title: "Database Development",
      description: "Developing robust relational data schemas, writing complex stored procedures, and fine-tuning query execution plans in SQL Server.",
      capabilities: [
        "Relational Schema Design & Normalization",
        "High-performance Stored Procedures & Triggers",
        "Query Optimization, Indexing & Execution Plans",
        "Entity Framework Core Code-First Migrations"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding" style={{ background: 'rgba(7, 13, 25, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-gear-fill"></i> Core Capabilities
          </span>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="section-subtitle">
            Tailored software engineering solutions built with modern best practices, clean architecture, and reliable performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <div className="glass-card service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h4 className="fw-bold text-white mb-2 fs-5">{service.title}</h4>
                <p className="text-secondary small mb-4" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>

                <div className="mt-auto">
                  <h6 className="text-uppercase text-light small fw-bold mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    Deliverables & Standards:
                  </h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {service.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="d-flex align-items-center gap-2 text-secondary small">
                        <i className="bi bi-chevron-right text-info" style={{ fontSize: '0.75rem' }}></i>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-4 p-md-5 mt-5 text-center">
          <h3 className="fw-bold text-white mb-2">Need a dedicated .NET Full Stack Engineer?</h3>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            I am available as an <strong>Immediate Joiner</strong> for full-time engineering roles in India or remote international teams.
          </p>
          <a href="#contact" className="btn btn-gradient px-4 py-2">
            <i className="bi bi-chat-square-text-fill"></i>
            <span>Get In Touch Today</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
