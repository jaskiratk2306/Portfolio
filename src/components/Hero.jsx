import React, { useState } from "react";
import { Github, Linkedin, Mail, CheckCircle, FileText } from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("jaskiratkaur461@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "0 5%",
        position: "relative",
      }}
    >
      {/* 🔥 TOP RIGHT CONTACT BUTTON */}
      <button
        onClick={() => {
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          });
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "40px",
          padding: "10px 20px",
          background: "#ff2d75",
          color: "white",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "500",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        Contact Me
      </button>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
          gap: "60px",
          width: "100%",
        }}
      >
        {/* LEFT */}
        <div>
          <h2
            style={{
              fontSize: "1.2rem",
              letterSpacing: "2px",
              color: "#ff2d75",
              marginBottom: "15px",
            }}
          >
            PORTFOLIO
          </h2>

          <h1
            style={{
              fontSize: "clamp(3rem,7vw,5rem)",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Hi, I'm <br />
            <span style={{ color: "#ff2d75" }}>Jaskirat Kaur</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              maxWidth: "550px",
              marginBottom: "40px",
            }}
          >
            A passionate Software Engineer & Web Developer crafting modern,
            interactive applications and solving complex problems with elegant
            code.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="https://github.com/jaskiratk2306"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 18px",
                background: "#ff2d75",
                color: "white",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jaskirat-kaur-js/"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 18px",
                border: "1px solid #ccc",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              <Linkedin size={20} /> LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 18px",
                background: "#111",
                color: "white",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <FileText size={20} /> Resume
            </a>

            <button
              onClick={handleEmailClick}
              style={{
                padding: "10px 18px",
                border: "1px solid #ccc",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "white",
                cursor: "pointer",
              }}
            >
              {copied ? (
                <CheckCircle size={20} color="#ff2d75" />
              ) : (
                <Mail size={20} />
              )}
              {copied ? "Copied!" : "Email"}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/profile.jpeg"
            alt="Jaskirat"
            style={{
              width: "100%",
              maxWidth: "400px",
              aspectRatio: "1/1",
              objectFit: "contain",
              objectPosition: "center top",
              clipPath:
                "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              border: "6px solid #ff2d75",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;