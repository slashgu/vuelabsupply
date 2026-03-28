import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
          
          {/* Brand Col */}
          <div>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', display: 'block', marginBottom: '1rem' }}>
              VueLab<span style={{ color: 'var(--secondary)' }}>.</span>Supply
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '300px' }}>
              Your Reliable Partner of One Stop Nail & Beauty Supplies. We provide OEM/ODM and private label solutions for professional nail products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Link></li>
              <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.7)' }}>Nail Products</Link></li>
              <li><Link to="/oem" style={{ color: 'rgba(255,255,255,0.7)' }}>OEM / Private Label</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }}/>
                <span>+852 9579 5572</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }}/>
                <span>8th floor, 48-62 Hennessy Road, HongKong</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.875rem'
        }}>
          <p>© {new Date().getFullYear()} VueLab Supply. All rights reserved.</p>
        </div>
      </div>
      
      <style>{`
        footer a:hover {
          color: var(--secondary) !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer
