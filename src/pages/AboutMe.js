import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';

/* Not using this AboutMe tab, for simplicity on the website and more straight forward deseign, decided that I should get rid of this. Also I have experience with too many different programming languages where it would be difficult to have them all listed here */
const skills = [
  { name: 'Python', proficiency: 90 },
  { name: 'Unity', proficiency: 85 },
  { name: 'C#', proficiency: 85 },
  { name: 'SQL', proficiency: 80 },
  { name: 'Java', proficiency: 80 },
  { name: 'R', proficiency: 70 },
  { name: 'C++', proficiency: 65 },
];

function AboutMe() {
  return (
    <motion.div className="about-me" data-aos="fade-up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <h2>About Me</h2>
      <p>Hi, I'm Karthik Kallam, a software engineer in my third year of college. I love solving complex problems and creating impactful software solutions. My academic journey and internship experiences have helped me build a solid foundation in software engineering, data analysis, and teamwork.</p>
      
      <h3>Skills</h3>
      <div className="skills-section" data-aos="fade-left">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="proficiency-bar-container">
              <div
                className="proficiency-bar"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h3>Timeline</h3>
      <div className="timeline" data-aos="fade-right">
        <p><strong>2026 (Expected)</strong> - Bachelor of Science in Computer Science and Engineering, The Ohio State University</p>
        <p><strong>May 2024 - Aug 2024</strong> - Software Engineer Intern, Technology Consultants Incorporated</p>
        <p><strong>2023 - Present</strong> - Game Developer, Unity Projects</p>
        <p><strong>2021 - Present</strong> - Lead Tutor, Coding Summer Camp</p>
      </div>

      <h3>Interests</h3>
      <p>Outside of coding, I am an avid gamer and chess player. I enjoy creating games in Unity, playing strategy games, and mentoring others to develop their programming skills. I also have a keen interest in statistical analysis, which has helped me work on research projects related to data-driven solutions.</p>
    </motion.div>
  );
}

export default AboutMe;
