const Wholesale = () => {
  return (
    <div className="fade-in">
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Wholesale Supply for Nail Stores & Distributors</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--highlight-color)', opacity: 0.9 }}>
            Y2 Nail Supply is built for businesses. We provide stable product supply, fast shipping from our U.S. warehouse, and reliable partnerships.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Why Choose Y2 Nail Supply?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>✔️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Ready Stock in the U.S.</strong>
                    <span style={{ color: '#555' }}>No overseas waiting times. Fast order processing guaranteed.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>✔️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Competitive Bulk Pricing</strong>
                    <span style={{ color: '#555' }}>Tiered pricing structures designed to maximize your margins.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>✔️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Consistent Inventory</strong>
                    <span style={{ color: '#555' }}>We maintain deep inventory levels so you never run out of core products.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>✔️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Reliable Long-term Partner</strong>
                    <span style={{ color: '#555' }}>We are dedicated to supporting the growth of beauty supply stores and distributors.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Who We Work With</h3>
              <p style={{ marginBottom: '1.5rem', color: '#444' }}>Our logistics and pricing are optimized for:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', color: '#444', lineHeight: '2' }}>
                <li>Nail Supply Stores</li>
                <li>Regional Distributors</li>
                <li>Salon Chains</li>
                <li>Emerging Nail Brands</li>
              </ul>
              
              <div style={{ padding: '1.5rem', backgroundColor: '#f1f5f9', borderRadius: '4px', marginTop: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Looking for OEM & Private Label?</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  For enterprise brands requiring custom manufacturing, packaging, and private label services, please visit our manufacturing division.
                </p>
                <a href="https://vuelabsupply.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Visit VueLab Supply →</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Wholesale
