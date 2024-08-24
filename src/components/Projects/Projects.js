import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Artifi"
              description="Our client wanted an application that could be listed on the Salesforce Appexchange. The application would be used to connect Salesforce and their application used for product customisation. Led a team of 4 developers in developing a customizable link cartridge for enhanced product personalization."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.artifilabs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Conair"
              description="Personal Care Products. The client wanted to migrate to B2C from their existing platform"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.conair.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Scunci"
              description="Ecommerce site for Hair care and beauty products."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.scunci.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Aarch Merchant Tools"
              description=" Link cartridge for providing multi-vendor product list functionality. Worked on cartridge creation including features that allowed the vendors to register
over and enter their details."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://products.cyntexa.com/aarchmerchanttool/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Waring"
              description="Waring Commercial offers high-performance, large-volume food processors and blenders, heavy-duty heating appliances such as grills, griddles, toasters and deep fryers, and a variety of specialty products."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.waring.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tanishq"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.tanishq.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
