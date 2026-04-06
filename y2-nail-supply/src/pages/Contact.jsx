const Contact = () => {
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
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Company Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Inquiry Type</label>
                  <select style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'white' }}>
                    <option>Request Price List</option>
                    <option>Bulk Order Inquiry</option>
                    <option>Distributor Application</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                  <textarea rows="4" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', resize: 'vertical' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
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

              <div style={{ padding: '2rem', backgroundColor: '#eef4ed', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Business Hours</h4>
                <p style={{ color: '#444' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                  Weekends: Closed
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
