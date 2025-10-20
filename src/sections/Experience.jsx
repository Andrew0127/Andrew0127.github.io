import { useNavigate } from 'react-router-dom';

export default function Experience() {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      title: "Industrial Engineering Intern",
      company: "Legrand Egypt",
      period: "Jul 2024 - Aug 2024",
      location: "Cairo, Egypt",
      achievements: [
        "Applied Lean Manufacturing principles, including full 5S implementation for new production line",
        "Led digital transformation of injection audit process using PowerApps, reducing process time by 36%",
        "Automated workflows with Power Automate and built live Power BI dashboards",
        "Designed and manufactured optimized tool model for new production line"
      ],
      technologies: ["PowerApps", "Power Automate", "Power BI", "Lean Manufacturing", "5S", "Process Optimization"],
      media: ["/legrand1.jpg", "/legrand2.jpg"]
    },
    {
      id: 2,
      title: "Robotics Instructor",
      company: "Happy Makers Academy",
      period: "Current",
      location: "Cairo, Egypt",
      achievements: [
        "Preparing technical content for students aged 6-18 years",
        "Teaching programming concepts and design principles",
        "Leading sub-teams of instructors and mentoring students"
      ],
      technologies: ["Robotics", "Programming", "Teaching", "Curriculum Development", "Team Leadership"],
      media: ["/robotics1.jpg", "/robotics2.jpg"]
    },
    {
      id: 3,
      title: "Co-Founder",
      company: "AB Electronics Store",
      period: "Current",
      location: "Cairo, Egypt",
      achievements: [
        "Co-founded and managed electronics retail business",
        "Handled operations, inventory management, and customer relations"
      ],
      technologies: ["Business Management", "Inventory Management", "Customer Service", "E-commerce"],
      media: ["/business1.jpg"]
    },
    {
      id: 4,
      title: "3D Printing Service Advisor",
      company: "Startup Venture",
      period: "Current",
      location: "Cairo, Egypt",
      achievements: [
        "Provided expert consultation on 3D printing services",
        "Advised clients on additive manufacturing solutions"
      ],
      technologies: ["3D Printing", "Additive Manufacturing", "CAD", "Client Consultation"],
      media: ["/3dprinting1.jpg", "/3dprinting2.jpg"]
    }
  ];

  const handleViewDetails = (experience) => {
    navigate(`/experience/${experience.id}`);
  };

  return (
    <section id="experience" style={{
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
            Work <span style={{ color: '#2563eb' }}>Experience</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Experience Timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {experiences.map((exp, index) => (
            <div key={exp.id} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }} className="experience-card">
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '2rem',
                width: '20px',
                height: '20px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                border: '4px solid #f8fafc'
              }}></div>

              {/* Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: 0
                    }}>{exp.title}</h3>
                    <p style={{
                      fontSize: '1.125rem',
                      color: '#2563eb',
                      fontWeight: '500',
                      margin: 0
                    }}>{exp.company}</p>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>{exp.location}</p>
                  </div>
                  <span style={{
                    color: '#6b7280',
                    backgroundColor: '#f3f4f6',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    alignSelf: 'flex-start'
                  }}>
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {exp.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} style={{
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
                      <span>{achievement}</span>
                    </li>
                  ))}
                  {exp.achievements.length > 3 && (
                    <li style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}>
                      +{exp.achievements.length - 3} more achievements...
                    </li>
                  )}
                </ul>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {exp.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} style={{
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span style={{
                      backgroundColor: '#f3f4f6',
                      color: '#6b7280',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      +{exp.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(exp)}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    alignSelf: 'flex-start',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '0.5rem'
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
                  View Experience Details
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
          border-color: #2563eb !important;
        }

        /* Timeline line */
        .experience-card:not(:last-child)::after {
          content: '';
          position: absolute;
          left: -1px;
          top: 3rem;
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

          .experience-card {
            padding: 1.5rem !important;
          }

          /* Hide timeline on mobile */
          .experience-card::after {
            display: none;
          }

          .experience-card > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}