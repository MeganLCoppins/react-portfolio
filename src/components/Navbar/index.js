import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar(){
    const location = useLocation();
    return (
    <div className="sidenav">
        
        <div className="circlePic">
            <img className="fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=1Xj4vKrYG9yo4V0PEp3G142F7t7HhODMdjTXaKwZO_U" alt="Me"></img>
        </div>
        <h3>Megan Coppins</h3>
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
    </nav>
    <div className="icons">
           <a href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"> <img  src="https://library.kissclipart.com/20190908/aee/kissclipart-github-icon-logo-icon-media-icon-b93d26ddc375e57b.png" alt="github"></img></a>

           <a href="www.linkedin.com/in/meganlcoppins" target="_blank" rel="noopener noreferrer"> <img  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" alt="linkedin"></img></a>

           <a href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img src="https://image.flaticon.com/icons/png/512/14/14573.png" alt="resume"></img></a>
        </div>
    </div>
    );
}

export default Navbar;