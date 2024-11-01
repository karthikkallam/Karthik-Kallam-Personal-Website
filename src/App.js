import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const CurrentlyMaking = lazy(() => import('./pages/CurrentlyMaking'));

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const changeTheme = (newTheme) => {
    document.body.classList.remove('dark-mode', 'light-mode', 'chess-theme', 'futuristic-theme');
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = theme === 'chess-theme' ? '#000' : '';
    }
  }, [theme]);

  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} /> {}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/currently-making" element={<CurrentlyMaking />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      {}
      <div className="theme-selector">
        <button onClick={() => changeTheme('dark-mode')}>Dark Mode</button>
        {}
        <button onClick={() => changeTheme('chess-theme')}>Chess Theme</button>
        <button onClick={() => changeTheme('futuristic-theme')}>Neon Gaming Theme</button>
      </div>
    </div>
  );
}

export default App;
