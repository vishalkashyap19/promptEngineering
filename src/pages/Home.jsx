import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const features = [
    {
      id: 1,
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern and clean design that captivates your audience and creates lasting impressions.',
      path: '/feature/design'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Responsive Layout',
      description: 'Works seamlessly on all devices - mobile, tablet, and desktop with perfect alignment.',
      path: '/feature/responsive'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized for speed and user experience with minimal load times and smooth interactions.',
      path: '/feature/performance'
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and modern technology stack for reliability.',
      path: '/feature/security'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Scalable Solution',
      description: 'Grows with your business needs with flexible architecture and future-proof design.',
      path: '/feature/scalability'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Innovation First',
      description: 'Always using the latest technologies and best practices in web development.',
      path: '/feature/innovation'
    }
  ]

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
            {features.map((feature) => (
              <div key={feature.id} className="feature-card-link">
                <Link to={feature.path} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="feature-cta">Learn More →</span>
                </Link>
                <div className="feature-card-buttons">
                  <Link to="/contact" className="btn btn-enquiry">Enquiry</Link>
                  <Link to="/pricing" className="btn btn-pricing">Pricing</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-content">
          <h2 id="cta-title">Ready to Get Started?</h2>
          <p>Contact us today to discuss your project and how we can help bring your vision to life.</p>
          <a href="/contact" className="cta-button cta-button-large">Contact Us Now</a>
        </div>
      </section>
    </div>
  )
}

export default Home
