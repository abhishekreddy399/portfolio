import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function ProjectItem({ id, title, subtitle, description, imgPath, ghLink, demoLink, tags, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("item-revealed");
          }
        });
      },
      { threshold: 0.4 }
    );

    const timer = setTimeout(() => {
      if (itemRef.current) observer.observe(itemRef.current);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const isEven = index % 2 !== 0;

  return (
    <div className={`project-item-container ${isEven ? "item-reverse" : ""}`} ref={itemRef}>
      <Row className="align-items-center">
        {/* Project Image */}
        <Col lg={7} className="project-image-column">
          <div className="project-image-container-wrapper">
            {/* Aurora Glow Behind */}
            <div className="project-aurora-glow"></div>
            
            <div className="project-image-wrapper">
              <img src={imgPath} alt={title} className="img-fluid project-img" />
              <div className="project-image-overlay"></div>
            </div>
          </div>
        </Col>

        {/* Project Content */}
        <Col lg={5} className="project-content-column">
          <div className="project-content-card">
            <div className="project-index">
              <span>{index < 10 ? `0${index + 1}` : index + 1}</span>
              <div className="index-line"></div>
            </div>
            
            <h2 className="project-item-title">
              {title} <span className="title-sep">~</span> <span className="title-alt">{subtitle}</span>
            </h2>
            
            <p className="project-item-description">{description}</p>
            
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-tag-badge">{tag}</span>
              ))}
              {tags.length > 4 && <span className="project-tag-badge">+{tags.length - 4} more</span>}
            </div>
            
            <div className="project-links">
              <a href={ghLink} target="_blank" rel="noreferrer" className="project-link-github">
                <BsGithub /> <span>Source Code</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectItem;
