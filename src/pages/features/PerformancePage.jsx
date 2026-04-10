import { Link } from 'react-router-dom'
import './Feature.css'

function PerformancePage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">⚡</div>
        <h1>Fast Performance</h1>
        <p>Lightning-fast loading times and smooth interactions</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Speed is Essential</h2>
            <p>
              Studies show that every second of delay in page load time increases bounce rate by 7%. We optimize 
              every aspect of your site to ensure blazing-fast performance. A fast website keeps users engaged and 
              improves your search engine rankings.
            </p>
          </div>

          <div className="feature-section">
            <h2>Our Performance Optimization Techniques</h2>
            <ul className="feature-list">
              <li><strong>Code Splitting:</strong> Load only JavaScript needed for each page</li>
              <li><strong>Image Optimization:</strong> Compressed images with proper formats and responsive sizes</li>
              <li><strong>Lazy Loading:</strong> Defer loading of images and components until needed</li>
              <li><strong>Caching Strategies:</strong> Browser and CDN caching to reduce load times</li>
              <li><strong>Minification:</strong> Remove unnecessary characters from CSS, JS, and HTML</li>
              <li><strong>Content Delivery Network:</strong> Serve content from servers closest to your users</li>
              <li><strong>Compression:</strong> GZIP compression for all text files</li>
              <li><strong>Database Optimization:</strong> Efficient queries and indexing</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Performance Metrics We Track</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">📊</div>
                <h3>Lighthouse Score</h3>
                <p>Google's comprehensive performance audit score (target: 90+)</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">⏱️</div>
                <h3>Page Load Time</h3>
                <p>Total time for page to load (target: under 3 seconds)</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🎯</div>
                <h3>First Contentful Paint</h3>
                <p>Time until first pixel is rendered (target: under 1.8s)</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🚀</div>
                <h3>Time to Interactive</h3>
                <p>When page becomes fully interactive (target: under 3.8s)</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Performance by the Numbers</h2>
            <div className="stats-feature">
              <div className="stat-feature-item">
                <h3>7%</h3>
                <p>Bounce rate increase per second of delay</p>
              </div>
              <div className="stat-feature-item">
                <h3>2x</h3>
                <p>Faster load = Double engagement potential</p>
              </div>
              <div className="stat-feature-item">
                <h3>40%</h3>
                <p>Faster sites convert 40% more visitors</p>
              </div>
              <div className="stat-feature-item">
                <h3>+30%</h3>
                <p>Google ranking boost for fast sites</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Fast Performance Matters</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ Better User Experience</h3>
                <p>Users stay engaged with fast, responsive sites.</p>
              </div>
              <div className="benefit">
                <h3>✓ Higher Conversions</h3>
                <p>Fast sites convert more visitors into customers.</p>
              </div>
              <div className="benefit">
                <h3>✓ Improved SEO</h3>
                <p>Speed is a major factor in Google's ranking algorithm.</p>
              </div>
              <div className="benefit">
                <h3>✓ Reduced Costs</h3>
                <p>Optimized sites use less bandwidth and server resources.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>Let's Speed Up Your Website</h2>
            <p>Get a performance audit and optimization plan for your site</p>
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

export default PerformancePage
