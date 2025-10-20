import { useParams, useNavigate } from 'react-router-dom';

// Sample experience data
const experiencesData = {
  1: {
    title: "Industrial Engineering Intern",
    company: "Legrand Egypt",
    period: "Jul 2024 - Aug 2024",
    location: "Cairo, Egypt",
    fullDescription: "During my internship at Legrand Egypt, I was involved in various industrial engineering projects focused on process optimization and digital transformation. I worked closely with the production team to implement Lean manufacturing principles and develop digital solutions for operational challenges.",
    achievements: [
      "Applied Lean Manufacturing principles, including full 5S implementation for new production line",
      "Led digital transformation of injection audit process using PowerApps, reducing process time by 36%",
      "Automated workflows with Power Automate and built live Power BI dashboards",
      "Designed and manufactured optimized tool model for new production line",
      "Conducted time and motion studies to identify bottlenecks",
      "Collaborated with cross-functional teams to implement process improvements",
      "Trained production staff on new digital tools and processes"
    ],
    responsibilities: [
      "Process analysis and improvement",
      "Digital tool development and implementation",
      "Data analysis and reporting",
      "Cross-functional team collaboration",
      "Training and knowledge transfer"
    ],
    technologies: ["PowerApps", "Power Automate", "Power BI", "Lean Manufacturing", "5S", "Process Optimization", "Excel", "CAD"],
    skills: ["Process Improvement", "Data Analysis", "Digital Transformation", "Team Collaboration", "Problem Solving"],
    media: ["/legrand1.jpg", "/legrand2.jpg"]
  },
  // Add other experiences here...
};

export default function ExperienceDetail() {
  const { experienceId } = useParams();
  const navigate = useNavigate();
  const experience = experiencesData[experienceId];

  if (!experience) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Experience not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1e40af',
        color: 'white',
        padding: '2rem 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            ← Back to Portfolio
          </button>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{experience.title}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>{experience.company} • {experience.period}</p>
          <p style={{ opacity: 0.8 }}>{experience.location}</p>
        </div>
      </header>

      {/* Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {/* Overview */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Role Overview</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#4b5563' }}>
            {experience.fullDescription}
          </p>
        </section>

        {/* Key Achievements */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Key Achievements</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {experience.achievements.map((achievement, index) => (
              <li key={index} style={{
                padding: '1rem',
                backgroundColor: index % 2 === 0 ? '#f8fafc' : 'white',
                borderLeft: '4px solid #1e40af',
                marginBottom: '0.5rem'
              }}>
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        {/* Responsibilities */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Key Responsibilities</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {experience.responsibilities.map((responsibility, index) => (
              <div key={index} style={{
                backgroundColor: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #bae6fd'
              }}>
                <p style={{ margin: 0, color: '#0369a1', fontWeight: '500' }}>{responsibility}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies & Skills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Technologies */}
          <section>
            <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Technologies Used</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {experience.technologies.map((tech, index) => (
                <span key={index} style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Skills Developed</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {experience.skills.map((skill, index) => (
                <span key={index} style={{
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Media Placeholder */}
        <section>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Experience Media</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {experience.media.map((media, index) => (
              <div key={index} style={{
                backgroundColor: '#f8fafc',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                border: '2px dashed #d1d5db'
              }}>
                <p style={{ color: '#6b7280' }}>Media {index + 1}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}