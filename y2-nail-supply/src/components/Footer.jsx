import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Y2Nail Supply</h3>
            <p style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
              Your trusted U.S. based wholesale distributor for professional nail products. Ready stock, competitive pricing, fast delivery.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/products" style={{ color: 'var(--accent-color)' }}>Wholesale Catalog</Link></li>
              <li><Link to="/wholesale" style={{ color: 'var(--accent-color)' }}>Partner with Us</Link></li>
              <li><Link to="/about" style={{ color: 'var(--accent-color)' }}>About</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--accent-color)' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--accent-color)' }}>
              <li>📍 Los Angeles, CA</li>
              <li>📧 sales@y2nailsupply.com</li>
              <li>📞 +1 4259799926</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--accent-color)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Y2 Nail Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
