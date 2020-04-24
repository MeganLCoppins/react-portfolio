import React from "react";
import "../style/about.css";

function About (){
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="aboutImg fluid">
                <img className="imageOne" src="https://icon-library.net/images/html5-icon-png/html5-icon-png-4.jpg" alt="html5"></img>
                <img src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" alt="css3"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="bootstrap"></img>
                {/* <img src="https://bulma.io/images/bulma-banner.png" alt="bulma"></img> */}
                <img src="https://i.ya-webdesign.com/images/vector-javascript-14.png" alt="js"></img>
                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="node.js"></img>
                <img src="https://www.fullstacklabs.co/img/referral/Technologies/tech_react.png" alt="react"></img>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-512.png" alt="MySQL"></img>
                <img src="https://toppng.com/uploads/preview/mongo-db-design-mongodb-logo-mongodb-11562879783bwj2cknalk.png" alt="mongoDB"></img>
            </div>
            <div className="desc">
                <p>Full Stack Web Developer with a passion for solving complex challenges. Recently graduated with a certificate from the University of Arizona Coding Boot Camp. Skilled in HTML, CSS, Bootstrap, JavaScript, UI/UX design, responsive web design, server-side development with express.js and node.js, and MySQL. Recently, as a member of a four person team, contributed to developing a full-stack application with a sign-up and login system that allows registered users to view and submit quotes, and post comments on selected quotes. Known for being a valued team member, meeting deadlines, and creative problem solving. Fueled by my life-long passion to improve the lives of others using and transform ideas into a reality.
                </p>
            </div>
        </div>
    )
}

export default About;