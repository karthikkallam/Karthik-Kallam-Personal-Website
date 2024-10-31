import React from 'react';
import './TechCarousel.css';

import { ReactComponent as PythonIcon } from '../../assets/icons/python.svg';
import { ReactComponent as UnityIcon } from '../../assets/icons/unity.svg';
import { ReactComponent as CSharpIcon } from '../../assets/icons/csharp.svg';
import { ReactComponent as SQLIcon } from '../../assets/icons/sql.svg';
import { ReactComponent as JavaIcon } from '../../assets/icons/java.svg';
import { ReactComponent as RIcon } from '../../assets/icons/r.svg';
import { ReactComponent as CPlusPlusIcon } from '../../assets/icons/cplusplus.svg';
import { ReactComponent as ViteIcon } from '../../assets/icons/vite.svg';
import { ReactComponent as NodeJSIcon } from '../../assets/icons/nodejs.svg';
import { ReactComponent as NextJSIcon } from '../../assets/icons/nextjs.svg';
import { ReactComponent as HTMLIcon } from '../../assets/icons/html.svg';
import { ReactComponent as RustIcon } from '../../assets/icons/rust.svg';
import { ReactComponent as GitIcon } from '../../assets/icons/git.svg';
import { ReactComponent as MySQLIcon } from '../../assets/icons/mysql.svg';
import { ReactComponent as FlaskIcon } from '../../assets/icons/flask.svg';
import { ReactComponent as PytorchIcon } from '../../assets/icons/pytorch.svg';
import { ReactComponent as AngularIcon } from '../../assets/icons/angular.svg';

function TechCarousel() {
  const frontEndTechnologies = [
    { name: 'HTML', icon: <HTMLIcon /> },
    { name: 'Vite', icon: <ViteIcon /> },
    { name: 'Unity', icon: <UnityIcon /> },
    { name: 'C#', icon: <CSharpIcon /> },
    { name: 'NextJS', icon: <NextJSIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },

  ];

  const backEndTechnologies = [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'SQL', icon: <SQLIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'R', icon: <RIcon /> },
    { name: 'C++', icon: <CPlusPlusIcon /> },
    { name: 'NodeJS', icon: <NodeJSIcon /> },
    { name: 'Rust', icon: <RustIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'Flask', icon: <FlaskIcon /> },
    { name: 'Pytorch', icon: <PytorchIcon /> },
  ];

  return (
    <div className="tech-carousel-container">
      {/* Frontend Technologies Carousel */}
      <div className="tech-carousel">
        <div className="tech-carousel-track">
          {frontEndTechnologies.map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {frontEndTechnologies.map((tech, index) => (
            <div key={index + frontEndTechnologies.length} className="tech-item">
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Technologies Carousel */}
      <div className="tech-carousel">
        <div className="tech-carousel-track">
          {backEndTechnologies.map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {backEndTechnologies.map((tech, index) => (
            <div key={index + backEndTechnologies.length} className="tech-item">
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCarousel;
