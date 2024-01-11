// Enhanced Portfolio.js
import React from 'react';

const projects = [
    // Example project data
    { title: "Project 1", description: "Description of Project 1", imageUrl: "/path/to/image1.jpg" },
    // Add more projects
];

const Portfolio = () => {
    // Function to handle project click (e.g., open modal or navigate to project details)
    const handleProjectClick = (project) => {
        // Implementation depends on how you want to display the details
        console.log("Project clicked:", project.title);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>My Portfolio</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', cursor: 'pointer' }}
                         onClick={() => handleProjectClick(project)}>
                        <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
