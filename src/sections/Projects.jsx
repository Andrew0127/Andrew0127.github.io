import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Graduation Project - Industrial Engineering",
      company: "Danone Egypt",
      period: "2024",
      description: "Production line efficiency improvement applying Lean manufacturing principles",
      achievements: [
        "Improved OEE from 64% to 71% through quality enhancements and downtime reduction",
        "Applied SMED achieving 30% reduction in changeover time",
        "Designed standardized quality inspection system reducing defects by 70%",
        "Created optimized production scheduling model for FMCG dairy lines",
        "Developed PowerApps application for improved operator-engineer communication"
      ],
      media: ["/project1-1.jpg", "/project1-2.jpg"]
    },
    {
      id: 2,
      title: "P&G Supply Chain and Manufacturing Academy",
      company: "Procter & Gamble",
      period: "May 2025",
      description: "Advanced training in supply chain and manufacturing excellence",
      achievements: [
        "Completed intensive training in supply chain management",
        "Learned advanced manufacturing principles and best practices",
        "Participated in real-world case studies and simulations"
      ],
      media: ["/project2-1.jpg"]
    },
    {
      id: 3,
      title: "Car Engines Maintenance Training",
      company: "Luban Workshop, ASUENG",
      period: "2022",
      description: "Hands-on training in automotive engine maintenance and repair",
      achievements: [
        "Learned engine disassembly and assembly procedures",
        "Practiced diagnostic and troubleshooting techniques",
        "Gained hands-on experience with various engine systems"
      ],
      media: ["/project3-1.jpg", "/project3-2.jpg"]
    },
    {
      id: 4,
      title: "PCB Fabrication Training",
      company: "ERI",
      period: "2023",
      description: "Training in printed circuit board design and fabrication processes",
      achievements: [
        "Learned PCB design principles and software",
        "Gained experience in circuit board fabrication techniques",
        "Understood quality control in PCB manufacturing"
      ],
      media: ["/project4-1.jpg"]
    }
  ];

  const handleViewDetails = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <section id="projects" style={{
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
            Projects & <span style={{ color: '#2563eb' }}>Training</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={project.id} style={{
              backgroundColor: '#f8fafc',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }} className="project-card">
              {/* Project Header */}
              <div style={{
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>{project.title}</h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <p style={{
                    color: '#2563eb',
                    fontWeight: '500',
                    margin: 0
                  }}>{project.company}</p>
                  <span style={{
                    color: '#6b7280',
                    backgroundColor: '#f3f4f6',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {project.period}
                  </span>
                </div>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>{project.description}</p>
              </div>

              {/* Achievements */}
              <div style={{
                flex: 1,
                marginBottom: '1.5rem'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {project.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: '#4b5563',
                      lineHeight: '1.5',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        color: '#2563eb',
                        fontWeight: 'bold',
                        marginTop: '0.25rem',
                        flexShrink: 0
                      }}>•</div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                  {project.achievements.length > 3 && (
                    <li style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}>
                      +{project.achievements.length - 3} more achievements...
                    </li>
                  )}
                </ul>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(project)}
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
                View Project Details
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
          border-color: #2563eb !important;
        }

        @media (max-width: 767px) {
          section {
            padding: 3rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }

          .project-card {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}