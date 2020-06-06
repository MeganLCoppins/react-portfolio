import React from "react";
import html from "../../assets/html_icon.png";
import css from "../../assets/css_icon.png";
import bootstrap from "../../assets/bootstrap_icon.png";
import javascript from "../../assets/javascript-icon.png";
import mysql from "../../assets/mysql_icon.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import "../style/about.css";

function About() {
  return (
    <div className="about wrap">
    <h1>About Me</h1>

      <div className="desc">
        <p>
          Full Stack Web Developer with a passion for solving complex
          challenges. While working in the nutrition field I developed a passion
          for coding. I found that coding fullfills what I am longing for in a
          career, which is to be able to continuously expand on my knowledge, utilize my problem solving skills, and help others by building useful,
          efficient, and aesthetically pleasing applications. I pursued my
          passion for coding and recently graduated with a Full Stack Web
          Development certificate from the University of Arizona Coding Boot Camp. I am eager to both apply and continue to expand on my knowledge in my career as a web developer.
        </p>

        <div className="aboutImg ">
          <img
            className="img-fluid imgOne"
            src={html}
            alt="html5"
          ></img>
          <img
            className="img-fluid"
            src={css}
            alt="css3"
          ></img>
          <img
            className="img-fluid"
            src={bootstrap}
            alt="bootstrap"
          ></img>
          <img
            className="img-fluid"
            src={javascript}
            alt="js"
          ></img>
          <img
            className="img-fluid"
            src={node}
            alt="node.js"
          ></img>
          <img
            className="img-fluid"
            src={react}
            alt="react"
          ></img>
          <img
            className="img-fluid"
            src={mysql}
            alt="MySQL"
          ></img>
          <img
            className="img-fluid"
            src={mongodb}
            alt="mongoDB"
          ></img>
        </div>

      <div className="boxes">
        <div className="skills">
          <h5>Skilled In:</h5>
          <p>
            HTML, CSS, JavaScript, jQuery, UI/UX Design, Responsive Web Design,
            Bootstrap, React, Node.js, Express, MySQL, MongoDB, MERN Stack, Git,
            Heroku
          </p>
        </div>
        <div className="experience">
          <h5>Experience With:</h5>
          <p>Bulma, Handlebars, Glide.js, Passport, Auth0, Socket.io</p>
        </div>
      </div>
      </div>
      <div style={{ clear: "left" }}></div>
    </div>
  );
}

export default About;
