import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact'; 
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact /> 

      <footer
        className="section glass-card"
        style={{
          textAlign: 'center',
          borderRadius: 0,
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          padding: '3rem 0'
        }}
      >
        <p>© 2026 Jaskirat Kaur Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;