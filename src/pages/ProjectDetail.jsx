import { useParams, useNavigate } from 'react-router-dom';

// Sample project data - you can move this to a separate data file later
const projectsData = {
  1: {
    title: "Graduation Project - Industrial Engineering",
    company: "Danone Egypt",
    period: "2024",
    description: "Production line efficiency improvement applying Lean manufacturing principles",
    fullDescription: "This graduation project focused on optimizing production line efficiency at Danone Egypt through the application of Lean manufacturing principles. The project involved comprehensive analysis of existing processes and implementation of various improvement methodologies.",
    achievements: [
      "Improved OEE from 64% to 71% through quality enhancements and downtime reduction",
      "Applied SMED achieving 30% reduction in changeover time",
      "Designed standardized quality inspection system reducing defects by 70%",
      "Created optimized production scheduling model for FMCG dairy lines",
      "Developed PowerApps application for improved operator-engineer communication",
      "Implemented TPM pillars for improved asset reliability",
      "Reduced product waste by 25% through process optimization"
    ],
    technologies: ["Lean Manufacturing", "SMED", "TPM", "PowerApps", "Power BI", "Excel", "Process Mapping"],
    results: [
      "36% reduction in process time for quality audits",
      "70% decrease in product defects",
      "30% improvement in changeover efficiency",
      "25% reduction in material waste"
    ],
    media: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
    category: "Industrial Engineering"
  },
  // Add other projects here...
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Project not found</h2>
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{project.title}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>{project.company} • {project.period}</p>
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
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Project Overview</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#4b5563' }}>
            {project.fullDescription}
          </p>
        </section>

        {/* Achievements */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Key Achievements</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {project.achievements.map((achievement, index) => (
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

        {/* Technologies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Technologies & Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, index) => (
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

        {/* Results */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Measurable Results</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {project.results.map((result, index) => (
              <div key={index} style={{
                backgroundColor: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #bae6fd'
              }}>
                <p style={{ margin: 0, color: '#0369a1', fontWeight: '500' }}>{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Placeholder */}
        <section>
          <h2 style={{ color: '#1e40af', marginBottom: '1rem' }}>Project Media</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {project.media.map((media, index) => (
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