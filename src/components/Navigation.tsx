import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../assets/krishna-logo.png'; // Update filename if different
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="Krishna Infotech Logo" className="logo-image" />
        </Link>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/founders" className="nav-link" onClick={() => setIsOpen(false)}>Founders</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
