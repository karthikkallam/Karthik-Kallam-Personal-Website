import React from 'react';
import './Home.css';
import TCIImage from '../assets/tci-logo.png'; // Assuming the logo is stored in src/assets
import { Parallax } from 'react-parallax';

// Importing two versions of each logo (white outline and black outline)
import EmailLogoWhite from '../assets/email-logo-white.png';
import EmailLogoBlack from '../assets/email-logo-black.png';
import GitHubLogoWhite from '../assets/github-logo-white.png';
import GitHubLogoBlack from '../assets/github-logo-black.png';
import LinkedInLogoWhite from '../assets/linkedin-logo-white.png';
import LinkedInLogoBlack from '../assets/linkedin-logo-black.png';

// Importing the TechCarousel component
import TechCarousel from '../components/TechCarousel/TechCarousel';

function Home({ theme }) {
  const isLightMode = theme === 'light-mode';
  const emailLogo = isLightMode ? EmailLogoBlack : EmailLogoWhite;
  const githubLogo = isLightMode ? GitHubLogoBlack : GitHubLogoWhite;
  const linkedinLogo = isLightMode ? LinkedInLogoBlack : LinkedInLogoWhite;

  return (
    <Parallax bgImage="../assets/background.jpg" strength={500} className="home-parallax">
      <div className="home">
        <div className="home-header" data-aos="fade-up">
          <h1>Karthik Kallam</h1>
          <p className="centered-title">Software Engineer | Computer Scientist</p>
        </div>

        {/* Social Links */}
        <div className="home-links" data-aos="fade-left">
          <a href="mailto:kallamkkr@gmail.com" className="home-link">
            <img src={emailLogo} alt="Email Logo" className="link-logo" />
          </a>
          <a href="https://github.com/your-github" className="home-link">
            <img src={githubLogo} alt="GitHub Logo" className="link-logo" />
          </a>
          <a href="https://www.linkedin.com/in/karthik-kallam-057a66191/" target="_blank" rel="noopener noreferrer" className="home-link">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="link-logo" />
          </a>
        </div>

        {/* Work Experience */}
        <div className="work-item" data-aos="fade-right">
          <img src={TCIImage} alt="TCI Logo" className="company-logo" />
          <div className="work-details">
            <p className="company-name">Technology Consultants Incorporated</p>
            <p className="job-title">Software Engineer Intern</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-heading" data-aos="fade-up">
          <h3>What I work with</h3>
        </div>

        {/* Tech Carousel Container */}
        <div className="tech-carousel-container" data-aos="fade-up">
          <TechCarousel
            techList={[
              'React',
              'NextJS',
              'HTML',
              'Vite',
              'JavaScript',
              'CSS',
              'Angular',
              'NodeJS',
              'Express',
              'MySQL',
              'SQL',
              'Python',
              'Flask',
              'Pytorch',
              'Rust',
              'Git',
              'Unity',
              'C#',
              'R',
              'C++',
              'Java',
            ]}
          />
        </div>
      </div>
    </Parallax>
  );
}

export default Home;
