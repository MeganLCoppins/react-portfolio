import React from "react";
import "./styles.css";

function Navbar(){
    return (
    <div className="sidenav">
    <nav className="navbar navbar-expand-lg">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=XpMsl72ympRvdjy0LMFRQa1pI7J_1aaTNeG5tLEHGag" alt="image of me"></img>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </nav>
    </div>
    );
}

export default Navbar;