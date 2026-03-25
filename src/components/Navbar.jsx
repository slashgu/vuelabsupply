import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'OEM / Private Label', path: '/oem' },
    { name: 'Contact', path: '/contact' }
  ]

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
    transition: 'all 0.3s ease',
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scrolled ? '70px' : '90px',
    transition: 'height 0.3s ease'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const dotStyle = {
    color: 'var(--secondary)'
  }

  return (
    <nav style={navbarStyle}>
      <div className="container" style={containerStyle}>
        <Link to="/" style={logoStyle}>
          VueLab<span style={dotStyle}>.</span>Supply
        </Link>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? 'var(--secondary)' : 'var(--text-main)',
                    fontWeight: 500,
                    fontSize: '1rem',
                  }}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button - defined in CSS but logic here */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X color="var(--primary)" /> : <Menu color="var(--primary)" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'block',
                      color: location.pathname === link.path ? 'var(--secondary)' : 'var(--text-main)',
                      fontWeight: 500,
                      fontSize: '1.125rem',
                      padding: '0.5rem 0'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .nav-link:hover {
          color: var(--secondary) !important;
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
        main { padding-top: 90px; }
      `}</style>
    </nav>
  )
}

export default Navbar
