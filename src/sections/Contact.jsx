export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" style={{
      padding: '5rem 1rem',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Get In <span style={{ color: '#2563eb' }}>Touch</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '1rem auto 0',
            lineHeight: '1.6'
          }}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about engineering and technology.
          </p>
        </div>

        {/* Contact Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem'
        }} className="contact-content">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start'
          }} className="contact-row">
            
            {/* Left Column - Contact Information */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>Contact Information</h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {/* Location */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }} className="contact-item">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Location</h4>
                    <p style={{
                      color: '#6b7280',
                      margin: 0,
                      fontSize: '1rem'
                    }}>Maadi, Cairo, Egypt</p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }} className="contact-item">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#dcfce7',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Phone</h4>
                    <p style={{
                      color: '#6b7280',
                      margin: 0,
                      fontSize: '1rem'
                    }}>+20 127 588 6695</p>
                  </div>
                </div>

                {/* Email */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }} className="contact-item">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#f3e8ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#7c3aed' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Email</h4>
                    <p style={{
                      color: '#6b7280',
                      margin: 0,
                      fontSize: '1rem'
                    }}>andrewashraf.official13@gmail.com</p>
                  </div>
                </div>

                {/* Availability */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }} className="contact-item">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#ffedd5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#ea580c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Response Time</h4>
                    <p style={{
                      color: '#6b7280',
                      margin: 0,
                      fontSize: '1rem'
                    }}>Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }} className="form-row">
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      className="form-input"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      className="form-input"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    className="form-input"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Message *
                  </label>
                  <textarea 
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    className="form-input"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1d4ed8';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message
                  <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #2563eb !important;
        }

        .contact-item:hover > div:first-child {
          background-color: #2563eb !important;
        }

        .contact-item:hover svg {
          color: white !important;
        }

        .form-input:focus {
          outline: none;
          border-color: #2563eb !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .contact-row {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-row {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }

        /* Mobile Layout */
        @media (max-width: 767px) {
          section {
            padding: 3rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }

          .contact-item,
          .contact-row > div {
            padding: 1.5rem !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .contact-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}