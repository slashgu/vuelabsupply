import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle2, Factory, Package, Globe } from 'lucide-react'

const OEM = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    productInterest: '',
    estimatedQuantity: '',
    privateLabelNeeded: 'Yes',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({companyName: '', contactPerson: '', email: '', productInterest: '', estimatedQuantity: '', privateLabelNeeded: 'Yes', message: ''})
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Helmet>
        <title>OEM & Private Label | VueLab Supply</title>
        <meta name="description" content="We support nail brands and distributors with OEM and private label services for selected professional nail products." />
      </Helmet>

      {/* Hero Header */}
      <section style={{
        padding: '8rem 0 4rem',
        backgroundColor: 'var(--bg-light)',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container animate-fade-in">
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>OEM & Private Label</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            We support nail brands and distributors with comprehensive OEM and private label services for professional nail products.
          </p>
        </div>
      </section>

      {/* Content & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            
            {/* Left Side: Information */}
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Your Brand, Our Expertise</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Whether you are an established distributor looking to optimize your supply chain, or a growing nail brand seeking high-quality manufacturing, VueLab Supply is your trusted partner.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                    <Package color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Product Selection & Customization</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Choose from our catalog of proven seller items like EMA Monomer and Metal Tools, customized with your branding.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                    <Factory color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Bulk Order & Packaging</h4>
                    <p style={{ color: 'var(--text-muted)' }}>We offer flexible bulk manufacturing and professional packaging solutions designed for retail and wholesale environments.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                    <Globe color="var(--secondary)" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Export & Distribution Support</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Reliable international logistics handling to ensure your supply chain remains uninterrupted and cost-effective.</p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '2rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>Ready to Start?</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--secondary)" size={20}/> Dedicated Account Manager</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--secondary)" size={20}/> Sample Processing Available</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 color="var(--secondary)" size={20}/> Competitive Factory Pricing</li>
                </ul>
              </div>
            </div>

            {/* Right Side: Inquiry Form */}
            <div>
              <div style={{ 
                padding: '3rem 2rem', 
                backgroundColor: 'white', 
                borderRadius: '16px', 
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>OEM Inquiry Form</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Fill out the details below and our team will get back to you within 24 hours.</p>
                
                {submitted && (
                  <div style={{ padding: '1rem', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={20} /> Thank you! Your inquiry has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Company Name *</label>
                      <input type="text" className="form-input" name="companyName" value={formData.companyName} onChange={handleChange} required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Contact Person *</label>
                      <input type="text" className="form-input" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" name="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Product Interest</label>
                    <select className="form-input" name="productInterest" value={formData.productInterest} onChange={handleChange} style={{ appearance: 'none' }}>
                      <option value="">Select a Category</option>
                      <option value="EMA Monomer">EMA Monomer</option>
                      <option value="Cuticle Nippers">Cuticle Nippers</option>
                      <option value="Nail Clippers">Nail Clippers</option>
                      <option value="Other / Combo">Other / Multiple Items</option>
                    </select>
                  </div>

                  <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Estimated Order Qty</label>
                      <input type="text" className="form-input" name="estimatedQuantity" value={formData.estimatedQuantity} onChange={handleChange} placeholder="e.g., 5000 units" />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Private Label Needed?</label>
                      <select className="form-input" name="privateLabelNeeded" value={formData.privateLabelNeeded} onChange={handleChange} style={{ appearance: 'none' }}>
                        <option value="Yes">Yes, I need my own branding</option>
                        <option value="No">No, I just need bulk supply</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Additional Message / Details</label>
                    <textarea className="form-textarea" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us more about your brand and requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default OEM
