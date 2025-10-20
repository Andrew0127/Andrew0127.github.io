export default function About() {
  return (
    <section id="about" style={{
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
            About <span style={{ color: '#2563eb' }}>Me</span>
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Content - Fixed Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }} className="about-content">
          
          {/* Main Content Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start'
          }} className="content-row">
            
            {/* Left Column - Text Content */}
            <div style={{
              minHeight: '200px'
            }}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '2.5rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  A highly motivated <strong style={{ color: '#2563eb' }}>Mechanical Design and Production Engineering</strong> graduate with a minor in <strong style={{ color: '#7c3aed' }}>Industrial Engineering</strong> from Ain Shams University. I possess a strong foundation in mechanical design, additive manufacturing, and operations improvement, supported by hands-on experience in industrial environments.
                </p>
                
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  Throughout my academic and internship journey, I developed a passion for bridging engineering principles with process optimization and digital transformation. I have applied Lean Manufacturing tools such as <strong>5S, SMED, and TPM</strong>, and contributed to projects focused on improving efficiency, reducing waste, and enhancing workflow reliability.
                </p>

                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  My technical skill set includes <strong>SolidWorks, AutoCAD, and CAD-based design</strong>, as well as analytical and reporting tools such as <strong>Excel, Power BI, and PowerApps</strong>. I also have a growing interest in data-driven decision-making, supply chain planning, and ERP systems (SAP).
                </p>

                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  Having worked with leading organizations such as <strong>Legrand Egypt and Danone Egypt</strong>, I've gained practical exposure to production analysis, process design, and continuous improvement initiatives. Beyond technical expertise, I bring strong <strong>communication, teamwork, and problem-solving skills</strong>, which I honed through my leadership experience as a Scout leader and involvement in collaborative engineering projects.
                </p>

                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#4b5563'
                }}>
                  I am eager to contribute to roles in <strong>supply chain, manufacturing, planning, or technical office operations</strong>, where I can combine my engineering background with digital innovation to deliver measurable impact and long-term value.
                </p>
              </div>
            </div>

            {/* Right Column - Info Cards (Keep this part the same) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              alignSelf: 'stretch'
            }}>
              {/* Location Card */}
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="info-card">
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#dbeafe',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  transition: 'background-color 0.3s ease'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Location</h3>
                <p style={{ color: '#6b7280' }}>Maadi, Cairo, Egypt</p>
              </div>

              {/* Phone Card */}
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="info-card">
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  transition: 'background-color 0.3s ease'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Phone</h3>
                <p style={{ color: '#6b7280' }}>+201275886695</p>
              </div>

              {/* Email Card */}
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="info-card">
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#f3e8ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  transition: 'background-color 0.3s ease'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#7c3aed' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Email</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>andrewashraf.official13@gmail.com</p>
              </div>

              {/* Status Card */}
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="info-card">
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ffedd5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  transition: 'background-color 0.3s ease'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: '#ea580c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>Status</h3>
                <p style={{ color: '#6b7280' }}>Available for Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
        }

        .info-card:hover > div:first-child {
          background-color: #2563eb !important;
        }

        .info-card:hover svg {
          color: white !important;
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .content-row {
            grid-template-columns: 2fr 1fr !important;
            gap: 4rem !important;
          }
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .content-row {
            grid-template-columns: 2fr 1fr !important;
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

          .content-row > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .content-row > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}