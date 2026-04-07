import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Create stunning, functional websites that engage your audience and drive conversions. Built with modern frameworks and best practices.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Ready', 'Cross-Browser Compatible']
    },
    {
      id: 2,
      icon: '🔗',
      title: 'Full Stack Development',
      description: 'End-to-end solutions combining frontend excellence with robust backend architecture. We build complete applications from the ground up.',
      features: ['Database Design', 'API Development', 'Integration', 'Scalability']
    },
    {
      id: 3,
      icon: '📱',
      title: 'Responsive Design',
      description: 'Applications that look perfect on every device. From mobile phones to large desktop screens, your app adapts seamlessly.',
      features: ['Mobile First', 'Fluid Layouts', 'Touch Optimization', 'Performance Tuned']
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Increase your online visibility with strategic SEO implementation. We ensure your content reaches the right audience.',
      features: ['Keyword Research', 'Meta Optimization', 'Technical SEO', 'Link Building']
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Security Solutions',
      description: 'Protect your digital assets with enterprise-grade security measures. We implement industry-standard practices to keep your data safe.',
      features: ['Data Encryption', 'Secure APIs', 'Regular Audits', 'Compliance Ready']
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications that keep users engaged. We optimize every aspect to ensure peak performance.',
      features: ['Code Optimization', 'Caching Strategies', 'CDN Integration', 'Load Testing']
    },
    {
      id: 7,
      icon: '🤖',
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence to enhance your applications. Machine learning solutions tailored to your needs.',
      features: ['ML Models', 'Chatbots', 'Predictive Analytics', 'Automation']
    },
    {
      id: 8,
      icon: '🧪',
      title: 'Quality Assurance',
      description: 'Comprehensive testing to ensure your application works flawlessly. We catch bugs before they reach your users.',
      features: ['Unit Testing', 'Integration Testing', 'UAT', 'Performance Testing']
    }
  ];

  return (
    <div className="services">
      {/* Header */}
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive IT solutions tailored to your business needs</p>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="services-intro">
          <h2>What We Offer</h2>
          <p>
            We provide a complete range of IT services designed to help your business succeed in the digital age. 
            Whether you're a startup or an established enterprise, we have solutions for you.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Services */}
      <section className="why-services">
        <h2>Why Choose Our Services?</h2>
        
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-number">01</div>
            <h3>Expert Team</h3>
            <p>Our team consists of seasoned professionals with years of experience across various technologies and industries.</p>
          </div>
          <div className="benefit">
            <div className="benefit-number">02</div>
            <h3>Quality Assurance</h3>
            <p>We follow strict quality standards and best practices to ensure every deliverable meets the highest benchmarks.</p>
          </div>
          <div className="benefit">
            <div className="benefit-number">03</div>
            <h3>Timely Delivery</h3>
            <p>We understand the importance of deadlines and deliver projects on time without compromising on quality.</p>
          </div>
          <div className="benefit">
            <div className="benefit-number">04</div>
            <h3>Ongoing Support</h3>
            <p>Our relationship doesn't end with deployment. We provide continuous support and maintenance for your peace of mind.</p>
          </div>
          <div className="benefit">
            <div className="benefit-number">05</div>
            <h3>Competitive Pricing</h3>
            <p>We offer high-quality services at competitive rates, ensuring excellent value for your investment.</p>
          </div>
          <div className="benefit">
            <div className="benefit-number">06</div>
            <h3>Transparent Process</h3>
            <p>Clear communication and transparency throughout the project lifecycle keeps you informed every step of the way.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how our services can help transform your business.</p>
        <a href="/contact" className="btn btn-primary large">Contact Us Today</a>
      </section>
    </div>
  );
}
