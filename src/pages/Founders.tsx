import './Founders.css';

export default function Founders() {
  const founders = [
    {
      id: 1,
      name: 'Visionary Leader',
      role: 'Founder & CEO',
      bio: 'A seasoned entrepreneur and technology expert with over 15 years of experience in software development and digital innovation. Passionate about building products that make a difference.',
      expertise: ['Full Stack Development', 'Architecture', 'Leadership', 'Innovation'],
      icon: '👨‍💼'
    },
    {
      id: 2,
      name: 'Tech Lead',
      role: 'CTO & Co-Founder',
      bio: 'Dedicated technical leader with deep expertise in cloud technologies, system design, and team management. Committed to delivering scalable and secure solutions.',
      expertise: ['Cloud Architecture', 'DevOps', 'Security', 'System Design'],
      icon: '👨‍💻'
    },
    {
      id: 3,
      name: 'Business Strategist',
      role: 'COO',
      bio: 'Strategic thinker focused on business growth and client satisfaction. Brings extensive experience in project management and stakeholder relations.',
      expertise: ['Business Development', 'Project Management', 'Client Relations', 'Operations'],
      icon: '👨‍🏫'
    }
  ];

  return (
    <div className="founders">
      {/* Header */}
      <section className="founders-header">
        <h1>Our Founders</h1>
        <p>Visionary leaders committed to excellence and innovation</p>
      </section>

      {/* Founders Grid */}
      <section className="founders-content">
        <div className="founders-intro">
          <h2>Meet Our Leadership</h2>
          <p>
            Our founders bring together decades of combined experience in software development, business strategy, 
            and technology innovation. Their vision guides Krishna Infotech towards continuous excellence and growth.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card">
              <div className="founder-avatar">{founder.icon}</div>
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>
              <div className="founder-expertise">
                <h4>Expertise:</h4>
                <ul>
                  {founder.expertise.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <div className="vision-content">
          <div className="vision-card">
            <div className="vision-icon">🎯</div>
            <h3>Mission</h3>
            <p>
              To empower businesses through innovative IT solutions that drive growth, 
              efficiency, and digital transformation in an increasingly connected world.
            </p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">✨</div>
            <h3>Vision</h3>
            <p>
              To be the most trusted IT partner for businesses, known for delivering 
              excellence, innovation, and unwavering commitment to client success.
            </p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">🌟</div>
            <h3>Values</h3>
            <p>
              Integrity, Excellence, Innovation, Client-centricity, and Continuous Learning. 
              These values guide every decision and action we take.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="culture-section">
        <h2>Our Culture</h2>
        <p>
          At Krishna Infotech, we believe that great technology comes from great people. 
          Our culture emphasizes collaboration, continuous learning, and a passion for excellence.
        </p>
        
        <div className="culture-grid">
          <div className="culture-card">
            <h4>Collaborative</h4>
            <p>We believe in the power of teamwork and open communication to achieve extraordinary results.</p>
          </div>
          <div className="culture-card">
            <h4>Innovative</h4>
            <p>We encourage creative thinking and experimentation to find new and better solutions.</p>
          </div>
          <div className="culture-card">
            <h4>Quality-Focused</h4>
            <p>Excellence is not a destination but a continuous journey we're committed to.</p>
          </div>
          <div className="culture-card">
            <h4>Client-Centric</h4>
            <p>Your success is our success. We're dedicated to understanding and exceeding your expectations.</p>
          </div>
          <div className="culture-card">
            <h4>Sustainable</h4>
            <p>We focus on long-term value creation and responsible business practices.</p>
          </div>
          <div className="culture-card">
            <h4>Growth-Oriented</h4>
            <p>We invest in continuous learning and development for our team and our clients.</p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <h2>Join Our Team</h2>
        <p>Are you passionate about technology and innovation? We'd love to hear from you!</p>
        <a href="/contact" className="btn btn-primary large">Contact Us for Opportunities</a>
      </section>
    </div>
  );
}
