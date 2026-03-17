import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    // Debug: log form values
    const formData = new FormData(form.current);
    console.log("Form Data:", Object.fromEntries(formData.entries()));

    emailjs
      .sendForm(
        "service_2siy9ob",     // Your Service ID
        "template_hlx6fga",    // Your Template ID
        form.current,
        "svcl48I-KCeKBrrzj"   // Your Public Key
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error("ERROR:", err.text || err);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section
      id="Contact"
      className="section container"
      style={{ textAlign: "center", paddingTop: "100px" }}
    >
      <h2 className="section-title">
        Get In <span className="title-gradient">Touch</span>
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="glass-card"
        style={{
          maxWidth: "500px",
          margin: "auto",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={{ padding: "0.8rem", borderRadius: "8px" }}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={{ padding: "0.8rem", borderRadius: "8px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          style={{ padding: "0.8rem", borderRadius: "8px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            borderRadius: "25px",
            border: "none",
            background: loading ? "#999" : "#ff2d75",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "500",
          }}
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>

        {success && <p style={{ color: "green" }}>✅ Message sent successfully!</p>}
        {error && <p style={{ color: "red" }}>❌ Something went wrong. Try again.</p>}
      </form>
    </section>
  );
};

export default Contact;