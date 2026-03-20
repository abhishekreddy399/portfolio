import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm{" "} <b className="purple">Abhishek</b>
              <br />
              <br />
              A <b className="purple">creative engineer</b> building 
              <i>
                <b className="purple"> scalable cloud systems</b>.
              </i>
              <br />
              <br />
              I specialize in 
              <i>
                <b className="purple"> DevOps, automation, </b>
              </i>
              and 
              <i>
                <b className="purple"> cloud-native solutions</b>.
              </i>
              <br />
              <br />
              I have a solid foundation in 
              <i>
                <b className="purple"> C++, Java, and Go</b>
              </i>
              , and I love tackling algorithmic challenges via 
              <i>
                <b className="purple"> competitive programming</b>.
              </i>
              <br />
              <br />
              Whenever I can, I apply my skills to build high-performance 
              <i>
                <b className="purple"> cloud environments</b>
              </i>
              using 
              <i>
                <b className="purple"> Docker, Kubernetes, </b>
              </i> 
              and 
              <i>
                <b className="purple"> Terraform</b>
              </i>
              , while also creating modern interfaces with 
              <i>
                <b className="purple"> React.js </b>
              </i>
              and 
              <i>
                <b className="purple"> Next.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#c084fc"
              glarePosition="all"
              glareBorderRadius="50%"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={2000}
            >
              <img src={myImg} className="img-fluid" alt="avatar" style={{
                filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))"
              }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
