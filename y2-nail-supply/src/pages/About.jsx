const About = () => {
  return (
    <div className="fade-in">
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>About Y2 Nail Supply</h1>
          
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Y2 Nail Supply</strong> is a U.S.-based wholesale distributor specializing in professional nail products. 
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We focus heavily on providing fast, reliable, and scalable supply solutions for nail supply stores and distributors across the United States. 
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Unlike overseas suppliers where you navigate long shipping times, unpredictable stock, and complex communication, we hold our inventory locally. With substantial U.S. ready-stock and decades of industry experience, we help our partners maintain stable inventory levels and grow their business with peace of mind.
            </p>
            
            <div style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem', marginTop: '3rem', backgroundColor: 'var(--background-bg)', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h3>
              <p style={{ mragin: 0, fontSize: '1.1rem', fontStyle: 'italic' }}>
                "To accelerate the success of U.S. nail businesses by providing the most reliable wholesale supply and locally-stocked inventory in the industry."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
