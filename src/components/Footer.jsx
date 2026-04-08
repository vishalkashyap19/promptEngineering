import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We create beautiful and responsive web experiences that engage users and drive results.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" title="Go to Home page">Home</a></li>
            <li><a href="/about" title="Go to About page">About</a></li>
            <li><a href="/services" title="Go to Services page">Services</a></li>
            <li><a href="/contact" title="Go to Contact page">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} My Website. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
      </div>
    </footer>
  )
}

export default Footer
