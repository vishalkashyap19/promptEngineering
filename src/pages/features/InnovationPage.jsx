import './Feature.css'

function InnovationPage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">💡</div>
        <h1>Innovation First</h1>
        <p>Cutting-edge technology and forward-thinking solutions</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Embracing the Future</h2>
            <p>
              Technology evolves rapidly. We stay ahead of the curve by continuously learning and adopting 
              the latest tools, frameworks, and best practices. Our team is passionate about innovation and 
              brings fresh ideas to every project. We don't just follow trends—we help create them.
            </p>
          </div>

          <div className="feature-section">
            <h2>Technologies We're Excited About</h2>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>🚀 Frontend</h3>
                <ul>
                  <li>React, Vue, Next.js, Svelte</li>
                  <li>TypeScript for type safety</li>
                  <li>Web Components and PWAs</li>
                  <li>Modern CSS (Grid, Flexbox, CSS-in-JS)</li>
                </ul>
              </div>
              <div className="tech-category">
                <h3>⚙️ Backend</h3>
                <ul>
                  <li>Node.js, Python, Go, Rust</li>
                  <li>Cloud platforms (AWS, Google Cloud, Azure)</li>
                  <li>Serverless architecture</li>
                  <li>Microservices and APIs</li>
                </ul>
              </div>
              <div className="tech-category">
                <h3>🤖 AI & ML</h3>
                <ul>
                  <li>Machine Learning integration</li>
                  <li>AI-powered features</li>
                  <li>Data analytics and insights</li>
                  <li>Automation solutions</li>
                </ul>
              </div>
              <div className="tech-category">
                <h3>📊 Data</h3>
                <ul>
                  <li>SQL and NoSQL databases</li>
                  <li>Data warehousing</li>
                  <li>Real-time analytics</li>
                  <li>Big data processing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Our Innovation Process</h2>
            <ul className="feature-list">
              <li><strong>Research:</strong> We constantly research emerging technologies and trends</li>
              <li><strong>Experimentation:</strong> We test and prototype new tools and frameworks</li>
              <li><strong>Training:</strong> Our team regularly participates in courses and conferences</li>
              <li><strong>Knowledge Sharing:</strong> We share insights through blogs, talks, and demos</li>
              <li><strong>Best Practices:</strong> We implement and refine industry best practices</li>
              <li><strong>Optimization:</strong> We continuously improve and refactor our solutions</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Recent Innovation Highlights</h2>
            <div className="innovations-grid">
              <div className="innovation-card">
                <div className="innovation-icon">🤖</div>
                <h3>AI Integration</h3>
                <p>Adding intelligent features with machine learning and natural language processing</p>
              </div>
              <div className="innovation-card">
                <div className="innovation-icon">⛓️</div>
                <h3>Blockchain</h3>
                <p>Exploring blockchain for transparency and security in certain applications</p>
              </div>
              <div className="innovation-card">
                <div className="innovation-icon">📱</div>
                <h3>Web3</h3>
                <p>Building decentralized applications and exploring NFT technologies</p>
              </div>
              <div className="innovation-card">
                <div className="innovation-icon">🎮</div>
                <h3>WebXR</h3>
                <p>Creating immersive experiences with AR/VR technologies on the web</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Innovation Matters</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ Competitive Advantage</h3>
                <p>Stay ahead of your competition with cutting-edge solutions.</p>
              </div>
              <div className="benefit">
                <h3>✓ Future-Proof Code</h3>
                <p>Modern technologies are more maintainable and flexible.</p>
              </div>
              <div className="benefit">
                <h3>✓ Better Performance</h3>
                <p>New tools and frameworks often provide better performance.</p>
              </div>
              <div className="benefit">
                <h3>✓ Improved Developer Experience</h3>
                <p>Modern tools make development faster and more enjoyable.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>innovate With Us</h2>
            <p>Let's build something amazing with the latest technologies</p>
            <a href="/contact" className="cta-button">Start Innovating</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InnovationPage
