import { Link } from 'react-router-dom'
import './Feature.css'

function SecurityPage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">🔒</div>
        <h1>Secure & Reliable</h1>
        <p>Enterprise-grade security for your peace of mind</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Security First Mentality</h2>
            <p>
              Your data and your users' data is precious. We implement security best practices at every level 
              of development, from secure coding practices to encrypted communications. We stay updated with the 
              latest security threats and continuously improve our defenses.
            </p>
          </div>

          <div className="feature-section">
            <h2>Security Measures We Implement</h2>
            <ul className="feature-list">
              <li><strong>SSL/TLS Encryption:</strong> All data encrypted in transit with HTTPS</li>
              <li><strong>Input Validation:</strong> Prevent SQL injection and XSS attacks</li>
              <li><strong>Authentication:</strong> Secure user authentication with hashed passwords</li>
              <li><strong>Authorization:</strong> Role-based access control and permissions</li>
              <li><strong>CSRF Protection:</strong> Cross-site request forgery prevention</li>
              <li><strong>Security Headers:</strong> Additional headers to protect against common attacks</li>
              <li><strong>Regular Audits:</strong> Security testing and penetration testing</li>
              <li><strong>Compliance:</strong> GDPR, CCPA, and other regulatory compliance</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Reliability & Uptime</h2>
            <div className="reliability-grid">
              <div className="reliability-card">
                <h3>99.9% Uptime SLA</h3>
                <p>Guaranteed uptime with redundant systems and failover mechanisms</p>
              </div>
              <div className="reliability-card">
                <h3>Automated Backups</h3>
                <p>Regular automated backups with quick recovery options</p>
              </div>
              <div className="reliability-card">
                <h3>Load Balancing</h3>
                <p>Distribute traffic across multiple servers for reliability</p>
              </div>
              <div className="reliability-card">
                <h3>Monitoring</h3>
                <p>24/7 monitoring with instant alerts for any issues</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Compliance & Standards</h2>
            <p>We adhere to industry standards and regulations:</p>
            <div className="compliance-items">
              <div className="compliance-item">✓ GDPR - General Data Protection Regulation</div>
              <div className="compliance-item">✓ CCPA - California Consumer Privacy Act</div>
              <div className="compliance-item">✓ HIPAA - Health Insurance Portability & Accountability</div>
              <div className="compliance-item">✓ PCI DSS - Payment Card Industry Data Security Standard</div>
              <div className="compliance-item">✓ OWASP Top 10 - Web Application Security</div>
              <div className="compliance-item">✓ ISO 27001 - Information Security Management</div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Security & Reliability Matter</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ User Trust</h3>
                <p>Users feel confident sharing their data with you.</p>
              </div>
              <div className="benefit">
                <h3>✓ Legal Protection</h3>
                <p>Compliance protects you from fines and legal issues.</p>
              </div>
              <div className="benefit">
                <h3>✓ Business Continuity</h3>
                <p>Reliable systems mean consistent revenue and operations.</p>
              </div>
              <div className="benefit">
                <h3>✓ Brand Reputation</h3>
                <p>Prevent breaches that damage your brand reputation.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>Secure Your Website Today</h2>
            <p>Get a comprehensive security assessment and implementation plan</p>
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

export default SecurityPage
