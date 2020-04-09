import React from "react";
import "./styles.css";

function Navbar(){
    return (
    <div className="sidenav">
        <img className="fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=XpMsl72ympRvdjy0LMFRQa1pI7J_1aaTNeG5tLEHGag" alt="image of me"></img>
        <div className="icons">
           <a href="https://github.com/MeganLCoppins" target="_blank"> <img  src="https://library.kissclipart.com/20190908/aee/kissclipart-github-icon-logo-icon-media-icon-b93d26ddc375e57b.png"></img></a>
           <a href="www.linkedin.com/in/megan-coppins-aaaa00133" target="_blank"> <img  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png"></img></a>
           <a href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank"> <img src="https://image.flaticon.com/icons/png/512/14/14573.png"></img></a>
        </div>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>
    </div>
    );
}

export default Navbar;