import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <a 
            href="#hero" 
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2563eb',
              textDecoration: 'none'
            }}
          >
            Andrew Ashraf Zakaria
          </a>
          
          {/* Desktop Menu */}
          <div style={{
            display: 'none',
            gap: '2rem',
            alignItems: 'center'
          }} className="desktop-menu">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                style={{
                  color: scrolled ? '#374151' : 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = scrolled ? '#374151' : 'white';
                }}
              >
                {item.name}
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#2563eb',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <span style={{
                width: '100%',
                height: '2px',
                backgroundColor: scrolled ? '#374151' : 'white',
                transition: 'all 0.3s ease',
                transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }}></span>
              <span style={{
                width: '100%',
                height: '2px',
                backgroundColor: scrolled ? '#374151' : 'white',
                transition: 'all 0.3s ease',
                opacity: isOpen ? 0 : 1
              }}></span>
              <span style={{
                width: '100%',
                height: '2px',
                backgroundColor: scrolled ? '#374151' : 'white',
                transition: 'all 0.3s ease',
                transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          display: isOpen ? 'block' : 'none',
          paddingTop: '1rem'
        }} className="mobile-menu">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                style={{
                  color: scrolled ? '#374151' : 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  transition: 'color 0.3s ease'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = scrolled ? '#374151' : 'white';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        .desktop-menu a:hover .nav-underline {
          width: 100% !important;
        }
      `}</style>
    </header>
  );
}