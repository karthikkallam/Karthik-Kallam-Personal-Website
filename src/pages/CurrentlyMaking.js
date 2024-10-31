import React from 'react';
import './CurrentlyMaking.css';

function CurrentlyMaking() {
  const currentlyMakingProjects = [
    {
      title: 'AI Resume ELO Scorer',
      description: 'Building an AI-powered system to evaluate resumes using Elo-style rating algorithms to rank resumes by quality. Useful for university clubs or even companies to filter through applicants without much manual work. Projected to be completed by February/March 2025.',
      technologies: 'Python • Flask • Scikit-learn',
      icon: '../assets/icons/elo-scorer-icon.png', 
    },
    {
      title: 'Zombie Game on Unity',
      description: 'Creating a zombie survival game using Unity, featuring procedurally generated maps, AI-driven enemies, and player progression. Classic zombie game with a storymode twist. Projected to be completed by December 2024.',
      technologies: 'Unity • C# • Blender',
      icon: '../assets/icons/zombie-game-icon.png',
    },
  ];

  return (
    <div className="currently-making" data-aos="fade-up">
      <h2>Currently Making</h2>
      <div className="currently-making-list">
        {currentlyMakingProjects.map((project, index) => (
          <div className="currently-making-card" key={index}>
            <img src={project.icon} alt={`${project.title} Icon`} className="currently-making-icon" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="technologies">{project.technologies}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentlyMaking;
