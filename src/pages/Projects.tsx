import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A complete e-commerce solution with product catalog, shopping cart, payment integration, and order management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Modern, responsive corporate website with CMS integration for easy content management.',
      technologies: ['React', 'Tailwind CSS', 'CMS', 'SEO'],
      image: '🌐'
    },
    {
      id: 3,
      title: 'Project Management App',
      category: 'Full Stack',
      description: 'Collaborative project management application with real-time updates, task tracking, and team communication features.',
      technologies: ['React', 'Firebase', 'WebSockets', 'Material-UI'],
      image: '📊'
    },
    {
      id: 4,
      title: 'Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application with offline support and real-time synchronization.',
      technologies: ['React Native', 'Node.js', 'Firebase'],
      image: '📱'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive analytics dashboard with real-time data visualization and comprehensive reporting.',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'Python'],
      image: '📈'
    },
    {
      id: 6,
      title: 'Blog Platform',
      category: 'Content Management',
      description: 'Feature-rich blogging platform with user authentication, comments, and social sharing capabilities.',
      technologies: ['Next.js', 'PostgreSQL', 'OAuth', 'Redis'],
      image: '✍️'
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
            <div className="stat-number">50+</div>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
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
