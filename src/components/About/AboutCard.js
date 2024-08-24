import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Piyush Sharma </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />
            I am currently employed as a Senior Software Developer at Cyntexa.
            <br />
            <br />
            I am   <i><b className="purple"> 6x Salesforce certified </b></i> Professional.
            <br />
            <br />
            With             <i><b className="purple"> Four </b></i>            years of hands-on expertise in the industry. I possess a strong background in 
            <i><b className="purple"> SFCC/SFRA </b></i>
            complemented by proficiency in Node.js, jQuery, and Bootstrap.
            <br />
            <br />

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling / Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Vollerball
            </li>
          </ul>
          <br/>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Piyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
