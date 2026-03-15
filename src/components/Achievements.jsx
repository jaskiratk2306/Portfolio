import React from 'react';
import { Trophy, Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "LeetCode Problem Solver",
    date: "Feb 2026",
    details: "Solved 140+ problems with an 82% acceptance rate.",
    icon: <CheckCircle size={24} color="#00b09b" />
  },
  {
    title: "Hacker-Rank Silver Badge (C++)",
    date: "Jan 2026",
    details: "Demonstrated strong problem-solving skills in C++.",
    icon: <Trophy size={24} color="#f6d365" />
  }
];

const certificates = [
  { course: "Natural Language Processing", issuer: "NPTEL", date: "Apr 2025" },
  { course: "TCP/IP and Advanced Topics", issuer: "Coursera", date: "Nov 2024" },
  { course: "Fundamentals of Network Communication", issuer: "Coursera", date: "Sep 2024" }
];

const Achievements = () => {
  return (
    <section className="section container">
      <h2 className="section-title"><span className="title-gradient">Achievements</span> & Certifications</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Achievements Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>Highlights</h3>
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{item.title}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-darkblue)', marginBottom: '0.5rem' }}>{item.date}</div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>Certifications</h3>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            {certificates.map((cert, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderBottom: idx === certificates.length - 1 ? 'none' : '1px solid var(--glass-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Award size={20} color="var(--accent-pink)" />
                  <div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.2rem' }}>{cert.course}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.issuer}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-darkblue)', border: '1px solid var(--accent-darkblue)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
