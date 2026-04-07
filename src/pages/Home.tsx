import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Krishna Infotech</h1>
          <p className="hero-subtitle">End-to-end IT solutions built with modern technologies</p>
          <p className="hero-description">
            Transforming your vision into reality with cutting-edge web development, full-stack solutions, and innovative tech services.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Full-Stack Development</h3>
            <p>End-to-end solutions built with modern technologies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful interfaces that users love to interact with</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Deployment</h3>
            <p>Quick turnaround without compromising on quality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Collaborative Approach</h3>
            <p>We work closely with you throughout the process</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <h2>How We Work</h2>
        <p className="section-subtitle">A proven methodology that delivers exceptional results every time</p>
        
        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>
            <h3>Discovery</h3>
            <p>We start by understanding your goals, target audience, and project requirements through detailed discussions.</p>
          </div>
          <div className="process-card">
            <div className="process-number">02</div>
            <h3>Planning</h3>
            <p>We create a comprehensive strategy, wireframes, and technical architecture for your project.</p>
          </div>
          <div className="process-card">
            <div className="process-number">03</div>
            <h3>Development</h3>
            <p>Our team builds your solution using cutting-edge technologies and best practices.</p>
          </div>
          <div className="process-card">
            <div className="process-number">04</div>
            <h3>Launch</h3>
            <p>We deploy your project, provide training, and ensure a smooth transition to production.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? Let's discuss how we can help bring your vision to life.</p>
        <Link to="/contact" className="btn btn-primary large">Start Your Project</Link>
      </section>
    </div>
  );
}
