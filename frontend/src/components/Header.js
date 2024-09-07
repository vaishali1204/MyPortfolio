import React from 'react';
import '../styles/Header.css';  // Assuming Header.js is in src/components

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Adding Download CV link */}
          <li>
            <a href="/VaishaliResume2025.pdf" download="VaishaliVermaResume.pdf">
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
