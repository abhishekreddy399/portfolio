import React from "react";
import { Container } from "react-bootstrap";

const items = [
  { emoji: "⚙️", text: "DevOps Automation", sub: "Docker, Kubernetes, Terraform, Ansible" },
  { emoji: "☁️", text: "Cloud Engineering", sub: "AWS, GCP & Azure Infrastructure" },
  { emoji: "🛠️", text: "CI/CD Pipelines", sub: "Deployment Automation & GitOps" },
  { emoji: "🧠", text: "Backend Development", sub: "Node.js, Go & Scalable APIs" },
  { emoji: "📊", text: "Observability & Monitoring", sub: "Prometheus, Grafana & Alerting" },
  { emoji: "🤖", text: "Competitive Programming", sub: "Problem Solving & Algorithms" },
];

function WhatIDo() {
  return (
    <Container fluid className="skills-section">
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          What <strong className="purple">I Do</strong>
        </h1>
        <p className="skills-intro">
          As a passionate engineer, I focus on building scalable systems,
          automating workflows, and exploring modern cloud-native technologies.
        </p>

        <div className="what-i-do-grid">
          {items.map((item, idx) => (
            <div key={idx} className="wid-card">
              <span className="wid-emoji">{item.emoji}</span>
              <div className="wid-content">
                <div className="wid-title">{item.text}</div>
                <div className="wid-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default WhatIDo;
