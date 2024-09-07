import React from 'react';

const Projects = () => {
    const projectList = [
        {
            name: 'React Shopping Cart',
            description: 'Designed for ordering pizza and placing orders with multiple products.',
            technologies: ['React', 'Node.js'],
            link: 'https://github.com/vaishali1204/react-shopping-cart'
        },
        {
            name: 'Travel Planner',
            description: 'Web application designed for generating customized itineraries for users.',
            technologies: ['Node.js', 'MongoDB', 'React'],
            link: 'https://github.com/vaishali1204/travel-planner'
        },
        {
            name: 'Prostate Cancer Prediction',
            description: 'Prediction of prostate cancer using data science and statistics on a dataset.',
            technologies: ['Python', 'Data Science'],
            link: 'https://github.com/vaishali1204/prostate-cancer-prediction'
        },
        {
            name: 'Library Management System',
            description: 'Designed using Core Java, JDBC, and MySQL for managing library functions.',
            technologies: ['Java', 'MySQL'],
            link: 'https://github.com/vaishali1204/library-management-system'
        }
    ];

    return (
        <div className="projects-section">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project on GitHub
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
