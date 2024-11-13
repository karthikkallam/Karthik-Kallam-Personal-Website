import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'AI Options Trading Project',
      description: 'Created an AI-powered system for options trading that uses data acquisition, signal processing, and strategy execution. Used machine models with PyTorch to create an AI that predicts the an optimal options play. The backend, built with Flask, supports trading logic and data flow, while a React dashboard provides real-time visualization and control.',
      technologies: 'Python • PyTorch • Flask • React',
      icon: '../assets/icons/website-icon.png',
    },

    {
      title: 'AI Poker Project',
      description: 'Built an AI-powered poker coach using reinforcement learning algorithms to create a very strong AI poker player from scratch. With this expertise the AI has, if a player plays at least 100 hands with the AI, the AI can determine flaws in the players’ playstyle and offers advice to improve their game.',
      technologies: 'Python • Pytorch • Flask',
      icon: '../assets/icons/poker-icon.png',
    },

    {
      title: 'Idle Incremental Game',
      description: 'Developed an idle incremental game using Unity, involving resource management, upgrades, and progression mechanics. Players achieve continuous growth with minimal active input, driven by strategic planning and adaptive rewards, ensuring long-term engagement and player retention.',
      technologies: 'Unity • C#',
      icon: '../assets/icons/idle-game-icon.svg', 
    },

    {
      title: 'Data Analysis Research',
      description: 'Conducted data analysis research at the Ohio State University on the topic of access to healthy food on different places around the campus. After surveying 179 students across campus, uncovered campuswide flaws regarding the average distance to grocery stores and public transportation for students.',
      technologies: 'Python • R • Pandas',
      icon: '../assets/icons/data-analysis-icon.png',
    },

    {
      title: 'Personal Website',
      description: 'Designed and built a personal portfolio website to showcase projects and experience, featuring multiple interactive themes and animations. This website highlights my skills in front-end development, user experience, and design.',
      technologies: 'React • CSS • JavaScript',
      icon: '../assets/icons/website-icon.png',
    },
  ];

  return (
    <div className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.icon} alt={`${project.title} Icon`} className="project-icon" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="technologies">{project.technologies}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
