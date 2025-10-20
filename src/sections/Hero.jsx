export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e3a8a, #3730a3, #6d28d9)',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Andrew Ashraf Zakaria
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          Mechanical Design & Production Engineer | Industrial Engineering Minor
        </h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.8 }}>
          Specializing in Digital Manufacturing, 3D Printing, Process Optimization, 
          and Lean Manufacturing principles.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/Andrew CV G.pdf" 
            download
            style={{
              background: '#2563eb',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            Download CV
          </a>
          <a 
            href="#contact"
            style={{
              border: '2px solid white',
              color: 'white',
              background: 'transparent',
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}