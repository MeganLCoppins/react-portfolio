import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    const location = useLocation();
    return (
    <div className="sidenav">
        <div className="circlePic">
        <img className="fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=XpMsl72ympRvdjy0LMFRQa1pI7J_1aaTNeG5tLEHGag" alt="Me"></img>
        </div>
        <div className="icons">
           <a href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"> <img  src="https://library.kissclipart.com/20190908/aee/kissclipart-github-icon-logo-icon-media-icon-b93d26ddc375e57b.png" alt="github"></img></a>
           <a href="www.linkedin.com/in/megan-coppins-aaaa00133" target="_blank" rel="noopener noreferrer"> <img  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" alt="linkedin"></img></a>
           <a href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img src="https://image.flaticon.com/icons/png/512/14/14573.png" alt="resume"></img></a>
        </div>
    <nav>
        <ul className="list-unstyled">
        <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
        </li>
        </ul>
        {/* <a href="#home"
        onClick={() => props.handlePageChange("Home")}
        currentPage={props.currentPage === "Home"}
        >Home</a>
        <a href="#about"
        onClick={() => props.handlePageChange("About")}
        className={props.currentPage === "About"}
        >About</a>
        <a href="#portfolio"
        onClick={() => props.handlePageChange("Portfolio")}
        className={props.currentPage === "Portfolio"}
        >Portfolio</a>
        <a href="#contact"
        onClick={() => props.handlePageChange("Contact")}
        className={props.currentPage === "Contact"}
        >Contact</a> */}
    </nav>
    </div>
    );
}

export default Navbar;