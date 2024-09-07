import React from 'react';

const Skills = () => {
    const skills = {
        languages: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js'],
        frameworks: ['Express.js'],
        databases: ['MySQL', 'MongoDB'],
        tools: ['Git', 'Postman', 'Visual Studio Code'],
        others: ['Blockchain', 'Machine Learning', 'Cloud Computing']
    };

    return (
        <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-category">
                <h3>Programming Languages</h3>
                <ul>
                    {skills.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-category">
                <h3>Frameworks</h3>
                <ul>
                    {skills.frameworks.map((framework, index) => (
                        <li key={index}>{framework}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-category">
                <h3>Databases</h3>
                <ul>
                    {skills.databases.map((db, index) => (
                        <li key={index}>{db}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-category">
                <h3>Tools</h3>
                <ul>
                    {skills.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-category">
                <h3>Other Areas</h3>
                <ul>
                    {skills.others.map((other, index) => (
                        <li key={index}>{other}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
