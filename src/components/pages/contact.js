import React from "react";
import "../style/contact.css";
import resume from "../../assets/portfolio_icon.png";
import github from "../../assets/github_icon.png";
import linkedin from "../../assets/linkedin_icon.webp";

function Contact() {
  return (
    <div className="contact">
      <h1>Let's Get In Touch!</h1>
      <div className="backgroundImg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfghwHNFUpa-XQ_YRz70q-_t36Sv9WMNop3yP49P3x-wBgRSA/viewform?embedded=true"
          width="1200"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        <div className="form">
          <a
            href="https://github.com/MeganLCoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="fluid" src={github} alt="github"></img>
          </a>
          <a
            href="https://linkedin.com/in/meganlcoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="fluid" src={linkedin} alt="linkedin"></img>
          </a>
          <a
            href="https://docs.google.com/document/d/1lhn3SBdrLm5w7USTxYUEZpjXkHWvaa75mPgOB6cZwNY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="fluid" src={resume} alt="resume"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
