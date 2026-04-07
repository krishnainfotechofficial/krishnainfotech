import './Contact.css';

export default function Contact() {

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? Let's discuss how we can help.</p>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us via any of the following methods:</p>
            
            <div className="info-card">
              <div className="info-icon"></div>
              <h3>Email</h3>
              <p>
                <a href="mailto:krishnainfotech.official@gmail.com">krishnainfotech.official@gmail.com</a>
              </p>
              <small>We'll respond within 24 hours</small>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919042850490">+91 9042850490</a>
              </p>
              <small>Available Monday to Friday, 9AM - 6PM IST</small>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <h3>Location</h3>
              <p>Chennai, Tamil Nadu, India</p>
              <small>Ready to serve clients worldwide</small>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <h3>Response Time</h3>
              <p>Quick Turnaround</p>
              <small>We prioritize quick responses to all inquiries</small>
            </div>
          </div>

          {/* WhatsApp Messaging */}
          <div className="whatsapp-wrapper">
            <h2>Message Us on WhatsApp</h2>
            <div className="whatsapp-container">
              <div className="whatsapp-icon-large"></div>
              <p>Quick, easy, and direct communication. Send us a message on WhatsApp and we'll respond immediately!</p>
              <a 
                href="https://wa.me/919042850490?text=Hi%20Krishna%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <span className="whatsapp-logo"></span>
                Start WhatsApp Chat
              </a>
              <p className="whatsapp-info">Available 24/7 • Quick responses • Direct conversation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="why-contact">
        <h2>Why Work With Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h3>Clear Objectives</h3>
            <p>We understand your goals and tailor our approach to meet them perfectly.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💡</div>
            <h3>Expert Solutions</h3>
            <p>Our team brings expertise and innovation to every project.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>Fast Execution</h3>
            <p>Quick turnaround without compromising on quality and excellence.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💬</div>
            <h3>Great Communication</h3>
            <p>Transparent communication keeps you updated throughout the project.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What's your typical project timeline?</h3>
            <p>
              Project timelines vary based on scope and complexity. We'll provide a detailed estimate 
              during the initial consultation. Most projects range from 4-12 weeks.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer post-launch support?</h3>
            <p>
              Yes! We provide comprehensive post-launch support and maintenance packages. 
              We're committed to ensuring your project's long-term success.
            </p>
          </div>
          <div className="faq-item">
            <h3>What technologies do you use?</h3>
            <p>
              We use modern, battle-tested technologies including React, Node.js, Python, and cloud platforms. 
              We choose the best tech stack for each project's needs.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do you ensure security?</h3>
            <p>
              Security is built into every stage of development. We follow OWASP standards, 
              conduct regular security audits, and implement industry best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
