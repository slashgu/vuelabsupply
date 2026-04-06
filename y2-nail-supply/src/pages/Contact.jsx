import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    inquiryType: 'Request Price List',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4e751ba1-6324-444f-a002-f6932e2df25a",
          from_name: "Y2 Nail Supply Website",
          subject: "New Inquiry from " + formData.companyName,
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ companyName: '', email: '', inquiryType: 'Request Price List', message: '' })
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className="fade-in">
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--background-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Sales</h1>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
              For wholesale pricing, product catalogs, or bulk orders, please contact our team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Direct Inquiry</h3>
              {submitted && (
                <div style={{ padding: '1rem', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Company Name *</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Inquiry Type</label>
                  <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'white' }}>
                    <option value="Request Price List">Request Price List</option>
                    <option value="Bulk Order Inquiry">Bulk Order Inquiry</option>
                    <option value="Distributor Application">Distributor Application</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', resize: 'vertical' }} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>

            <div>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Get in Touch</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                    <div>
                      <strong>Email:</strong>
                      <br />sales@y2nailsupply.com
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📞</span>
                    <div>
                      <strong>Phone:</strong>
                      <br />+1 4259799926
                    </div>
                  </li>
                </ul>
              </div>


            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
