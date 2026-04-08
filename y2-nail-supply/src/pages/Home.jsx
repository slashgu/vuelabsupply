import { Link } from 'react-router-dom'
import { FaTruck, FaBoxOpen, FaHandshake } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '8rem 0 6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Wholesale Nail Supply in the U.S. <br />
            <span style={{ color: 'var(--accent-color)' }}>Ready Stock & Fast Delivery</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--highlight-color)', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            We supply professional nail products to beauty supply stores, distributors, and nail brands across the United States. All products are stocked locally for fast and reliable delivery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>Shop Wholesale</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Request Price List</Link>
          </div>
        </div>
      </section>

      {/* Core Selling Points */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--background-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', textAlign: 'center' }}>
              <FaBoxOpen size={40} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>🇺🇸 U.S. Inventory</h3>
              <p>Products are stocked in the United States for fast shipping and stable supply.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', textAlign: 'center' }}>
              <FaTruck size={40} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>📦 Fast Delivery</h3>
              <p>Quick fulfillment for distributors and beauty supply stores.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', textAlign: 'center' }}>
              <FaHandshake size={40} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>🤝 Reliable Wholesale Partner</h3>
              <p>Consistent quality, competitive pricing, and long-term supply support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Preview */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Wholesale Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            
            {/* Featured product using the downloaded image */}
            <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '300px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/ema-monomer-new.jpg" alt="EMA Monomer 1 Gallon" style={{ maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>🧪 EMA Monomer</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Available Sizes: 16 oz, 32 oz, 1 Gallon.</p>
                <Link to="/products" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>View Bulk Options</Link>
              </div>
            </div>

            <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '300px', backgroundColor: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <img src="/tool_nippers.jpg" alt="Professional Nail Tools" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Professional Nail Tools</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Cuticle Nippers, Clippers, Pushers, Acrylic Brushes.</p>
                <Link to="/products" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>View Tools Catalog</Link>
              </div>
            </div>

            <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '300px', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <img src="/cons_buffer.jpg" alt="Salon Consumables" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Salon Consumables</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>High-volume Supplies: Files, Buffer Blocks, Separators.</p>
                <Link to="/products" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>View Consumables</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
