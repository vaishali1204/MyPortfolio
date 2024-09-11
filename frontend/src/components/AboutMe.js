import React from 'react';
import { Typewriter } from 'react-simple-typewriter';  // For the typing effect
import '../styles/AboutMe.css';  // Correct path to your CSS file

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-container">
        {/* Adding profile image */}
        <img 
          src={`${process.env.PUBLIC_URL}/images/profile_image.png`} 
          alt="Profile" 
          className="profile-image"
        />
        
        {/* Slower typing effect and keeping the text on screen */}
        <h1>
          <Typewriter
            words={[
              "Hi, I'm Vaishali Verma 👩‍💻",
              'Full-Stack Developer 🚀',
              'Machine Learning Enthusiast 🤖',
              'Blockchain Explorer 🔗'
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        
        <p>
          Hi, I'm <strong>Vaishali Verma</strong>, an aspiring Software Engineer with a solid foundation in full-stack web development and a passion for building impactful software solutions. Currently, I am pursuing my <strong>M.Tech in Computer Science Engineering</strong> at Thapar Institute of Engineering & Technology, expected to graduate in 2025.
        </p>
        <p>
          I have a strong proficiency in a wide range of programming languages including <strong>C, C++, Java, Python, HTML, CSS, JavaScript, Node.js, and React.js</strong>. In addition to my coding skills, I am also experienced in working with databases like <strong>MySQL</strong> and <strong>MongoDB</strong>, and I am comfortable using tools like <strong>Git</strong> for version control and <strong>Postman</strong> for API testing.
        </p>
        <p>
          My professional journey began with my role as an <strong>Associate Software Engineer at BYJU'S</strong> in Bangalore, where I contributed to backend development, including API creation and integrations using Node.js, managing large datasets, and developing a comprehensive report generation module using MongoDB.
        </p>
        <p>
          I'm constantly exploring new technologies and have a keen interest in <strong>blockchain, machine learning, and cloud computing</strong>. I also code on LeetCode, HackerRank, and CodeChef to practice and improve my problem-solving skills.
        </p>
        <p className="connect-text">
          Let's connect! Feel free to reach out to me via email at <a href="mailto:vaishaliverma1204@gmail.com">vaishaliverma1204@gmail.com</a>, or check out my <a href="https://www.linkedin.com/in/vaishali-verma-025125174/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/vaishali1204" target="_blank" rel="noopener noreferrer">GitHub</a> profiles for more information about my work and projects.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
