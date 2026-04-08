import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({})

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    return newErrors
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Handle blur for validation
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate single field
    const newErrors = validateForm()
    if (newErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: newErrors[name]
      }))
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - show success message
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setTouched({})

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } else {
      // Form has errors - mark all fields as touched
      setErrors(newErrors)
      setTouched({
        name: true,
        email: true,
        message: true
      })
    }
  }

  const getFieldClass = (fieldName) => {
    if (!touched[fieldName]) return ''
    return errors[fieldName] ? 'field-error' : 'field-valid'
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us - we'd love to hear from you</p>
      </div>

      <section className="contact-section" aria-label="Contact information and form">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have a question or want to discuss your project? We're here to help!</p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Location</h3>
                <p>123 Business Street<br />New York, NY 10001<br />United States</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p><a href="tel:+12345678900">+1 (234) 567-8900</a></p>
                <p>Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p><a href="mailto:hello@example.com">hello@example.com</a></p>
                <p>We'll respond within 24 hours</p>
              </div>

              <div className="info-card">
                <div className="info-icon">💬</div>
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#twitter" title="Follow us on Twitter" aria-label="Twitter">Twitter</a>
                  <a href="#linkedin" title="Connect on LinkedIn" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#facebook" title="Like us on Facebook" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>

            {submitted && (
              <div className="success-message" role="alert">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${getFieldClass('name')}`}>
                <label htmlFor="name">
                  Name <span className="required" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your full name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="error-message" role="alert">{errors.name}</span>
                )}
              </div>

              <div className={`form-group ${getFieldClass('email')}`}>
                <label htmlFor="email">
                  Email <span className="required" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your.email@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="error-message" role="alert">{errors.email}</span>
                )}
              </div>

              <div className={`form-group ${getFieldClass('message')}`}>
                <label htmlFor="message">
                  Message <span className="required" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project or inquiry..."
                  rows="6"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="error-message" role="alert">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
