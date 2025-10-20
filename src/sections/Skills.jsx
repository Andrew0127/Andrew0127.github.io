export default function Skills() {
  const technicalSkills = [
    { name: "SolidWorks", logo: "🏗️" },
    { name: "AutoCAD", logo: "📐" },
    { name: "Python", logo: "🐍" },
    { name: "MATLAB", logo: "🔬" },
    { name: "PowerApps", logo: "⚡" },
    { name: "Power Automate", logo: "🔄" },
    { name: "Power BI", logo: "📊" },
    { name: "Minitab", logo: "📈" },
    { name: "Arduino", logo: "🔌" },
    { name: "AI Tools", logo: "🤖" },
    { name: "Excel", logo: "📋" },
    { name: "Word", logo: "📄" },
    { name: "PowerPoint", logo: "📽️" }
  ];

  const softSkills = [
    { name: "Presentation Skills", logo: "🎯" },
    { name: "Communication Skills", logo: "💬" },
    { name: "Leadership", logo: "👑" },
    { name: "Teamwork", logo: "🤝" },
    { name: "Time Management", logo: "⏰" },
    { name: "Working Under Pressure", logo: "🔥" },
    { name: "Commitment", logo: "✅" }
  ];

  const areas = [
    { name: "Lean Manufacturing", logo: "🏭" },
    { name: "Digital Manufacturing", logo: "💻" },
    { name: "3D Printing", logo: "🖨️" },
    { name: "Process Optimization", logo: "📈" },
    { name: "Supply Chain Management", logo: "📦" },
    { name: "Quality Control", logo: "🔍" },
    { name: "Data Analytics", logo: "📊" },
    { name: "Automation", logo: "⚙️" }
  ];

  return (
    <section id="skills" style={{
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
            Skills & <span style={{ color: '#2563eb' }}>Expertise</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          {/* Technical Skills */}
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
              color: '#2563eb',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>Technical Skills</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {technicalSkills.map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }} className="skill-item">
                  <span style={{
                    fontSize: '1.5rem',
                    width: '40px',
                    textAlign: 'center'
                  }}>{skill.logo}</span>
                  <span style={{
                    fontWeight: '500',
                    color: '#374151'
                  }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Areas of Expertise */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }} className="skills-grid">
            
            {/* Soft Skills */}
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
                color: '#10b981',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>Soft Skills</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {softSkills.map((skill, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f0fdf4',
                    borderRadius: '8px',
                    border: '1px solid #dcfce7',
                    transition: 'all 0.3s ease'
                  }} className="skill-item">
                    <span style={{
                      fontSize: '1.5rem',
                      width: '40px',
                      textAlign: 'center'
                    }}>{skill.logo}</span>
                    <span style={{
                      fontWeight: '500',
                      color: '#374151'
                    }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
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
                color: '#7c3aed',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>Areas of Expertise</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {areas.map((area, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#faf5ff',
                    borderRadius: '8px',
                    border: '1px solid #f3e8ff',
                    transition: 'all 0.3s ease'
                  }} className="skill-item">
                    <span style={{
                      fontSize: '1.5rem',
                      width: '40px',
                      textAlign: 'center'
                    }}>{area.logo}</span>
                    <span style={{
                      fontWeight: '500',
                      color: '#374151'
                    }}>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #2563eb !important;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          section {
            padding: 3rem 1rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }

          .technical-skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
          }
        }

        @media (max-width: 480px) {
          .technical-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}