import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <div className="contact">
          <h1>Let's Get In Touch!</h1>
      <div className="backgroundImg">
        <a href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"> <img fluid src="https://pngimg.com/uploads/github/github_PNG83.png" alt="github"></img></a>
        <a href="https://linkedin.com/in/meganlcoppins" target="_blank" rel="noopener noreferrer"> <img fluid src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" alt="linkedin"></img></a>
        <a href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img fluid src="https://image.flaticon.com/icons/png/512/14/14573.png" alt="resume"></img></a>
      </div>
      <div className="form">
        <h3>MeganLCoppins@gmail.com</h3>
      </div>
    </div>
  );
}

export default Contact;
