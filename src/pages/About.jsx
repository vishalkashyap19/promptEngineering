import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </div>

      <section className="about-content" aria-label="About company">
        <div className="content-container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, we've been passionate about creating beautiful, functional, and responsive web experiences. 
              Our team of talented designers and developers work together to transform ideas into reality, delivering 
              solutions that not only look great but also perform exceptionally well.
            </p>
            <p>
              We believe that great web design is about more than aesthetics—it's about creating meaningful connections 
              between businesses and their customers through intuitive, user-centric design and cutting-edge technology.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To empower businesses of all sizes by delivering innovative, scalable, and user-friendly web solutions 
              that drive growth and create lasting impact. We're committed to excellence, continuous learning, and pushing 
              the boundaries of what's possible in web development.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🎯 Excellence</h3>
                <p>We strive for excellence in every project, paying attention to every detail.</p>
              </div>
              <div className="value-item">
                <h3>🤝 Collaboration</h3>
                <p>We believe in working closely with our clients to understand their needs and goals.</p>
              </div>
              <div className="value-item">
                <h3>🚀 Innovation</h3>
                <p>We embrace new technologies and methodologies to create cutting-edge solutions.</p>
              </div>
              <div className="value-item">
                <h3>💼 Integrity</h3>
                <p>Honesty and transparency guide all our business relationships and decisions.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our diverse team brings together expertise in design, development, project management, and strategy. 
              With combined experience of over 50 years in the industry, we're equipped to tackle any challenge and 
              deliver exceptional results. We're passionate about what we do and love collaborating with clients 
              who share our vision for excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-labelledby="stats-title">
        <h2 id="stats-title">By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years Combined Experience</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
