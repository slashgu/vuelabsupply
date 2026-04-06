import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'var(--navbar-bg)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>
          Y2<span style={{ color: 'var(--accent-color)' }}>Nail</span> <span style={{ fontWeight: 400 }}>Supply</span>
        </Link>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
            {links.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  style={{ 
                    fontWeight: 500,
                    color: location.pathname === link.path ? 'var(--primary-color)' : 'var(--text-dark)',
                    borderBottom: location.pathname === link.path ? '2px solid var(--primary-color)' : 'none',
                    paddingBottom: '0.25rem'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
