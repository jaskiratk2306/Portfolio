import React from 'react';
import { Trophy, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "LeetCode Problem Solver",
    date: "Feb 2026",
    details: "Solved 140+ problems with an 82% acceptance rate.",
    icon: <CheckCircle size={24} color="#00b09b" />
  },
  {
    title: "HackerRank Silver Badge (C++)",
    date: "Jan 2026",
    details: "Demonstrated strong problem-solving skills in C++.",
    icon: <Trophy size={24} color="#f6d365" />
  }
];

const certificates = [
  {
    img: "/cert1.png",
    pdf: "/cert1.pdf",
    title: "Natural Language Processing",
    issuer: "NPTEL",
    date: "Apr 2025"
  },
  {
    img: "/cert2.png",
    pdf: "/cert2.pdf",
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    date: "Nov 2024"
  },
  {
    img: "/cert3.png",
    pdf: "/cert3.pdf",
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    date: "Sep 2024"
  }
];

const Achievements = () => {
  return (
    <section id="Achievements" className="section container">
      <h2 className="section-title">
        <span className="title-gradient">Achievements</span> & Certifications
      </h2>

     
      <div style={{ marginBottom: "3rem" }}>
        <h3
          style={{
            fontSize: '1.5rem',
            borderBottom: '1px solid var(--glass-border)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem'
          }}
        >
          Highlights
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px'
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: "5px" }}>
                  {item.title}
                </h4>

                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-darkblue)',
                    marginBottom: '5px'
                  }}
                >
                  {item.date}
                </div>

                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CERTIFICATIONS (BOTTOM) */}
      <div>
        <h3
          style={{
            fontSize: '1.5rem',
            borderBottom: '1px solid var(--glass-border)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem'
          }}
        >
          Certifications
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "12px",
                  cursor: "pointer"
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.querySelector("img").style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.querySelector("img").style.transform = "scale(1)")
                }
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    transition: "0.3s"
                  }}
                />

                <div
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    {cert.title}
                  </p>

                  <p style={{ margin: "6px 0", fontSize: "0.85rem", color: "#777" }}>
                    {cert.issuer}
                  </p>

                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#999" }}>
                    {cert.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;