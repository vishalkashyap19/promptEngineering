import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create beautiful and intuitive user interfaces that delight your customers and provide seamless user experiences.'
    },
    {
      id: 2,
      icon: '⚛️',
      title: 'Web Development',
      description: 'Build robust and scalable web applications using modern technologies and best practices in the industry.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Develop native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your online visibility with comprehensive SEO strategies and optimization techniques.'
    },
    {
      id: 5,
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Design and implement scalable backend systems that power your applications with reliability and performance.'
    },
    {
      id: 6,
      icon: '💻',
      title: 'Full Stack Solutions',
      description: 'End-to-end web solutions combining frontend elegance with robust backend infrastructure.'
    }
  ]

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for all your web development needs</p>
      </div>

      <section className="services-section" aria-label="Services offered">
        <div className="services-container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              We provide a full range of web development and design services tailored to meet the unique needs 
              of your business. Our experienced team is dedicated to delivering high-quality solutions that exceed expectations.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/contact" className="service-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <h2 id="process-title">Our Process</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>We thoroughly understand your requirements, goals, and target audience to create the perfect solution.</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Our designers create beautiful and intuitive designs that align with your brand and user needs.</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>We build your solution using modern technologies and best practices ensuring quality and performance.</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Launch & Support</h3>
            <p>We deploy your solution and provide ongoing support and maintenance for continued success.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action" aria-label="Call to action">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how our services can help transform your business</p>
        <a href="/contact" className="cta-button">Contact Us Today</a>
      </section>
    </div>
  )
}

export default Services
