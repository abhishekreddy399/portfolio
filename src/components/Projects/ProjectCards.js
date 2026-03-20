import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>

        {/* Tags */}
        {props.tags && (
          <div style={{ marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {props.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: "rgba(168, 85, 247, 0.18)",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                  color: "#c084fc",
                  borderRadius: "20px",
                  padding: "2px 10px",
                  fontSize: "0.75em",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", flex: 1 }}>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "auto", paddingTop: "12px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub style={{ marginRight: "6px" }} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite style={{ marginRight: "6px" }} />
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
