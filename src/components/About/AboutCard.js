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
            I am currently employed as a Software Development Senior Analyst at Accenture.
            <br />
            <br />
            I am   <i><b className="purple"> 12x Salesforce certified </b></i> Professional.
            <br />
            <br />
            With             <i><b className="purple"> 4+  </b></i>            years of hands-on expertise in the industry. I possess a strong background in 
            <i><b className="purple"> Sales Cloud/Commerce cloud (SFRA) </b></i>
            complemented by proficiency in Node.js, jQuery,LWC, Apex and Bootstrap.
            <br />
            <br />
            Beyond my core expertise in above Cloud, I have a solid foundation in other clouds such as <i><b className="purple">Service Cloud, Data Cloud, and Experience Cloud </b></i> , allowing me to address a broader spectrum of business needs.


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
              <ImPointRight /> Playing Volleyball
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
