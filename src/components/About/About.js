import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaCode, FaTools } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Certifications from "./Certifications";

const educationData = [
  {
    id: 1,
    years: "AUG 2023 – PRESENT",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    stream: "Computer Science and Engineering",
    location: "Punjab, India",
    score: "CGPA: 8.06",
    side: "left",
  },
  {
    id: 2,
    years: "2021 – 2023",
    institution: "Ascent Junior College",
    degree: "Intermediate (12th)",
    stream: "Science Stream",
    location: "Visakhapatnam, Andhra Pradesh",
    score: "Percentage: 96%",
    side: "right",
  },
  {
    id: 3,
    years: "2019 – 2021",
    institution: "Kakatiya Public School",
    degree: "Matriculation (10th)",
    stream: "Science Stream",
    location: "Visakhapatnam, Andhra Pradesh",
    score: "Percentage: 94%",
    side: "left",
  },
];

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            entry.target.classList.add("edu-revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-fade-up, .edu-item");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Container fluid className="about-section">
        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* ── HERO: two-column ── */}
          <Row className="align-items-center about-hero-row">
            {/* LEFT: heading + bio + socials */}
            <Col md={6} className="about-hero-left reveal-fade-up">
              <h1 className="about-hero-heading">
                I'm{" "}
                <span className="about-hero-name">Abhishek</span>
                ,{" "}
                <span className="about-hero-tagline-block">
                  a creative{" "}
                  <span className="about-gradient-word">engineer</span>
                </span>
              </h1>

              <div className="about-hero-bio">
                <p>
                  Hi everyone! I'm{" "}
                  <span className="purple">Abhishek Tiramareddi</span> from{" "}
                  <span className="purple">Andhra Pradesh, India</span>.
                </p>
                <p>
                  I'm a{" "}
                  <span className="purple">
                    Software Engineer passionate about DevOps and Cloud Engineering
                  </span>
                  .
                </p>
                <p>
                  I enjoy building reliable, scalable systems using{" "}
                  <span className="purple">Docker, Kubernetes, CI/CD pipelines</span> and cloud
                  platforms like <span className="purple">AWS, GCP, and Azure</span>.
                </p>
                <p>
                  Alongside system engineering, I'm also interested in{" "}
                  <span className="purple">competitive programming</span>, where I enjoy solving
                  algorithmic problems in C++ and JavaScript.
                </p>
                <p>Outside of tech, I love engaging in activities that keep me creative and motivated:</p>
                <ul className="about-hero-list">
                  <li>🧠 Competitive Coding</li>
                  <li>☁️ Exploring Cloud &amp; DevOps Tools</li>
                  <li>🎮 Playing Games</li>
                </ul>
                <p className="about-quote">"Keep building, keep automating, keep improving."</p>
              </div>

              {/* Social Icons */}
              <div className="about-hero-socials" style={{ position: "relative", zIndex: 10 }}>
                <a
                  href="https://www.linkedin.com/in/abhishek-tiramareddi/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icon"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/abhishekreddy399"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icon"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-icon"
                  title="X / Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </Col>

            {/* RIGHT: stacked card profile image */}
            <Col md={6} className="about-hero-right reveal-fade-up" style={{ transitionDelay: "0.15s" }}>
              <div className="about-card-stack">
                <div className="about-card-behind-2"></div>
                <div className="about-card-behind-1"></div>
                <div className="about-card-main">
                  <img
                    src={laptopImg}
                    alt="Abhishek"
                    className="about-profile-img"
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* ── SKILLS ── */}
          <div className="reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h1 className="project-heading" style={{ textAlign: "center", marginTop: "60px" }}>
              Professional <strong className="purple">Skillset <FaCode /></strong>
            </h1>
            <p className="section-subtitle" style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", marginBottom: "35px" }}>
              Technologies I've worked with
            </p>
            <Techstack />
          </div>

          <div className="reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h1 className="project-heading" style={{ marginTop: "20px", textAlign: "center" }}>
              Tools <strong className="purple">I Use <FaTools /></strong>
            </h1>
            <p className="section-subtitle" style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", marginBottom: "35px" }}>
              My everyday development environment
            </p>
            <Toolstack />
          </div>

          <Github />

          {/* ── EDUCATION TIMELINE (integrated into About) ── */}
          <div style={{ marginTop: "80px", paddingBottom: "60px" }}>
            {/* Section header */}
            <div className="edu-header reveal-fade-up">
              <p className="edu-label">EDUCATION</p>
              <h1 className="edu-main-title">
                Academic <span className="edu-gradient-word">Background</span>
              </h1>
            </div>

            {/* Timeline */}
            <div className="edu-timeline">
              {/* Central glowing line */}
              <span className="edu-timeline-line" />

              {educationData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`edu-item edu-item-${item.side}`}
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  {/* Content – no card box, just clean text */}
                  <div className={`edu-text edu-text-${item.side}`}>
                    <p className="edu-years">{item.years}</p>
                    <h2 className="edu-institution">{item.institution}</h2>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-stream">{item.stream}</p>
                    <p className={`edu-location edu-location-${item.side}`}>
                      <IoLocationSharp className="edu-location-icon" />
                      {item.location}
                    </p>
                    <span className="edu-score-badge">{item.score}</span>
                  </div>

                  {/* Timeline node */}
                  <div className="edu-node">
                    <div className="edu-node-inner">
                      <MdSchool />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CERTIFICATIONS ── */}
          <Certifications />

        </Container>
      </Container>
    </>
  );
}

export default About;
