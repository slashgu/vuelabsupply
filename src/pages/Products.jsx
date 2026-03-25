import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | VueLab Supply</title>
        <meta name="description" content="Explore VueLab Supply's professional nail products including EMA Monomer, Cuticle Nippers, Nail Files, and Toe Separators." />
      </Helmet>

      {/* Page Header */}
      <section style={{
        padding: '8rem 0 4rem',
        backgroundColor: 'var(--bg-light)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container animate-fade-in">
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>Product Catalog</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Professional-grade nail supplies for distributors, salons, and private label brands.
          </p>
        </div>
      </section>

      {/* Main Categories Container */}
      <div style={{ padding: '4rem 0' }}>
        
        {/* 1. EMA Monomer */}
        <section className="section" id="ema-monomer">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Category 01</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>EMA Monomer</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)' }}></div>
            </div>
            
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <p className="text-lead" style={{ marginBottom: '2rem' }}>
                  Professional-grade EMA monomer formulated for maximum adhesion, smoothness, and flexibility. Reduced odor and non-yellowing formula for optimal salon performance.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Available Sizes:</h4>
                  <ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', listStyle: 'none' }}>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>8 oz</li>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>16 oz</li>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>32 oz</li>
                    <li style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', color: 'white', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: 500 }}>1 Gallon (Bulk)</li>
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-outline">Request Bulk Pricing</Link>
              </div>
              <div style={{ 
                aspectRatio: '16/9', 
                backgroundColor: 'white', 
                borderRadius: '12px',
                backgroundImage: 'url("/ema-16oz.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}></div>
            </div>
          </div>
        </section>

        {/* 2. Cuticle Nippers */}
        <section className="section section-bg" id="nippers">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Category 02</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Cuticle Nippers</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)' }}></div>
            </div>

            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div style={{ 
                aspectRatio: '16/9', 
                backgroundColor: 'white', 
                borderRadius: '12px',
                backgroundImage: 'url("/cuticle-nippers.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}></div>
              <div>
                <p className="text-lead" style={{ marginBottom: '2rem' }}>
                  High-quality stainless steel cuticle nippers designed for precise trimming. Ergonomic grip suitable for long salon hours.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Available Options (<span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>12 jaw / 14 jaw / 16 jaw</span>):</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: 'white' }}>
                      <h5 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Single Spring</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Classic tension, ideal for standard professional use.</p>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: 'white' }}>
                      <h5 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Double Spring</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Smoother friction and superior tension control.</p>
                    </div>
                  </div>
                </div>
                <Link to="/oem" className="btn btn-primary" style={{ display: 'inline-flex' }}>Inquire for OEM/Private Label</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Nail Files */}
        <section className="section" id="files">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Category 03</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Professional Nail Files</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)' }}></div>
            </div>

            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <p className="text-lead" style={{ marginBottom: '2rem' }}>
                  100/180 grit half-moon files designed for efficiency and durability. Perfect for salon use and custom branding.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', listStyle: 'none' }}>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>100/180 Grit</li>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>Custom Printing Available</li>
                  </ul>
                </div>
                <Link to="/oem" className="btn btn-primary">Custom Branding Options</Link>
              </div>
              <div style={{ 
                aspectRatio: '16/9', 
                backgroundColor: 'white', 
                borderRadius: '12px',
                backgroundImage: 'url("/nail-files.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}></div>
            </div>
          </div>
        </section>

        {/* 4. Toe Separators */}
        <section className="section section-bg" id="separators">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Category 04</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Toe Separators</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)' }}></div>
            </div>

            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div style={{ 
                aspectRatio: '16/9', 
                backgroundColor: 'white', 
                borderRadius: '12px',
                backgroundImage: 'url("/toe-separators.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}></div>
              <div>
                <p className="text-lead" style={{ marginBottom: '2rem' }}>
                  Vibrant, high-density EVA foam toe separators designed for comfortable pedicure services and bulk supply.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', listStyle: 'none' }}>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>High-Density EVA</li>
                    <li style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 500 }}>Multiple Colors</li>
                  </ul>
                </div>
                <Link to="/oem" className="btn btn-primary" style={{ display: 'inline-flex' }}>Request Bulk Quote</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Products
