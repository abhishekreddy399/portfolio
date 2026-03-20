import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { IoLocationSharp, IoTimeOutline, IoBriefcaseOutline } from "react-icons/io5";
import avatarImg from "../../Assets/avatar.svg";

const experienceData = [
  {
    id: 1,
    duration: "JUN 2025 – AUG 2025",
    company: "GokBoru Tech",
    role: "Cloud Computing Trainee",
    location: "Gurgaon, India",
    type: "Remote work",
    description: "Completed a virtual training program focused on cloud computing fundamentals, including cloud architecture, deployment models, and scalable infrastructure. Gained hands-on exposure to modern cloud technologies and learned how cloud platforms support real-world applications.",
    tags: ["AWS", "Python", "REST APIs", "DevOps Tools", "Microservices"]
  },
  {
    id: 3,
    duration: "JUN 2025 – SEP 2025",
    company: "Freelance (Fiverr)",
    role: "Web Developer Intern",
    location: "Remote",
    type: "Remote work",
    description: "Built modern and production-ready websites for international clients. Delivering responsive UIs using Next.js and React while ensuring high performance and cross-device compatibility. Collaborated with global clients to implement new features.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  }
];

function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("exp-revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current.querySelectorAll(".exp-item-row");
    items.forEach((item) => observer.observe(item));

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineHeight = rect.height;
        
        // Calculate progress based on when the timeline enters the middle of the screen
        let progress = (windowHeight / 2 - rect.top) / timelineHeight;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="experience-new-section" ref={sectionRef}>
      <Container>
        <div className="edu-header">
          <p className="edu-label">THE EXPERIENCE</p>
          <h1 className="edu-main-title">
            Experience That <br /> Brings <span className="edu-gradient-word">Ideas to Life</span>
          </h1>
        </div>

        <div className="exp-new-timeline" ref={timelineRef}>
          {/* Vertical Glowing Line */}
          <div className="exp-new-line"></div>

          {/* Moving Scrolling Icon */}
          <div 
            className="exp-scrolling-icon-wrapper"
            style={{ top: `${scrollProgress}%` }}
          >
            <div className="exp-scrolling-node">
              <img src={avatarImg} alt="scrolling-icon" className="exp-avatar-scroll" />
              <div className="exp-node-glow-ring"></div>
            </div>
          </div>

          {experienceData.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`exp-item-row ${index % 2 === 0 ? "exp-row-right" : "exp-row-left"}`}
            >
              {/* Static Timeline Node */}
              <div className="exp-new-node">
                <div className="node-pulse"></div>
              </div>

              {/* Experience Card */}
              <div className="exp-new-card">
                <div className="exp-card-header">
                  <div className="exp-date-pills">
                    <IoTimeOutline /> {exp.duration}
                  </div>
                  <div className="exp-type-tag">{exp.type}</div>
                </div>

                <h2 className="exp-new-company">{exp.company}</h2>
                <h3 className="exp-new-role">
                  <IoBriefcaseOutline className="me-2" /> {exp.role}
                </h3>
                
                <div className="exp-new-location">
                  <IoLocationSharp className="me-1" /> {exp.location}
                </div>

                <p className="exp-new-desc">{exp.description}</p>

                <div className="exp-new-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="exp-new-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
