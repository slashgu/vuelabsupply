import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShieldCheck, Target, Globe } from 'lucide-react'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | VueLab Supply</title>
        <meta name="description" content="VueLab Supply is a professional nail product supply and OEM/ODM partner serving distributors, beauty supply businesses, and private label brands." />
      </Helmet>

      {/* Page Header */}
      <section style={{
        padding: '8rem 0 4rem',
        backgroundColor: 'var(--primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container animate-fade-in">
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: '1rem' }}>About VueLab Supply</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Your premium manufacturing partner for professional nail products.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Our Mission & Focus</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                <strong>VueLab Supply</strong> is a professional nail product supply and OEM/ODM partner serving distributors, beauty supply businesses, and private label brands. 
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                Our mission is to provide scalable, reliable, and market-ready nail products for customers seeking long-term supply chain support.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                We focus on practical product categories with strong demand in the professional nail industry, including EMA monomer, metal tools, and future expansion items for complete product line development.
              </p>
              <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ 
                aspectRatio: '4/5', 
                backgroundColor: 'var(--bg-light)', 
                borderRadius: '16px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '250px'
              }}>
                <Globe color="var(--secondary)" size={32} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Global Reach</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Supporting nail brands worldwide with reliable logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="heading-lg">Why We Stand Out</h2>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <ShieldCheck color="var(--secondary)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Reliable Quality</h3>
              <p style={{ color: 'var(--text-muted)' }}>Consistent manufacturing standards ensuring professional-grade products every time.</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Target color="var(--secondary)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Market-Ready Focus</h3>
              <p style={{ color: 'var(--text-muted)' }}>We concentrate on high-demand categories to help you scale your business faster.</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Globe color="var(--secondary)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Long-Term Support</h3>
              <p style={{ color: 'var(--text-muted)' }}>Dedicated to building lasting partnerships through scalable supply chain solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
