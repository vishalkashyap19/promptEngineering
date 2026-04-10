import './Pricing.css'

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 5 pages',
        'Basic SEO optimization',
        'Mobile responsive design',
        'SSL certificate included',
        'Basic analytics',
        'Email support',
        'Monthly updates'
      ],
      cta: 'Get Started',
      color: 'starter'
    },
    {
      id: 2,
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 pages',
        'Advanced SEO optimization',
        'Mobile & tablet responsive',
        'SSL certificate + CDN',
        'Advanced analytics',
        'Priority email & chat support',
        'Weekly updates',
        'E-commerce integration',
        'Payment gateway setup'
      ],
      cta: 'Choose Plan',
      color: 'professional',
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale projects and enterprises',
      features: [
        'Unlimited pages',
        'Custom SEO strategy',
        'Multi-device optimization',
        'SSL + CDN + DDoS protection',
        'Custom analytics',
        '24/7 dedicated support',
        'Daily updates & maintenance',
        'Full e-commerce suite',
        'API integration',
        'Custom features',
        'Performance optimization',
        'Security audits'
      ],
      cta: 'Contact Sales',
      color: 'enterprise'
    }
  ]

  return (
    <div className="pricing-page">
      <div className="page-header">
        <h1>Our Pricing Plans</h1>
        <p>Choose the perfect plan for your business needs</p>
      </div>

      <section className="pricing-section" aria-label="Pricing plans">
        <div className="pricing-container">
          <p className="pricing-intro">
            We offer flexible pricing plans to suit businesses of all sizes. All plans include free setup and consultation.
          </p>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.color} ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <h2>{plan.name}</h2>
                <div className="price">
                  {plan.price}
                  {plan.period !== 'pricing' && <span className="period">{plan.period}</span>}
                </div>
                <p className="description">{plan.description}</p>

                <a href="/contact" className="pricing-button">
                  {plan.cta}
                </a>

                <div className="features-list">
                  <h3>Includes:</h3>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Can I upgrade or downgrade my plan?</h3>
                <p>Yes! You can change your plan anytime. We'll prorate the charges for the current month.</p>
              </div>
              <div className="faq-item">
                <h3>Is there a setup fee?</h3>
                <p>No setup fees! We provide free consultation and setup for all plans.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer discounts for annual billing?</h3>
                <p>Yes! Get 20% off when you pay annually instead of monthly.</p>
              </div>
              <div className="faq-item">
                <h3>What about custom requirements?</h3>
                <p>We offer custom packages for unique requirements. Contact our sales team for details.</p>
              </div>
              <div className="faq-item">
                <h3>Is there a money-back guarantee?</h3>
                <p>Yes! 30-day money-back guarantee if you're not satisfied with our service.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle maintenance and updates?</h3>
                <p>All plans include regular updates and maintenance based on your plan tier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-feature" aria-label="Ready to get started">
        <h2>Ready to Get Started?</h2>
        <p>Choose a plan today and let's build something amazing together</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  )
}

export default Pricing
