import React from "react";
import { Container } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import { VscLayers } from "react-icons/vsc";

// Import project images
import server from "../../Assets/Projects/s.png";
import s from "../../Assets/Projects/s1.png";
import suicide from "../../Assets/Projects/civic.png";

const projectsData = [
  {
    id: 1,
    imgPath: server,
    title: "AWS",
    subtitle: "Serverless Image Resizer",
    description: "A serverless image processing platform built on AWS that dynamically resizes, compresses, and optimizes images on demand. It leverages cloud-native services to deliver fast, scalable image transformations without managing servers.",
    ghLink: "https://github.com/abhishekreddy399/Serverless-image-resizer",
    demoLink: "https://github.com/abhishekreddy399/Serverless-image-resizer",
    tags: ["NodeJs", "React", "AWS", "Docker",],
  },
  {
    id: 2,
    imgPath: s,
    title: "SalonEase",
    subtitle: "Smart Appointment Booking Platform",
    description: "A modern salon appointment booking system that allows customers to schedule services, manage bookings, and receive real-time availability updates. It streamlines appointment management for both customers and salon staff.",
    ghLink: "https://github.com/abhishekreddy399/Salon-appointment-system",
    demoLink: "https://github.com/abhishekreddy399/Salon-appointment-system",
    tags: ["Next.js", "TypeScript", "React", "XMTP (v3)", "MongoDB"],
  },
  {
    id: 3,
    imgPath: suicide,
    title: "civicSense",
    subtitle: "Smart Civic Issue Reporting Platform",
    description: "A civic engagement platform that enables citizens to report local issues such as infrastructure problems, sanitation concerns, and public service complaints while allowing authorities to track and manage them efficiently.",
    ghLink: "https://github.com/abhishekreddy399/civicSense",
    demoLink: "https://github.com/abhishekreddy399/civicSense",
    tags: ["NodeJs", "Tailwind CSS", "React", "MongoDB", "Docker"],
  },
];

function Projects() {
  return (
    <section className="projects-page-wrapper">
      <Container fluid className="project-section">
        {/* Landing Section (Third Photo) */}
        <div className="projects-landing-header">
          <div className="landing-icon-wrapper">
            <VscLayers className="landing-icon" />
          </div>
          <h1 className="projects-main-title">
            Featured <span className="title-gradient">Projects</span>
          </h1>
          <p className="projects-main-subtitle">
            A collection of my recent work, experiments, and side projects. Each piece 
            represents a journey of learning and problem-solving.
          </p>
        </div>

        {/* Projects List (First and Second Photos) */}
        <Container className="projects-list-container">
          {projectsData.map((project, index) => (
            <ProjectItem 
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
