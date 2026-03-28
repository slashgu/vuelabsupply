import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <>
      <Helmet>
        <title>Contact Us | VueLab Supply</title>
        <meta name="description" content="Contact VueLab Supply for catalogs, quotations, OEM opportunities, or distribution inquiries." />
      </Helmet>

      {/* Header */}
      <section style={{
        padding: '8rem 0 4rem',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <div className="container animate-fade-in">
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            For catalogs, quotations, OEM opportunities, or distribution inquiries, please contact our dedicated team.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            
            {/* Contact Info */}
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Get in Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-light)', borderRadius: '50%' }}>
                    <Phone color="var(--secondary)" size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Call Us</h4>
                    <a href="tel:+85295795572" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '1.125rem' }}>+852 9579 5572</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-light)', borderRadius: '50%' }}>
                    <MapPin color="var(--secondary)" size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Company Location</h4>
                    <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '1.125rem' }}>8th floor, 48-62 Hennessy Road, HongKong</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div style={{ 
                marginTop: '4rem', 
                height: '200px', 
                borderRadius: '16px', 
                background: 'linear-gradient(135deg, var(--primary) 0%, #1e293b 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, transparent 60%)' }}></div>
                <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10, position: 'relative' }}>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>VueLab Supply</h3>
                  <p style={{ color: 'var(--secondary)' }}>Your Reliable Partner</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <div style={{ 
                padding: '3rem 2rem', 
                backgroundColor: 'var(--bg-light)', 
                borderRadius: '16px'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send a Message</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We will connect you with a dedicated account manager immediately.</p>
                
                {submitted && (
                  <div style={{ padding: '1rem', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={20} /> Message sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-input" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" name="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Company / Subject</label>
                    <input type="text" className="form-input" name="subject" value={formData.subject} onChange={handleChange} />
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" name="message" value={formData.message} onChange={handleChange} rows="5" required placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
