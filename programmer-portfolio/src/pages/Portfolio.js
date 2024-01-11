// src/pages/Portfolio.js
import React from 'react';

const Portfolio = () => {
    // Example project data, you might fetch this from an API or a file
    const projects = [
        {
            title: "Project 1",
            description: "This is a brief description of Project 1.",
            link: "#"
        },
        {
            title: "Project 2",
            description: "This is a brief description of Project 2.",
            link: "#"
        },
        // Add more projects as needed
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <h2>My Portfolio</h2>
            <div>
                {projects.map(project => (
                    <div key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
