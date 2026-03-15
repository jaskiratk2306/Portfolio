import React from 'react';
import { User, Code, Server, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="section container" id="about">
      <h2 className="section-title title-gradient animate-fade-in delay-1">
        About Me
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-card animate-fade-in delay-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(216, 17, 89, 0.1)', borderRadius: '12px', color: 'var(--accent-pink)' }}>
              <User size={24} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Who I Am</h3>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            I am a dedicated Software Engineer and Web Developer with a strong passion for building responsive, accessible, and highly interactive user interfaces. 
          </p>
          <p>
            With a keen eye for design and a drive to solve complex problems, I focus on crafting elegant solutions that provide meaningful experiences for users.
          </p>
        </div>

        <div className="glass-card animate-fade-in delay-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(15, 52, 96, 0.1)', borderRadius: '12px', color: 'var(--accent-darkblue)' }}>
              <Code size={24} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>What I Do</h3>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            I specialize in modern JavaScript frameworks, particularly React, along with scalable backend technologies.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={16} color="var(--accent-pink)" /> Fast, performant front-end architecture</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Server size={16} color="var(--accent-pink)" /> Robust system design & problem solving</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Code size={16} color="var(--accent-pink)" /> Clean, maintainable codebases</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
