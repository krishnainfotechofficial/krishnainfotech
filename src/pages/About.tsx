import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <h1>About Krishna Infotech</h1>
        <p>Delivering Excellence in IT Solutions Since Our Inception</p>
      </section>

      {/* About Company */}
      <section className="about-section">
        <div className="section-content">
          <div className="content-text">
            <h2>About Our Company</h2>
            <p>
              Krishna Infotech is a forward-thinking IT solutions company based in Chennai, Tamil Nadu, 
              dedicated to delivering innovative and high-quality software solutions to businesses of all sizes.
            </p>
            <p>
              We believe in combining cutting-edge technology with traditional values of excellence and client-centric service. 
              Our team is passionate about creating solutions that not only meet but exceed client expectations.
            </p>
            <p>
              With expertise spanning web development, full-stack solutions, and comprehensive IT services, 
              we help businesses transform their digital presence and achieve their goals in an increasingly 
              technology-driven world.
            </p>
          </div>
          <div className="content-image">
            <div className="image-placeholder">
              <span>🌐</span>
              <p>Digital Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works */}
      <section className="about-section alternate">
        <div className="section-content">
          <div className="content-image">
            <div className="image-placeholder">
              <span>⚙️</span>
              <p>Quality Solutions</p>
            </div>
          </div>
          <div className="content-text">
            <h2>Our Works</h2>
            <p>
              Our portfolio showcases a diverse range of projects across various industries and sectors. 
              From startups to established enterprises, we've successfully delivered:
            </p>
            <ul className="works-list">
              <li>Responsive web applications</li>
              <li>Full-stack e-commerce platforms</li>
              <li>Mobile-friendly digital solutions</li>
              <li>Enterprise-level systems and integrations</li>
              <li>Performance-optimized web experiences</li>
              <li>SEO-friendly content management systems</li>
            </ul>
            <p>
              Each project is approached with meticulous attention to detail, ensuring that the final product 
              not only functions flawlessly but also provides an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="about-section">
        <div className="section-content">
          <div className="content-text">
            <h2>About Our Founder</h2>
            <p>
              Our founder brings over a decade of experience in software development and technology innovation. 
              With a vision to create solutions that blend technical excellence with customer satisfaction, 
              the founder established Krishna Infotech as a beacon of quality in the IT industry.
            </p>
            <p>
              Guided by principles of integrity, innovation, and continuous improvement, our founder has steered 
              Krishna Infotech to become a trusted partner for digital transformation. Their leadership emphasizes 
              not just delivering projects, but building lasting relationships with clients.
            </p>
            <p>
              The name "Krishna Infotech" is inspired by values of wisdom, excellence, and dedication – 
              principles that guide every solution we create and every interaction we have.
            </p>
          </div>
          <div className="content-image">
            <div className="image-placeholder founder">
              <span>👔</span>
              <p>Visionary Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="about-section team-section alternate">
        <h2>Our Team</h2>
        <p className="team-intro">
          We are a diverse group of talented professionals united by a passion for technology and excellence.
        </p>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">💻</div>
            <h3>Full Stack Developers</h3>
            <p>Experts in building end-to-end solutions with modern frameworks and technologies.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🎨</div>
            <h3>UI/UX Designers</h3>
            <p>Creative professionals who design beautiful and intuitive user interfaces.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">📱</div>
            <h3>Frontend Specialists</h3>
            <p>Passionate about creating responsive and performant web applications.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">⚙️</div>
            <h3>Backend Engineers</h3>
            <p>Building robust, scalable, and secure server-side solutions.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🔒</div>
            <h3>Security Specialists</h3>
            <p>Ensuring your applications are protected with industry-leading security practices.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">📊</div>
            <h3>Project Managers</h3>
            <p>Coordinating seamlessly to ensure projects are delivered on time and within scope.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section why-choose-us">
        <h2>Why Choose Krishna Infotech?</h2>
        
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Technical Excellence</h3>
            <p>We stay updated with the latest technologies and best practices.</p>
          </div>
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Client-Centric Approach</h3>
            <p>Your satisfaction and success are our primary objectives.</p>
          </div>
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Timely Delivery</h3>
            <p>We respect your timelines and deliver quality on schedule.</p>
          </div>
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Competitive Pricing</h3>
            <p>Quality solutions at rates that provide excellent value.</p>
          </div>
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Long-term Support</h3>
            <p>Ongoing maintenance and support for your peace of mind.</p>
          </div>
          <div className="reason-card">
            <div className="reason-icon">✓</div>
            <h3>Transparent Communication</h3>
            <p>Regular updates and open communication throughout the project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
