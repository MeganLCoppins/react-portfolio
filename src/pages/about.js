import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import me from "../images/photoOfMe.png";
import "../style/about.css";

export default function About() {
  return (
    <Layout>
      <div>
        <Header />
        <div id="languages">
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "inline-flex",
                width: "100%",
                overflow: "scroll",
              }}
            >
              <li>HTML</li>
              <li>|</li>
              <li>CSS</li>
              <li>|</li>
              <li>Bootstrap</li>
              <li>|</li>
              <li>JavaScript</li>
              <li>|</li>
              <li>jQuery</li>
              <li>|</li>
              <li>React </li>
              <li>|</li>
              <li>Node</li>
              <li>|</li>
              <li>Express</li>
              <li>|</li>
              <li>MySQL</li>
              <li>|</li>
              <li>MongoDB</li>
              <li>|</li>
              <li>MERN</li>
            </div>
          </div>
        </div>
        <div id="desc">
          <div id="aboutMe">
            <img src={me} alt="me" />
            <p
              style={{
                display: "inline",
                margin: "5%",
              }}
            >
              Full Stack Web Developer with a passion for solving complex
              challenges. While working in the nutrition field I developed a
              passion for coding. I found that coding fullfills what I am
              longing for in a career, which is to be able to continuously
              expand on my knowledge, utilize my problem solving skills, and
              help others by building useful, efficient, and aesthetically
              pleasing applications. I pursued my passion for coding and
              recently graduated with a Full Stack Web Development certificate
              from the University of Arizona Coding Boot Camp. I am eager to
              both apply and continue to expand on my knowledge in my career as
              a web developer.
            </p>
          </div>
        </div>

        <div id="experience">
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "inline-flex",
                width: "100%",
                overflow: "scroll",
                marginLeft: "1%",
                marginBottom: "10%",
              }}
            >
              <li>Handlebars</li>
              <li>|</li>
              <li>GatsbyJS</li>
              <li>|</li>
              <li>Passport</li>
              <li>|</li>
              <li>Auth0</li>
              <li>|</li>
              <li>Bulma</li>
              <li>|</li>
              <li>Socket.io</li>
              <li>|</li>
              <li>React Beautiful Drag N Drop</li>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
