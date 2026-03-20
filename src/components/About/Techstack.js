import React from "react";
import { Col, Row } from "react-bootstrap";

// SVG icons from your Assets folder
import C from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Go from "../../Assets/TechIcons/go.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import NodeIcon from "../../Assets/TechIcons/Node.svg";
import NextIcon from "../../Assets/TechIcons/Next.svg";
import ReduxIcon from "../../Assets/TechIcons/Redux.svg";
import TailwindIcon from "../../Assets/TechIcons/Tailwind.svg";
import TypescriptIcon from "../../Assets/TechIcons/Typescript.svg";
import SQLIcon from "../../Assets/TechIcons/SQL.svg";
import RedisIcon from "../../Assets/TechIcons/Redis.svg";
import FirebaseIcon from "../../Assets/TechIcons/Firebase.svg";
import MUIIcon from "../../Assets/TechIcons/MUI.svg";

// React-icons for missing tech icons
import {
  SiPrometheus,
  SiGrafana,
  SiTerraform,
  SiAnsible,
  SiSonarqube,
  SiExpress,
  SiGraphql,
  SiNginx,
  SiJenkins,
  SiHtml5,
  SiCss3
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


{/* HTML5 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"32px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      {/* CSS3 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"32px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
       {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>
      
      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={NodeIcon} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      {/* Express */}
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"32px"} />
        <div className="tech-icons-text">Express</div>
      </Col>

      {/* Next.js */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={NextIcon} alt="Next.js" />
        <div className="tech-icons-text">Next.js</div>
      </Col>

        {/* Tailwind CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={TailwindIcon} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      {/* TypeScript */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={TypescriptIcon} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      
      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

       {/* SQL */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLIcon} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>


      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      {/* Go */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="Golang" />
        <div className="tech-icons-text">Golang</div>
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* Kubernetes */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="Kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      {/* Prometheus */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus fontSize={"32px"} />
        <div className="tech-icons-text">Prometheus</div>
      </Col>

      {/* Grafana */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana fontSize={"32px"} />
        <div className="tech-icons-text">Grafana</div>
      </Col>

      {/* Terraform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform fontSize={"32px"} />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      {/* Ansible */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible fontSize={"32px"} />
        <div className="tech-icons-text">Ansible</div>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* SonarQube */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube fontSize={"32px"} />
        <div className="tech-icons-text">SonarQube</div>
      </Col>

      {/* Kafka */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Kafka} alt="Kafka" style={{ width: "30px" }} />
  <div className="tech-icons-text">Kafka</div>
</Col>

{/* AWS */}
<Col xs={4} md={2} className="tech-icons">
  <img src={AWS} alt="AWS" style={{ width: "30px" }} />
  <div className="tech-icons-text">AWS</div>
</Col>



     


      {/* Redux */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReduxIcon} alt="Redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

    

     
      {/* Redis */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={RedisIcon} alt="Redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>

      {/* Firebase */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={FirebaseIcon} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      {/* MUI */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUIIcon} alt="MUI" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      {/* GraphQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql fontSize={"32px"} />
        <div className="tech-icons-text">GraphQL</div>
      </Col>

      {/* Nginx */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx fontSize={"32px"} />
        <div className="tech-icons-text">Nginx</div>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins fontSize={"32px"} />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      

    </Row>
  );
}

export default Techstack;
