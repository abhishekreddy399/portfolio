import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import "./Certifications.css";

const certificationData = [
  {
    title: "Privacy and Security in Social Media",
    provider: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1bLMHqssesAKZn5zhi74n5Lvgm3wucmTp/view"
  },
  {
    title: "Cloud Computing and Deployment",
    provider: "Gokboru",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1rZ-spxtOEh0xKia1MqULjQbPpk4CxTDZ/view"
  },
  {
    title: "TCP/IP and Advanced Topics",
    provider: "Coursera",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1YRtqA3EYbzxHnvZnxBnGQWrYh04JWRnG/view"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Coursera",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1G_8-E8D2wry2RRWQCvJVSFqTG2FgUCRD/view"
  }
];

const achievementData = [
  {
    description: "Maintained a 60-day LeetCode streak, solving 150+ problems with consistent focus on DSA patterns and optimization techniques",
    date: "Feb 2026",
    links: [{ name: "Profile", url: "https://leetcode.com/u/abhi466/" }]
  },
  {
    description: "Achieved 3★ Problem Solving badge on HackerRank, showcasing strong understanding of algorithms and data structures",
    date: "Nov 2025",
    links: [
      { name: "HackerRank", url: "https://www.hackerrank.com/profile/reddyat2005" },
  
    ]
  },
  {
    description: "Secured 3rd place in COD-A-FEST X 3.0 (National Hackathon), showcasing strong problem-solving, teamwork, and rapid prototyping abilities",
    date: "Oct 2025",
    links: []
  },
  {
    description: "Contributed to the technical management and execution of the college-level hackathon Bits & Bites 2.0.",
    date: "DEC 2024",
    links: []
  },
];

function Certifications() {
  return (
    <Container className="cert-section">
      <div className="cert-header reveal-fade-up">
        <p className="cert-label">RECOGNITION</p>
        <h1 className="cert-main-title">
          Certifications & <span className="cert-gradient-word">Achievements</span>
        </h1>
      </div>

      {/* Certifications Subsection */}
      <div className="cert-subsection reveal-fade-up">
        <div className="cert-type-indicator"></div>
        <h2 className="cert-type-title">Certifications</h2>
      </div>

      <Row className="cert-grid">
        {certificationData.map((cert, index) => (
          <Col md={6} key={index} className="cert-col reveal-fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="cert-card">
              <div className="cert-card-header">
                <h3 className="cert-title">{cert.title}</h3>
                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link-icon">
                  <FiExternalLink />
                </a>
              </div>
              <div className="cert-card-footer">
                <p className="cert-provider">{cert.provider}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Achievements Subsection */}
      <div className="cert-subsection reveal-fade-up" style={{ marginTop: "60px" }}>
        <div className="cert-type-indicator"></div>
        <h2 className="cert-type-title">Achievements</h2>
      </div>

      <div className="achievement-list">
        {achievementData.map((achieve, index) => (
          <div key={index} className="achievement-card reveal-fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon">🏆</div>
            </div>
            <div className="achievement-content">
              <p className="achievement-description">{achieve.description}</p>
              <div className="achievement-meta">
                <span className="achievement-date">{achieve.date}</span>
                {achieve.links.map((link, lIdx) => (
                  <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" className="achievement-link">
                    {link.name} <FiExternalLink className="achieve-link-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Certifications;
