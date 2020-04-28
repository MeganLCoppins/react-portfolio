import React from "react";
import "../style/about.css";

function About() {
  return (
    <div className="about">
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
            className="imageOne fluid"
            src="https://icon-library.net/images/html5-icon-png/html5-icon-png-4.jpg"
            alt="html5"
          ></img>
          <img
            className="fluid"
            src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
            alt="css3"
          ></img>
          <img
            className="fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            alt="bootstrap"
          ></img>
          <img
            className="fluid"
            src="https://i.ya-webdesign.com/images/vector-javascript-14.png"
            alt="js"
          ></img>
          <img
            className="fluid"
            src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
            alt="node.js"
          ></img>
          <img
            className="fluid"
            src="https://www.fullstacklabs.co/img/referral/Technologies/tech_react.png"
            alt="react"
          ></img>
          <img
            className="fluid"
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-512.png"
            alt="MySQL"
          ></img>
          <img
            className="fluid"
            src="https://toppng.com/uploads/preview/mongo-db-design-mongodb-logo-mongodb-11562879783bwj2cknalk.png"
            alt="mongoDB"
          ></img>
        </div>
      </div>
      <div className="boxes">
        <div className="skills">
          <h5>Skilled In:</h5>
          <p>
            HTML, CSS, JavaScript/jQuery, UI/UX Design, Responsive Web Design,
            Bootstrap, React, Node.js, Express, MySQL, MongoDB, MERN Stack, Git,
            Heroku
          </p>
        </div>
        <div className="experience">
          <h5>Experience With:</h5>
          <p>Bulma, Handlebars, Glide.js, Passport, Auth0, Socket.io</p>
        </div>
      </div>
      <div style={{ clear: "left" }}></div>
    </div>
  );
}

export default About;
