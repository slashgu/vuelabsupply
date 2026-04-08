import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="fade-in">
      <section style={{ backgroundColor: 'var(--background-bg)', padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Wholesale Product Catalog</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Browse our core categories. We supply ready-stock items in bulk packaging for distributors and nail stores.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          {/* EMA Monomer */}
          <div className="flex-row-mobile-stack" style={{ marginBottom: '5rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div className="flex-child-card" style={{ flex: '1 1 400px', backgroundColor: 'var(--background-bg)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
               <img src="/ema-monomer-new.jpg" alt="EMA Monomer 1 Gallon" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Category 01</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>EMA Monomer Liquid</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#444' }}>
                Professional-grade EMA liquid available in bulk packaging. Formulated for excellent adhesion, non-yellowing, and superior clarity.
              </p>
              <h4 style={{ marginBottom: '0.5rem' }}>Available Sizes:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• 16 oz (Case of 24)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• 32 oz (Case of 12)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• 1 Gallon (Case of 4)</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Bulk Quote</Link>
            </div>
          </div>

          {/* Nail Tools */}
          <div className="flex-row-mobile-stack" style={{ marginBottom: '5rem', display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center' }}>
            <div className="flex-child-card" style={{ flex: '1 1 400px' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Category 02</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>Professional Nail Tools</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#444' }}>
                Durable, precision tools designed for high-volume nail salons and distribution via supply stores.
              </p>
              <h4 style={{ marginBottom: '0.5rem' }}>Products Included:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Stainless Steel Cuticle Nippers (Various Jaws)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Nail Clippers (Straight & Curved edge)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Cuticle Pushers & Scrapers</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Acrylic Nail Brushes (Kolinsky Hair, Sizes 8-16)</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">View Full Tool List</Link>
            </div>
            <div style={{ flex: '1 1 400px', backgroundColor: 'var(--background-bg)', padding: '1rem', borderRadius: '8px', minHeight: '400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
              <img src="/tool_nippers.jpg" alt="Nippers" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', gridColumn: '1 / span 2' }} />
              <img src="/tool_clippers.jpg" alt="Clippers" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
              <img src="/tool_pusher.jpg" alt="Cuticle Pusher" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Consumables */}
          <div className="flex-row-mobile-stack" style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div className="flex-child-card" style={{ flex: '1 1 400px', backgroundColor: 'var(--background-bg)', padding: '1rem', borderRadius: '8px', minHeight: '400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
              <img src="/cons_buffer.jpg" alt="Nail Buffer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', gridColumn: '1 / span 2' }} />
              <img src="/cons_files.jpg" alt="Nail Files" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
              <img src="/cons_separators.jpg" alt="Toe Separators" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Category 03</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>Salon Consumables</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#444' }}>
                High-volume consumables essential for daily salon operations. Available in pallets or master cases.
              </p>
              <h4 style={{ marginBottom: '0.5rem' }}>Products Included:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Zebra & Black Nail Files (100/100, 100/180)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Sanding Bands & Buffer Blocks</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Foam Toe Separators</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>• Lint-free Wipes</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Catalog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
