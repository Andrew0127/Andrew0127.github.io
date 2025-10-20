export default function Education() {
  return (
    <section id="education" style={{
      padding: '5rem 1rem',
      backgroundColor: 'white'
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
            Education & <span style={{ color: '#2563eb' }}>Qualifications</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Education Timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* University Education */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }} className="education-card">
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-10px',
              top: '3rem',
              width: '20px',
              height: '20px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              border: '4px solid white'
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '2rem',
              alignItems: 'start'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Faculty of Engineering Ain Shams University</h3>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#2563eb',
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>Bachelor of Mechanical Engineering</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Major: Mechanical Design & Production
                  </span>
                  <span style={{
                    backgroundColor: '#f3e8ff',
                    color: '#7c3aed',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Minor: Industrial Engineering
                  </span>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      color: '#2563eb',
                      fontWeight: 'bold',
                      marginTop: '0.375rem',
                      flexShrink: 0
                    }}>•</div>
                    <span>Comprehensive curriculum covering mechanical design, production systems, and industrial engineering principles</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      color: '#2563eb',
                      fontWeight: 'bold',
                      marginTop: '0.375rem',
                      flexShrink: 0
                    }}>•</div>
                    <span>Hands-on projects in CAD design, manufacturing processes, and production optimization</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      color: '#2563eb',
                      fontWeight: 'bold',
                      marginTop: '0.375rem',
                      flexShrink: 0
                    }}>•</div>
                    <span>Industrial engineering minor focusing on process improvement and operations management</span>
                  </li>
                </ul>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '0.5rem'
              }}>
                <span style={{
                  color: '#6b7280',
                  backgroundColor: '#f3f4f6',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  Graduated
                </span>
                <span style={{
                  color: '#059669',
                  backgroundColor: '#d1fae5',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  Fresh Grad
                </span>
              </div>
            </div>
          </div>

          {/* High School */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }} className="education-card">
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-10px',
              top: '3rem',
              width: '20px',
              height: '20px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              border: '4px solid white'
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '2rem',
              alignItems: 'start'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Hadayek Al Maadi Official School</h3>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#10b981',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>Thanawiya Amma (High School Diploma)</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      marginTop: '0.375rem',
                      flexShrink: 0
                    }}>•</div>
                    <span>Science and Mathematics concentration with focus on engineering prerequisites</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      marginTop: '0.375rem',
                      flexShrink: 0
                    }}>•</div>
                    <span>Strong foundation in physics, mathematics, and technical sciences</span>
                  </li>
                </ul>
              </div>
              <div>
                <span style={{
                  color: '#6b7280',
                  backgroundColor: '#f3f4f6',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  Graduated 2020
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Volunteering */}
        <div>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Leadership & <span style={{ color: '#2563eb' }}>Volunteering</span>
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Aviation Club */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }} className="activity-card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#dbeafe',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0
                }}>Aviation Club - ASUENG</h4>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#2563eb',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span><strong>Participant</strong> (5th Place Rank) - 2021</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#2563eb',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span><strong>Head, Mechanical Technical Support Team</strong> - 2022</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#2563eb',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span><strong>Technical Support Director</strong> - Current</span>
                </li>
              </ul>
            </div>

            {/* Scouts & Representation */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }} className="activity-card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0
                }}>Scouts & Representation</h4>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#16a34a',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span><strong>Scouts Team Leader</strong> - 2021–Present</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#16a34a',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span><strong>Academic Level Representative</strong> - 2022–Present</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: '#4b5563',
                  lineHeight: '1.5'
                }}>
                  <div style={{
                    color: '#16a34a',
                    fontWeight: 'bold',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}>•</div>
                  <span>Led team activities and represented department interests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-card:hover,
        .activity-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .education-card:hover {
          border-color: #2563eb !important;
        }

        .activity-card:hover {
          border-color: #10b981 !important;
        }

        /* Timeline line */
        .education-card:first-child::after {
          content: '';
          position: absolute;
          left: -1px;
          top: 4rem;
          bottom: -2rem;
          width: 2px;
          background-color: #e5e7eb;
          z-index: -1;
        }

        /* Mobile adjustments */
        @media (max-width: 767px) {
          section {
            padding: 3rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }

          .education-card {
            padding: 1.5rem !important;
          }

          .education-card > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          /* Hide timeline on mobile */
          .education-card::after {
            display: none;
          }

          .education-card > div:first-child > div:first-child {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .activity-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}