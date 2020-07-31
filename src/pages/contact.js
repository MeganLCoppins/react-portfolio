import React from "react";
import Layout from "../components/layout";
import github from "../images/github_icon.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/portfolio_icon.png";
import MyForm from "../components/myform";
import myImage from "../images/photoOfMe.png";
import "../style/contact.css";

export default function Contact() {
  return (
    <Layout>
      <div id="heading">
        <h1>Let's Get in Contact!</h1>
        <div className="form">
          <a
            href="https://github.com/MeganLCoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={github} alt="github"></img>
          </a>
          <a
            href="https://linkedin.com/in/meganlcoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={linkedin} alt="linkedin"></img>
          </a>
          <a
            href="https://docs.google.com/document/d/1lhn3SBdrLm5w7USTxYUEZpjXkHWvaa75mPgOB6cZwNY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={resume} alt="resume"></img>
          </a>
        </div>
      </div>
      <div className="backgroundImg">
        <MyForm/>
      </div>
      <footer>
        <h5>Copyright © 2020 Megan Coppins. All rights reserved.</h5>
      </footer>
    </Layout>
  );
}
