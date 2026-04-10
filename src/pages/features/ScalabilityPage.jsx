import { Link } from 'react-router-dom'
import './Feature.css'

function ScalabilityPage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">🚀</div>
        <h1>Scalable Solution</h1>
        <p>Growing infrastructure that grows with your business</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Built to Grow With You</h2>
            <p>
              Whether you're a startup processing hundreds of requests daily or an enterprise handling millions, 
              our scalable architecture adapts to your needs. We design systems that grow with your business, 
              eliminating the need for costly rebuilds as you expand.
            </p>
          </div>

          <div className="feature-section">
            <h2>Scalability Components</h2>
            <ul className="feature-list">
              <li><strong>Microservices Architecture:</strong> Modular design for easy scaling of individual components</li>
              <li><strong>Cloud Infrastructure:</strong> Elastic cloud services that scale automatically</li>
              <li><strong>Database Optimization:</strong> Efficient queries and proper indexing for large datasets</li>
              <li><strong>Caching Layers:</strong> Redis and memcached for performance at scale</li>
              <li><strong>Message Queues:</strong> Handle high-volume asynchronous operations</li>
              <li><strong>Load Balancing:</strong> Distribute traffic across multiple instances</li>
              <li><strong>CDN Integration:</strong> Serve content globally with minimal latency</li>
              <li><strong>Auto-scaling:</strong> Automatically adjust resources based on demand</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Growth Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">📈</div>
                <h3>Phase 1: Launch</h3>
                <p>Optimized for hundreds of concurrent users with minimal infrastructure</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">📊</div>
                <h3>Phase 2: Growth</h3>
                <p>Scale to thousands of users with load balancing and caching</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">🌐</div>
                <h3>Phase 3: Enterprise</h3>
                <p>Handle millions of requests with distributed systems and multi-region deployment</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Scalability Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">👥</div>
                <h3>Concurrent Users</h3>
                <p>Support from 100s to millions of simultaneous users</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">📞</div>
                <h3>API Requests</h3>
                <p>Handle thousands to millions of API calls per second</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">💾</div>
                <h3>Data Volume</h3>
                <p>Process gigabytes to petabytes of data</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🌍</div>
                <h3>Global Distribution</h3>
                <p>Deploy globally with multi-region support</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Scalability Matters</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ No Rebuilds</h3>
                <p>Avoid costly system rewrites as your business grows.</p>
              </div>
              <div className="benefit">
                <h3>✓ Cost Efficiency</h3>
                <p>Pay for only what you use with auto-scaling infrastructure.</p>
              </div>
              <div className="benefit">
                <h3>✓ Seamless Growth</h3>
                <p>Handle unexpected traffic spikes without downtime.</p>
              </div>
              <div className="benefit">
                <h3>✓ Future Ready</h3>
                <p>Built to support your vision for years to come.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>Plan Your Scalable Future</h2>
            <p>Let's design a system that grows with your ambitions</p>
            <div className="feature-page-buttons">
              <Link to="/contact" className="cta-button">Enquiry</Link>
              <Link to="/pricing" className="cta-button cta-button-secondary">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScalabilityPage
