import React, { useState } from 'react';

const Contact = () => {
  // =========================================================================
  // PLACEHOLDER CONTACT INFO - REPLACE WITH YOUR REAL DETAILS HERE:
  // =========================================================================
  const CONTACT_INFO = {
    email: "beherarakesh9337@gmail.com",
    phone: "+91 93375 38586",
    location: "Bhubaneswar, Odisha, India",
    linkedIn: "https://www.linkedin.com/in/rakesh-behera-3402652a1",
    gitHub: "https://github.com/rakesh12345behera",
    availability: "Immediate Joiner (0 days notice)"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOpenInGmail = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry for Rakesh Behera');
    const body = encodeURIComponent(`Hello Rakesh,\n\nName: ${formData.name || '(Your Name)'}\nEmail: ${formData.email || '(Your Email)'}\n\nMessage:\n${formData.message || ''}\n\nBest regards`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false, error: false, message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: "table"
        })
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setFormStatus({
          loading: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent directly to beherarakesh9337@gmail.com. I will reply to you as soon as possible!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        setFormStatus({
          loading: false,
          submitted: true,
          error: false,
          message: 'Message queued! An activation email was sent to beherarakesh9337@gmail.com. Once you click "Activate Form" in your Gmail, all future messages will arrive directly in your inbox!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err) {
      // Fallback: Open Gmail Compose directly in browser tab so user never loses their message
      handleOpenInGmail();

      setFormStatus({
        loading: false,
        submitted: true,
        error: false,
        message: 'Opened your message in Gmail Compose so you can send it directly to beherarakesh9337@gmail.com!'
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-envelope-paper-heart"></i> Get In Touch
          </span>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle">
            Whether you have an open .NET Full Stack position, a consulting inquiry, or an interesting project proposal, my inbox is always open.
          </p>
        </div>

        <div className="row gy-4">
          {/* Contact Details Column */}
          <div className="col-lg-5">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column">
              <div className="mb-4">
                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill small mb-2 d-inline-block">
                  <i className="bi bi-clock-history me-1"></i> {CONTACT_INFO.availability}
                </span>
                <h3 className="fw-bold text-white fs-4">Contact Information</h3>
                <p className="text-secondary small">
                  Feel free to connect directly via email, phone, or LinkedIn.
                </p>
              </div>

              {/* Info Items List */}
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email */}
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="d-flex align-items-center gap-3 text-decoration-none p-3 rounded-3 text-light"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', transition: 'all 0.25s' }}
                >
                  <div className="text-info fs-4 flex-shrink-0">
                    <i className="bi bi-envelope-at-fill"></i>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-muted small d-block">Email Address</span>
                    <strong className="text-light text-truncate d-block small">{CONTACT_INFO.email}</strong>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="d-flex align-items-center gap-3 text-decoration-none p-3 rounded-3 text-light"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', transition: 'all 0.25s' }}
                >
                  <div className="text-success fs-4 flex-shrink-0">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Phone / WhatsApp</span>
                    <strong className="text-light small">{CONTACT_INFO.phone}</strong>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href={CONTACT_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center gap-3 text-decoration-none p-3 rounded-3 text-light"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', transition: 'all 0.25s' }}
                >
                  <div className="text-light fs-4 flex-shrink-0">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">GitHub Profile</span>
                    <strong className="text-light small">rakesh12345behera</strong>
                  </div>
                </a>

                {/* Location */}
                <div 
                  className="d-flex align-items-center gap-3 p-3 rounded-3 text-light"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="text-warning fs-4 flex-shrink-0">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Location</span>
                    <strong className="text-light small">{CONTACT_INFO.location}</strong>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
                <span className="text-muted small d-block mb-3 fw-medium">Connect on Social Platforms:</span>
                <div className="d-flex gap-2">
                  <a 
                    href={CONTACT_INFO.gitHub} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-glass-outline flex-grow-1 justify-content-center"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={CONTACT_INFO.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-glass-outline flex-grow-1 justify-content-center"
                  >
                    <i className="bi bi-linkedin text-info"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h3 className="fw-bold text-white fs-4 mb-2">Send a Direct Message</h3>
              <p className="text-secondary small mb-4">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {formStatus.submitted && (
                <div 
                  className={`alert ${formStatus.error ? 'alert-danger' : 'alert-success'} d-flex align-items-center gap-2 mb-4 border-0`} 
                  role="alert" 
                  style={{ 
                    background: formStatus.error ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)', 
                    color: formStatus.error ? '#f87171' : '#34d399' 
                  }}
                >
                  <i className={`bi ${formStatus.error ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill'} fs-5`}></i>
                  <span className="small">{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-medium">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="form-control custom-input"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-medium">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="form-control custom-input"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small fw-medium">Subject *</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Job Opportunity / Full Stack .NET Project"
                      className="form-control custom-input"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small fw-medium">Message *</label>
                    <textarea 
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about the role, project requirements, or question..."
                      className="form-control custom-input"
                    ></textarea>
                  </div>

                  <div className="col-12 pt-2 d-flex flex-column flex-sm-row gap-2">
                    <button 
                      type="submit" 
                      disabled={formStatus.loading}
                      className="btn btn-gradient px-4 py-2 flex-grow-1 justify-content-center"
                    >
                      {formStatus.loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill"></i>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenInGmail}
                      className="btn btn-glass-outline px-3 py-2 justify-content-center"
                      title="Compose and send directly via Gmail Web"
                    >
                      <i className="bi bi-envelope-at text-danger"></i>
                      <span>Send via Gmail</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
