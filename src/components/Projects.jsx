import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projectsData = [
  {
    title: "Differentiated Case Flow Management",
    date: "Oct 2025 – Dec 2025",
    description: "Engineered a smart case management system that streamlined workflows and improved operational efficiency. Optimized case prioritization based on urgency and complexity, accelerating resolution and decision-making. Implemented real-time dashboards to enhance case visibility, resource allocation, and overall productivity.",
    tech: ["JavaScript", "Node.js", "React"],
    github: "https://github.com/shivi9155/streamlined-caseflow",
    live: "https://case-flow-simplify.vercel.app/",
    image: "/project1.png"
  },
  {
    title: "Geo-Map Reference",
    date: "Feb 2025 - Apr 2025",
    description: "Designed an interactive geo-mapping platform to centralize and visualize location-based data, improving spatial data accessibility. Contributed advanced search, filtering, and marker-based insights to streamline place discovery. Achieved improved usability and faster geospatial analysis by delivering an intuitive user experience.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP"],
    github: "https://github.com/kaurparmar/Geo_Map",
    image: "/project2.png"   // ✅ added preview for project 2
  }
];

const Projects = () => {
  return (
    <section className="section container">
      <h2 className="section-title">
        Featured <span className="title-gradient">Projects</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem'
      }}>

        {projectsData.map((project, index) => (
          <div key={index} className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>

            {/* 🔥 SHOW IMAGE IF EXISTS */}
            {project.image && (
              <div style={{ overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "0.4s"
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            )}

            <div style={{ padding: "1.5rem" }}>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                gap: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  margin: 0,
                  flex: 1
                }}>
                  {project.title}
                </h3>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <ExternalLink size={20} /> Live
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>

              <p style={{
                marginBottom: '1.5rem',
                lineHeight: '1.7'
              }}>
                {project.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '1rem'
              }}>
                {project.tech.map((t, i) => (
                  <span key={i}>
                    #{t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;