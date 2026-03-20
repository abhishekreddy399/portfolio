import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abhishek Tiramareddi</span>{" "}
            from <span className="purple">Andhra Pradesh, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">
              Software Engineer passionate about DevOps and Cloud Engineering
            </span>
            .
            <br />
            I enjoy building reliable, scalable systems using{" "}
            <span className="purple">Docker, Kubernetes, CI/CD pipelines</span>{" "}
            and cloud platforms like{" "}
            <span className="purple">AWS, GCP, and Azure</span>.
            <br />
            Alongside system engineering, I’m also interested in{" "}
            <span className="purple">competitive programming</span>, where I 
            enjoy solving algorithmic problems in C++ and JavaScript.
            <br />
            <br />
            Outside of tech, I love engaging in activities that keep me
            creative and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Coding 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cloud & DevOps Tools ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep automating, keep improving."{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Tiramareddi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
