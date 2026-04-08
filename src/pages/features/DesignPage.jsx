import './Feature.css'

function DesignPage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">🎨</div>
        <h1>Beautiful Design</h1>
        <p>Crafting stunning and intuitive user experiences</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Our Design Philosophy</h2>
            <p>
              We believe that great design is more than just aesthetics. It's about creating meaningful 
              connections between your brand and your users. Every pixel, every color, and every interaction 
              is carefully crafted to deliver an exceptional user experience.
            </p>
          </div>

          <div className="feature-section">
            <h2>What We Focus On</h2>
            <ul className="feature-list">
              <li><strong>Visual Hierarchy:</strong> Clear organization of information for easy navigation</li>
              <li><strong>Color Theory:</strong> Strategic use of colors to guide user attention and emotions</li>
              <li><strong>Typography:</strong> Elegant font choices that enhance readability and brand identity</li>
              <li><strong>Whitespace:</strong> Proper spacing that creates breathing room and improves clarity</li>
              <li><strong>Consistency:</strong> Unified design language across all pages and components</li>
              <li><strong>Accessibility:</strong> Designs that work for everyone, regardless of ability</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Our Design Process</h2>
            <div className="process-steps">
              <div className="step">
                <span className="step-icon">1️⃣</span>
                <h3>Research</h3>
                <p>We study your target audience and competitors to understand design trends and user preferences.</p>
              </div>
              <div className="step">
                <span className="step-icon">2️⃣</span>
                <h3>Wireframing</h3>
                <p>Creating low-fidelity layouts to plan the structure and flow of your application.</p>
              </div>
              <div className="step">
                <span className="step-icon">3️⃣</span>
                <h3>Mockups</h3>
                <p>Developing high-fidelity visual designs with your brand colors, typography, and imagery.</p>
              </div>
              <div className="step">
                <span className="step-icon">4️⃣</span>
                <h3>Prototyping</h3>
                <p>Building interactive prototypes to test user interactions and gather feedback.</p>
              </div>
              <div className="step">
                <span className="step-icon">5️⃣</span>
                <h3>Refinement</h3>
                <p>Iterating based on feedback and testing to perfect every detail.</p>
              </div>
              <div className="step">
                <span className="step-icon">6️⃣</span>
                <h3>Handoff</h3>
                <p>Providing developers with detailed specifications and assets for implementation.</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Beautiful Design Matters</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ User Engagement</h3>
                <p>Beautiful designs capture attention and encourage user interaction and exploration.</p>
              </div>
              <div className="benefit">
                <h3>✓ Brand Trust</h3>
                <p>Professional design builds credibility and confidence in your brand.</p>
              </div>
              <div className="benefit">
                <h3>✓ Higher Conversion</h3>
                <p>Well-designed interfaces guide users toward desired actions, increasing conversions.</p>
              </div>
              <div className="benefit">
                <h3>✓ Reduced Support</h3>
                <p>Intuitive design reduces user confusion and support costs.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>Ready to Transform Your Design?</h2>
            <p>Let's create a beautiful, user-centered design that elevates your brand</p>
            <a href="/contact" className="cta-button">Start Your Design Project</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignPage
