import React from 'react';
import { Typewriter } from 'react-simple-typewriter';  // Import for the typing effect from react-simple-typewriter
import '../styles/AboutMe.css';  // Correct path to your CSS file

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        {/* Slower typing effect and keeping the text on screen */}
        <h1>
          {/* Typewriter for a slow, continuous typing effect */}
          <Typewriter
            words={[
              "Hi, I'm Vaishali Verma 👩‍💻",
              'Full-Stack Developer 🚀',
              'Machine Learning Enthusiast 🤖',
              'Blockchain Explorer 🔗'
            ]}
            loop={false}  // No loop so the text stays
            cursor
            cursorStyle="|"
            typeSpeed={100}  // Slower typing speed
            deleteSpeed={50}  // No deleting, but you can adjust if needed
            delaySpeed={2000}  // Delay between the words
          />
        </h1>

        <p>
          Hi, I'm <strong>Vaishali Verma</strong>, an aspiring Software Engineer with a solid foundation in full-stack web development and a passion for building impactful software solutions. Currently, I am pursuing my <strong>M.Tech in Computer Science Engineering</strong> at Thapar Institute of Engineering & Technology, expected to graduate in 2025.
        </p>
        <p>
          I have a strong proficiency in a wide range of programming languages including <strong>C, C++, Java, Python, HTML, CSS, JavaScript, Node.js, and React.js</strong>. In addition to my coding skills, I am also experienced in working with databases like <strong>MySQL</strong> and <strong>MongoDB</strong>, and I am comfortable using tools like <strong>Git</strong> for version control and <strong>Postman</strong> for API testing.
        </p>
        <p>
          My professional journey began with my role as an <strong>Associate Software Engineer at BYJU'S</strong> (Think & Learn Private Limited) in Bangalore, where I contributed to backend development, including API creation and integrations using Node.js, managing large datasets, and developing a comprehensive report generation module using MongoDB. I have also worked with event streams using Apache Kafka and developed several user interfaces with React.js to meet business needs.
        </p>
        <p>
          During my academic career, I completed a <strong>B.Tech in Computer Science Engineering</strong> at Dr. Virendra Swarup Memorial Education, U.P., with an aggregate score of 8.02. I have also participated in a Java training program at ICT Academy, IIT Kanpur, where I worked on a mini project to design a Library Management System using Core Java and JDBC.
        </p>
        <p>
          I'm constantly exploring new technologies and have a keen interest in <strong>blockchain, machine learning, and cloud computing</strong>. I enjoy working on projects that combine these emerging technologies with practical software solutions.
        </p>
        <p>
          I also code on LeetCode, HackerRank, and CodeChef to practice and improve my problem-solving & analytical skills.
        </p>
        <p className="connect-text">
          Let's connect! Feel free to reach out to me via email at <a href="mailto:vaishaliverma1204@gmail.com">vaishaliverma1204@gmail.com</a>, or check out my <a href="https://www.linkedin.com/in/vaishali-verma-025125174/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/vaishali1204" target="_blank" rel="noopener noreferrer">GitHub</a> profiles for more information about my work and projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
