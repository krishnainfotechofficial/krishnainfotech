import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'STRUCT IQ Rebar Services',
      category: 'Web Development',
      description: 'Global rebar detailing and estimation services website. Precision-driven approach for constructible and code-compliant reinforcement solutions. Specializes in rebar shop drawings, bar bending schedules, and structural detailing.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Email/FTP Integration'],
      image: '📐'
    },
    {
      id: 2,
      title: 'Cloud Based Leave Tracking App',
      category: 'Mobile Development',
      description: 'Mobile application developed to automate and simplify the leave application process for educational institutions. Serves three user types: students, staff, and parents. Features real-time push notifications, instant approval/rejection, and digital workflows replacing traditional paper-based systems.',
      technologies: ['Flutter', 'Firebase', 'Firebase Cloud Messaging (FCM)', 'Cloud Functions', 'Twilio', 'Real-time Database'],
      image: '📱'
    },
    {
      id: 3,
      title: 'College Marks Management System',
      category: 'Full Stack',
      description: 'Comprehensive web-based application for digital academic assessment management. Features role-based access control for staff and students, hierarchical workflow (Department → Batch → Semester → Exam → Marks Entry), bulk marks entry with real-time validation, and responsive glass morphism UI design. Replaces traditional pen-and-paper approaches with secure, efficient digital workflows.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Firestore', 'Firebase Authentication', 'Glass Morphism UI', 'Real-time Database'],
      image: '📚'
    },
    {
      id: 4,
      title: 'Mind Challenge Game',
      category: 'Full Stack',
      description: 'Interactive web-based application with two modules: a Number Guessing Game with time constraints and feedback, and a Crossword Puzzle Game. Developed to enhance logical thinking and problem-solving skills with a responsive UI.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Full Stack'],
      image: '🧠'
    },
    {
      id: 5,
      title: 'FoodHub Ordering System',
      category: 'Full Stack',
      description: 'Web-based food ordering platform allowing users to browse restaurants and place orders. Includes a customer module for cart and order history, plus an admin module to manage items and dynamic order statuses.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB', 'Full Stack'],
      image: '🍔'
    },
    {
      id: 6,
      title: 'Inventory & Sales Accounting System',
      category: 'Web Development',
      description: 'A comprehensive system developed to automate inventory tracking, sales transactions, and financial reporting for Sree Ponnatchiamman Traders. Replaces manual methods with structured, real-time data handling.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'MongoDB', 'Web Development'],
      image: '📦'
    },
    {
      id: 7,
      title: 'Smart Fuel Cost Calculator',
      category: 'Web Development',
      description: 'An interactive application designed to calculate and manage travel expenses. Features a history-tracking login system, automatic trip and toll cost estimation, and Geolocation API integration with Google Maps to locate nearby petrol bunks.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Geolocation API', 'Local Storage'],
      image: '⛽'
    },
    {
      id: 8,
      title: 'College Media Portal',
      category: 'Full Stack',
      description: 'Centralized web-based platform for managing student registrations and sharing college event media. Features separate login for students and staff, student registration with approval workflow, file upload/download/delete capabilities for both students and staff. Real-time moderation, cloud storage for event media, and role-based access control. Provides transparent, organized digital record-keeping for educational institutions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Firestore Database', 'Cloud Storage', 'Real-time Authentication'],
      image: '🎥'
    }
  ];

  return (
    <div className="projects">
      {/* Header */}
      <section className="projects-header">
        <h1>Our Projects</h1>
        <p>Showcasing our expertise through successful deliverables</p>
      </section>

      {/* Projects Grid */}
      <section className="projects-content">
        <div className="projects-intro">
          <h2>Portfolio of Excellence</h2>
          <p>
            Our portfolio demonstrates our commitment to delivering high-quality solutions across diverse industries and technologies. 
            Each project reflects our dedication to excellence and innovation.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Stats */}
      <section className="project-stats">
        <h2>Our Impact</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <p>Team Members</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <h2>Have an Idea?</h2>
        <p>Let's turn your vision into reality. Start your project with us today.</p>
        <a href="/contact" className="btn btn-primary large">Start Your Project</a>
      </section>
    </div>
  );
}
