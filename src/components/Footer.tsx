import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Krishna Infotech</h3>
          <p>End-to-end IT solutions built with cutting-edge technologies and best practices.</p>
          <p className="contact-info">
            <span>krishnainfotech.official@gmail.com</span><br />
            <span>+91 9042850490</span><br />
            <span>Rajapalayam - 626 108</span>
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Full Stack Development</li>
            <li>Responsive Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Krishna Infotech. All rights reserved.</p>
      </div>
    </footer>
  );
}
