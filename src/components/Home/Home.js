import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" style={{ animation: "fadeInLeft 0.9s ease-out both" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name">ABHISHEK TIRAMAREDDI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", paddingTop: 10 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, animation: "fadeInRight 0.9s ease-out 0.2s both" }} className="home-img-col">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#c084fc"
                glarePosition="all"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                transitionSpeed={2500}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
        
        {/* Scroll Down Indicator */}
        <div className="scroll-indicator-wrapper">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-arrows a1"></span>
            <span className="scroll-arrows a2"></span>
            <span className="scroll-arrows a3"></span>
          </div>
        </div>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px", position: "relative", zIndex: 10 }}>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
              Find Me <span className="purple">Online</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: "30px" }}>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhishekreddy399"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-tiramareddi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abhiiiiii_rx/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
