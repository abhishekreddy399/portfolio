import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./ContactDrawer.css";

function ContactDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className={`contact-drawer-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className={`contact-drawer-content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-handle" onClick={onClose}></div>

        <div className="drawer-header">
          <div className="drawer-socials">
            <a href="https://www.linkedin.com/in/abhishek-tiramareddi/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/abhishekreddy399" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>

          <div className="drawer-tabs">
            <button className="drawer-tab full-width active">Contact Form</button>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // Use Formspree to send email in background
            // Replace 'mjvnrqov' with your own Formspree ID after signing up
            const response = await fetch("https://formspree.io/f/xyknvgal", {
              method: "POST",
              headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(formData),
            });

            if (response.ok) {
              alert("Message sent successfully!");
              onClose();
              setFormData({ name: "", email: "", message: "" });
            } else {
              alert("Wait, there was an error sending the message. Please try again or use the socials!");
            }
          }}
          className="drawer-form"
        >
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Message</label>
              <span className="char-count">0/1000</span>
            </div>
            <textarea
              name="message"
              placeholder="What would you like to discuss?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            <FaPaperPlane /> Send message
          </button>
        </form>

        <div className="status-footer">
          <span className="status-dot"></span>
          Currently available for new opportunities
        </div>
      </div>
    </div>
  );
}

export default ContactDrawer;
