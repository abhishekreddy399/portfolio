import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ alignItems: "center" }}>
        <Col md="4" className="footer-copywright">
          <h3>Designed &amp; Developed by <span style={{ color: "#c084fc" }}>Abhishek Tiramareddi</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <span style={{ color: "#c084fc" }}>AT</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "12px", padding: 0, margin: 0 }}>
            <li className="social-icons">
              <a
                href="https://github.com/abhishekreddy399"
                style={{ color: "rgba(255,255,255,0.7)" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhishek-tiramareddi/"
                style={{ color: "rgba(255,255,255,0.7)" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/abhiiiiii_rx/"
                style={{ color: "rgba(255,255,255,0.7)" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
