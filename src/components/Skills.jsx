import React from 'react';
import { Code, Database, Layout, Server, Settings, Users } from 'lucide-react';

const skillsData = [
  { category: "Languages", icon: <Code size={24} color="var(--accent-pink)"/>, items: ["Python", "C++", "Java", "JavaScript"] },
  { category: "Frontend", icon: <Layout size={24} color="var(--accent-darkblue)"/>, items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", icon: <Server size={24} color="var(--accent-pink)"/>, items: ["Node.js", "Express.js", "PHP"] },
  { category: "Database", icon: <Database size={24} color="var(--accent-darkblue)"/>, items: ["MySQL", "MongoDB"] },
  { category: "Tools/Platforms", icon: <Settings size={24} color="var(--accent-pink)"/>, items: ["Git", "GitHub"] },
  { category: "Soft Skills", icon: <Users size={24} color="var(--accent-darkblue)"/>, items: ["Critical Thinking", "Team Player", "Adaptability"] }
];

const Skills = () => {
  return (
    <section className="section container">
      <h2 className="section-title"><span className="title-gradient">Technical Arsenal</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillsData.map((skill, index) => (
          <div key={index} className="glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                {skill.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{skill.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skill.items.map((item, i) => (
                <span key={i} style={{ 
                  padding: '0.5rem 1rem', 
                  background: 'rgba(216, 17, 89, 0.1)', 
                  border: '1px solid rgba(216, 17, 89, 0.2)',
                  borderRadius: '99px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent-darkblue)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(216, 17, 89, 0.1)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
