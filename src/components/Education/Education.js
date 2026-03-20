import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MdSchool } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

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

function Education() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Particle />
      <section className="education-section">
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Section header */}
          <div className="edu-header">
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
                ref={(el) => (itemRefs.current[idx] = el)}
                style={{ transitionDelay: `${idx * 0.18}s` }}
              >
                {/* Content — floating text block, no box */}
                <div
                  className={`edu-text edu-text-${item.side}`}
                  tabIndex={0}
                >
                  <p className="edu-years">{item.years}</p>
                  <h2 className="edu-institution">{item.institution}</h2>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-stream">{item.stream}</p>
                  <p
                    className={`edu-location edu-location-${item.side}`}
                  >
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
        </Container>
      </section>
    </>
  );
}

export default Education;
