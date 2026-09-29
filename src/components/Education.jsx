import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Biju Patnaik University of Technology (BPUT), Odisha",
      period: "Graduated 2024",
      status: "8.5 SGPA",
      grade: "8.5 SGPA",
      description: "Postgraduate study in Computer Science and Software Engineering covering MVC Web Architectures, Database Management Systems (SQL Server), Object-Oriented Programming (C#), and Full Stack Web Development.",
      keyCourses: [
        "Advanced Database Management Systems (RDBMS & SQL)",
        "Object-Oriented Programming (C# & Java)",
        "Web Application Architectures & Frameworks",
        "Data Structures & Algorithms",
        "Cloud Computing & Software Security"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-mortarboard"></i> Academic Background
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong academic grounding in computer science principles, database architectures, and modern software engineering.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {educationList.map((item, index) => (
              <div key={index} className="glass-card p-4 p-md-5">
                <div className="row gy-4 align-items-center">
                  <div className="col-md-8">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="bg-primary bg-opacity-15 p-3 rounded-3 text-info fs-3 border border-primary border-opacity-25">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <div>
                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1 small">
                          {item.status} &bull; {item.period}
                        </span>
                        <h4 className="fw-bold text-white mt-1 mb-0">{item.degree}</h4>
                      </div>
                    </div>

                    <h6 className="text-info fw-semibold mb-2">
                      <i className="bi bi-geo-alt-fill me-1"></i> {item.institution}
                    </h6>

                    <p className="text-secondary small mb-3" style={{ lineHeight: '1.7' }}>
                      {item.description}
                    </p>

                    <div>
                      <span className="text-muted small d-block mb-2 fw-medium">Core Academic Concentrations:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {item.keyCourses.map((course, cIdx) => (
                          <span key={cIdx} className="tech-badge">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 text-center text-md-end border-start-md border-secondary border-opacity-25 ps-md-4">
                    <div className="stat-box mx-auto" style={{ maxWidth: '200px' }}>
                      <div className="stat-number fs-1 text-info">2024</div>
                      <p className="stat-label">Graduation Year</p>
                    </div>
                    <div className="mt-3">
                      <span className="badge bg-secondary-subtle text-light rounded-pill px-3 py-1 small">
                        Bhubaneswar, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
