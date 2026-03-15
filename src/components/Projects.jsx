import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projectsData = [
  {
    title: "Differentiated Case Flow Management",
    date: "Oct 2025 – Dec 2025",
    description: "Engineered a smart case management system that streamlined workflows and improved operational efficiency. Optimized case prioritization based on urgency and complexity, accelerating resolution and decision-making. Implemented real-time dashboards to enhance case visibility, resource allocation, and overall productivity.",
    tech: ["JavaScript", "Node.js", "React"],
    github: "https://github.com/shivi9155/streamlined-caseflow",
    live: "https://case-flow-simplify.vercel.app/"
  },
  {
    title: "Geo-Map Reference",
    date: "Feb 2025 - Apr 2025",
    description: "Designed an interactive geo-mapping platform to centralize and visualize location-based data, improving spatial data accessibility. Contributed advanced search, filtering, and marker-based insights to streamline place discovery. Achieved improved usability and faster geospatial analysis by delivering an intuitive user experience.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP"],
    github: "https://github.com/kaurparmar/Geo_Map"
  }
];

const Projects = () => {
  return (
    <section className="section container">
      <h2 className="section-title">Featured <span className="title-gradient">Projects</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {projectsData.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0, flex: 1 }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo" style={{ 
                        color: 'var(--accent-darkblue)', 
                        transition: 'color 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }} 
                      onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-pink)'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-darkblue)'}>
                      <ExternalLink size={20} /> Live
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" title="View Source" style={{ 
                      color: 'var(--text-secondary)', 
                      transition: 'color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-darkblue)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
              
              <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.7' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.85rem', color: 'var(--accent-pink)', fontWeight: 500 }}>
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
