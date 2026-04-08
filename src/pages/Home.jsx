import './Home.css'

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Build amazing web experiences with modern design and responsive layouts</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" aria-labelledby="features-title">
        <div className="features-container">
          <h2 id="features-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern and clean design that captivates your audience and creates lasting impressions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Layout</h3>
              <p>Works seamlessly on all devices - mobile, tablet, and desktop with perfect alignment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Optimized for speed and user experience with minimal load times and smooth interactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Built with security best practices and modern technology stack for reliability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Scalable Solution</h3>
              <p>Grows with your business needs with flexible architecture and future-proof design.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovation First</h3>
              <p>Always using the latest technologies and best practices in web development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" aria-labelledby="cta-title">
        <h2 id="cta-title">Ready to Get Started?</h2>
        <p>Contact us today to discuss your project and how we can help bring your vision to life.</p>
        <a href="/contact" className="cta-button cta-button-large">Contact Us Now</a>
      </section>
    </div>
  )
}

export default Home
