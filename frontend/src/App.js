import React from 'react';
import Header from './components/Header';  // Import the Header component
import Footer from './components/Footer';  // Import the Footer component
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';  // Main styling for the app

const App = () => {
  return (
    <div className="app-container">
      {/* Header with navigation links */}
      <Header />

      {/* Main content area */}
      <div className="content-sections">
        {/* About Me Section */}
        <section id="about">
          <AboutMe />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
