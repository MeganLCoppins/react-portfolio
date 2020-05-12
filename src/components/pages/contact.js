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
        <a href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"> <img className="fluid"  
        src={github}
        // src="https://pngimg.com/uploads/github/github_PNG83.png" 
        
        alt="github"></img></a>
        <a href="https://linkedin.com/in/meganlcoppins" target="_blank" rel="noopener noreferrer"> <img className="fluid"  
        src={linkedin}
        // src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" 
        alt="linkedin"></img></a>
        <a href="https://docs.google.com/document/d/1lhn3SBdrLm5w7USTxYUEZpjXkHWvaa75mPgOB6cZwNY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img className="fluid" 
        src={resume}
        // src="https://image.flaticon.com/icons/png/512/14/14573.png" 
        
        alt="resume"></img></a>

      <div className="form" >
        <a href="mailto:meganlcoppins@gmail.com?subject=Requesting%20 Info"><h3>MeganLCoppins@gmail.com</h3></a>
      </div>
      </div>
    </div>
  );
}

export default Contact;
