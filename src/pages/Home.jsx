import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Factory, Package, Star, TrendingUp } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>VueLab Supply | OEM & Private Label Nail Manufacturer</title>
        <meta name="description" content="VueLab Supply provides OEM/ODM and private label solutions for professional nail products, including EMA monomer, cuticle nippers, nail clippers, acrylic nail brushes, drill bits, and cuticle pushers." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, var(--bg-light) 0%, rgba(197, 160, 89, 0.1) 100%)',
        overflow: 'hidden'
      }}>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              color: 'var(--secondary)',
              fontWeight: '600',
              borderRadius: '50px',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              Trusted Manufacturing Partner
            </span>
            <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              Build Your Nail Brand With <br/>
              <span style={{ color: 'var(--secondary)' }}>VueLab Supply</span>
            </h1>
            <p className="text-lead" style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: 'var(--text-main)', opacity: 0.9 }}>
              We provide OEM/ODM and private label solutions for professional nail products, including EMA monomer, cuticle nippers, nail files, and toe separators.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link to="/products" className="btn btn-outline">
                View Products
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          right: '-5%',
          top: '20%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }} />
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="heading-lg">Full-Service Nail Supply & <br/>Manufacturing Solutions</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary)', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '16px' }}>
              <div style={{ 
                aspectRatio: '4/3', 
                backgroundColor: '#e2e8f0', 
                borderRadius: '8px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
            <div>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                VueLab Supply specializes in professional nail products for distributors, beauty supply stores, and private label brands.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                We offer reliable manufacturing support, flexible packaging options, and scalable supply solutions for growing nail businesses.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><CheckCircle2 color="var(--secondary)" size={20}/> Scalable Production</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><CheckCircle2 color="var(--secondary)" size={20}/> Premium Quality Assurance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><CheckCircle2 color="var(--secondary)" size={20}/> Global Distribution Support</li>
              </ul>
              <Link to="/about" className="btn btn-outline" style={{ display: 'inline-flex' }}>Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="heading-lg">Our Product Categories</h2>
            <p className="text-lead" style={{ margin: '0 auto' }}>Professional grade supplies ready for your brand.</p>
          </div>
          
          <div className="grid grid-3">
            {/* EMA Monomer */}
            <div className="card">
              <div className="card-img-wrap" style={{ backgroundImage: 'url("/ema-gallon.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#fff' }}>
              </div>
              <div className="card-content">
                <h3 className="card-title">EMA Monomer</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>Professional EMA monomer available in multiple sizes.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>8 oz</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>16 oz</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>32 oz</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>1 Gallon</span>
                </div>
                <Link to="/products" style={{ color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>View Details <ArrowRight size={16} /></Link>
              </div>
            </div>

            {/* Metal Tools (Nippers/Clippers) */}
            <div className="card">
              <div className="card-img-wrap" style={{ backgroundImage: 'url("/cuticle-nippers.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#fff' }}>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cuticle Nippers</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>High-quality stainless steel tools designed for professionals.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>Single Spring</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>Double Spring</span>
                </div>
                <Link to="/products" style={{ color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>View Details <ArrowRight size={16} /></Link>
              </div>
            </div>

            {/* Toe Separators */}
            <div className="card">
              <div className="card-img-wrap" style={{ backgroundImage: 'url("/toe-separators.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#fff' }}>
              </div>
              <div className="card-content">
                <h3 className="card-title">Toe Separators</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>Colorful EVA foam separators for professional pedicure services.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>EVA Foam</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>Multiple Colors</span>
                </div>
                <Link to="/products" style={{ color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>View Details <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-outline" style={{ display: 'inline-flex' }}>Browse All Products</Link>
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="heading-lg">Private Label Solutions<br/>for Nail Brands</h2>
              <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
                We help customers build and expand their own nail product lines with flexible OEM/ODM services tailored to your specific market needs.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: '8px' }}>
                    <Factory color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Bulk Production</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Scalable manufacturing</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: '8px' }}>
                    <Package color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Custom Label</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Your brand identity</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: '8px' }}>
                    <Star color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Product Sourcing</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Expert procurement</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: '8px' }}>
                    <TrendingUp color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Brand Development</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Strategic growth</p>
                  </div>
                </div>

              </div>

              <Link to="/oem" className="btn btn-primary" style={{ display: 'inline-flex' }}>Explore OEM Services</Link>
            </div>
            
            {/* Visual block */}
            <div style={{ position: 'relative', padding: '2rem' }}>
              <div style={{ 
                aspectRatio: '1/1', 
                backgroundColor: 'var(--primary)',
                borderRadius: '50%',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '60%',
                opacity: 0.05,
                zIndex: -1
              }}></div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '3rem', 
                borderRadius: '16px', 
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why VueLab Supply?</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <CheckCircle2 color="var(--secondary)" size={20}/> Professional nail product supply
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <CheckCircle2 color="var(--secondary)" size={20}/> Flexible bulk ordering
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <CheckCircle2 color="var(--secondary)" size={20}/> Distributor-focused solutions
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 color="var(--secondary)" size={20}/> International business support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Looking for a manufacturing partner<br/>for your nail brand?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Contact us for product catalogs, pricing, and private label opportunities.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-accent">Request Catalog</Link>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
