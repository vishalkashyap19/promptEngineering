import { Link } from 'react-router-dom'
import './Feature.css'

function ResponsiveLayoutPage() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="feature-icon-large">📱</div>
        <h1>Responsive Layout</h1>
        <p>Seamless experience across all devices and screen sizes</p>
      </div>

      <section className="feature-content">
        <div className="content-container">
          <div className="feature-section">
            <h2>Mobile-First Approach</h2>
            <p>
              In today's world, mobile devices account for the majority of web traffic. We design with mobile first, 
              ensuring your website provides an excellent experience on phones, tablets, and desktops. No compromises, 
              no exceptions.
            </p>
          </div>

          <div className="feature-section">
            <h2>Device Compatibility</h2>
            <div className="devices-grid">
              <div className="device-card">
                <div className="device-icon">📱</div>
                <h3>Smartphones</h3>
                <p>Perfect display on phones from 320px to 480px width</p>
              </div>
              <div className="device-card">
                <div className="device-icon">📲</div>
                <h3>Tablets</h3>
                <p>Optimized layouts for tablets from 768px to 1024px</p>
              </div>
              <div className="device-card">
                <div className="device-icon">🖥️</div>
                <h3>Desktops</h3>
                <p>Beautiful designs for large screens 1200px and above</p>
              </div>
              <div className="device-card">
                <div className="device-icon">⌚</div>
                <h3>Wearables</h3>
                <p>Future-ready design that works on smartwatches and emerging devices</p>
              </div>
            </div>
          </div>

          <div className="feature-section">
            <h2>What Makes Our Responsive Design Special</h2>
            <ul className="feature-list">
              <li><strong>Fluid Layouts:</strong> Flexible grids that adapt to any screen size</li>
              <li><strong>Flexible Images:</strong> Images that scale properly without quality loss</li>
              <li><strong>Media Queries:</strong> CSS breakpoints optimized for different devices</li>
              <li><strong>Touch-Friendly:</strong> Large touch targets for mobile users</li>
              <li><strong>Performance:</strong> Fast loading on all connections and devices</li>
              <li><strong>Navigation:</strong> Easy-to-use menus that adapt to screen size</li>
            </ul>
          </div>

          <div className="feature-section">
            <h2>Testing Across Devices</h2>
            <p>
              We thoroughly test our responsive designs on:
            </p>
            <div className="testing-items">
              <div className="testing-item">✓ Real devices (phones, tablets, laptops)</div>
              <div className="testing-item">✓ Browser simulators and dev tools</div>
              <div className="testing-item">✓ Various screen orientations (portrait & landscape)</div>
              <div className="testing-item">✓ Different network speeds</div>
              <div className="testing-item">✓ Multiple browsers and OS combinations</div>
            </div>
          </div>

          <div className="feature-section">
            <h2>Why Responsive Design Matters</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <h3>✓ Reach More Users</h3>
                <p>Serve all users regardless of their device of choice.</p>
              </div>
              <div className="benefit">
                <h3>✓ Better SEO</h3>
                <p>Google favors responsive sites in search rankings.</p>
              </div>
              <div className="benefit">
                <h3>✓ Lower Costs</h3>
                <p>One site for all devices instead of separate versions.</p>
              </div>
              <div className="benefit">
                <h3>✓ Future-Proof</h3>
                <p>Works on devices that don't even exist yet.</p>
              </div>
            </div>
          </div>

          <div className="cta-feature">
            <h2>Get a Responsive Website Today</h2>
            <p>Reach your audience on any device with a beautifully responsive design</p>
            <div className="feature-page-buttons">
              <Link to="/contact" className="cta-button">Enquiry</Link>
              <Link to="/pricing" className="cta-button cta-button-secondary">View Pricing</Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResponsiveLayoutPage
