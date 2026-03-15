import React from 'react';
import { GraduationCap, Briefcase, BookOpen, Star } from 'lucide-react';

const timelineData = [
  {
    type: "education",
    title: "Bachelor of Technology in CSE",
    institution: "Lovely Professional University | Phagwara, Punjab",
    date: "Aug 2023 – Present",
    details: "CGPA: 7.45",
    icon: <GraduationCap size={20} color="#fff" />
  },
  {
    type: "training",
    title: "Mastering Java Application Development",
    institution: "Lovely Professional University (H.R.D.C)",
    date: "Jun 2025 – Jul 2025",
    details: "Comprehensive knowledge of core Java (OOP, Data Structures). Applied multithreading, file handling, GUI. Practical exposure to JDBC and network programming.",
    icon: <BookOpen size={20} color="#fff" />
  },
  {
    type: "education",
    title: "Intermediate (PCM)",
    institution: "Guru Harkrishan Public School | New Delhi",
    date: "Apr 2022 – Mar 2023",
    details: "Percentage: 78.2%",
    icon: <GraduationCap size={20} color="#fff" />
  },
  {
    type: "education",
    title: "Matriculation",
    institution: "Guru Harkrishan Public School | New Delhi",
    date: "Apr 2020 – Mar 2021",
    details: "Percentage: 78%",
    icon: <GraduationCap size={20} color="#fff" />
  },
  {
    type: "extracurricular",
    title: "Club Member & Event Volunteer",
    institution: "OPTIMUS Club & E-sports Event",
    date: "Feb 2025",
    details: "Contributed to club activities and assisted with event coordination and participant management.",
    icon: <Star size={20} color="#fff" />
  }
];

const Timeline = () => {
  return (
    <section className="section container">
      <h2 className="section-title">Experience & <span className="title-gradient">Education</span></h2>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Line */}
        <div style={{ 
          position: 'absolute', 
          left: '20px', 
          top: 0, 
          bottom: 0, 
          width: '2px', 
          background: 'linear-gradient(to bottom, var(--accent-pink), var(--accent-darkblue))',
          borderRadius: '2px'
        }}></div>

        {timelineData.map((item, index) => (
          <div key={index} style={{ 
            position: 'relative', 
            paddingLeft: '3.5rem', 
            marginBottom: index === timelineData.length - 1 ? 0 : '3rem'
          }}>
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '4px',
              top: '0',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: item.type === 'education' ? 'var(--accent-darkblue)' : item.type === 'training' ? 'var(--accent-pink)' : '#ff9a9e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(0,0,0,0.5), inset 0 0 0 4px var(--bg-color)',
              zIndex: 2
            }}>
              {item.icon}
            </div>

            <div className="glass-card" style={{ padding: '1.5rem 2rem' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '0.25rem 0.75rem', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '4px', 
                fontSize: '0.8rem', 
                color: 'var(--accent-pink)',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {item.date}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <div style={{ color: 'var(--accent-darkblue)', fontWeight: 500, marginBottom: '1rem', fontSize: '0.9rem' }}>
                {item.institution}
              </div>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
