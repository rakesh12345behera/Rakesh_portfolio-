import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "A2R Software Consulting Pvt. Ltd Bangalore",
      logo: `${import.meta.env.BASE_URL}companies/a2r_logo.png`,
      position: "Project Intern (.NET Developer)",
      duration: "10 Months Internship",
      type: "Internship",
      location: "Bangalore, India",
      description: "Hands-on experience in building and supporting web applications using C#, ASP.NET MVC, Web API, ADO.NET, and SQL Server within an enterprise MVC architecture.",
      keyAchievements: [
        "Hands-on experience with C#, ASP.NET MVC, ADO.NET, SQL Server, and Visual Studio for developing robust web applications.",
        "Strong knowledge of MS SQL Server, developing Stored Procedures, Triggers, and User-Defined Functions for efficient data management.",
        "Experienced in customizing and enhancing software products based on client requirements and real-world feedback.",
        "Skilled in developing controller action methods, performing model validations, and fixing bugs to ensure seamless application performance.",
        "Familiar with the MVC architectural pattern and its complete workflow within enterprise applications.",
        "Integrated responsive frontend designs using HTML5, CSS3, Bootstrap, and JavaScript."
      ],
      technologies: [
        "C#",
        "ASP.NET MVC",
        ".NET Core",
        "Web API",
        "ADO.NET",
        "Entity Framework",
        "MS SQL Server",
        "Stored Procedures",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "Visual Studio"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-briefcase"></i> Career Journey
          </span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Demonstrated track record of delivering enterprise-ready .NET and frontend web applications in fast-paced software environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  {/* Timeline Dot Indicator */}
                  <div className="timeline-dot"></div>

                  {/* Experience Card */}
                  <div className="glass-card p-4 p-md-5">
                    {/* Header Row */}
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
                      <div className="d-flex align-items-center gap-3">
                        {exp.logo && (
                          <div 
                            className="p-1 rounded-3 bg-white shadow-sm flex-shrink-0 d-flex align-items-center justify-content-center"
                            style={{ width: '48px', height: '48px' }}
                          >
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} Logo`} 
                              className="img-fluid"
                              style={{ maxHeight: '42px', objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="fw-bold text-white mb-1">{exp.position}</h4>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <span className="text-info fw-semibold fs-5">
                              {exp.company}
                            </span>
                            <span className="badge bg-secondary-subtle text-light rounded-pill px-2 py-1 small">
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm-end">
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-medium fs-6 d-inline-flex align-items-center gap-1">
                          <i className="bi bi-calendar3"></i> {exp.duration}
                        </span>
                        <div className="text-muted small mt-1">{exp.type}</div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-light-emphasis mb-4" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                      {exp.description}
                    </p>

                    {/* Key Responsibilities / Impact */}
                    <div className="mb-4">
                      <h6 className="text-uppercase text-secondary fw-bold small mb-3 tracking-wide" style={{ letterSpacing: '0.05em' }}>
                        Key Responsibilities & Deliverables:
                      </h6>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                        {exp.keyAchievements.map((item, itemIdx) => (
                          <li key={itemIdx} className="d-flex align-items-start gap-2 text-secondary small" style={{ lineHeight: '1.6' }}>
                            <i className="bi bi-check2-circle text-info fs-6 mt-1 flex-shrink-0"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 border-top border-secondary border-opacity-25">
                      <span className="text-muted small d-block mb-2 fw-medium">Technologies Leveraged:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
