import React from "react";
import Layout from "../components/layout";
import github from "../images/github_icon.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/portfolio_icon.png";
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
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfghwHNFUpa-XQ_YRz70q-_t36Sv9WMNop3yP49P3x-wBgRSA/viewform?embedded=true"
          width="800"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
}
