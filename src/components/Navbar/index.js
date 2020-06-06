import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import myPhoto from "../../assets/myphoto.png";
import "../../assets/nav_background.jpg";
import resume from "../../assets/portfolio_icon.png";
import github from "../../assets/github_icon.png";
import linkedin from "../../assets/linkedin.png";
import "./style.css";

function TopNav() {
  return (
    <Navbar
      variant="dark"
      fixed="top"
      style={{
        backgroundImage:
          "url(https://cdn1.vectorstock.com/i/1000x1000/71/15/abstract-irregular-polygon-background-pastel-vector-16267115.jpg)",
        fontFamily: "'Pacifico', cursive",
      }}
    >
      <div className="myPhoto">
        <img src={myPhoto} alt="Me"></img>
      </div>
      <div>
        <NavDropdown
          title="Megan Coppins"
          id="collasible-nav-dropdown"
          className="dropdown"
        >
          <NavDropdown.Item
            href="#home"
            style={{ color: "black", fontSize: "25px" }}
          >
            Home
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#about"
            style={{ color: "black", fontSize: "25px" }}
          >
            About
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#portfolio"
            style={{ color: "black", fontSize: "25px" }}
          >
            Portfolio
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#contact"
            style={{ color: "black", fontSize: "25px" }}
          >
            Contact
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            style={{ display: "flex", paddingLeft: "40%" }}
            href="https://github.com/MeganLCoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={github} alt="github"></img>
          </NavDropdown.Item>
          <NavDropdown.Item
            style={{ display: "flex", paddingLeft: "40%" }}
            href="https://linkedin.com/in/meganlcoppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={linkedin} alt="linkedin"></img>
          </NavDropdown.Item>
          <NavDropdown.Item
            style={{ display: "flex", paddingLeft: "40%" }}
            href="https://docs.google.com/document/d/1lhn3SBdrLm5w7USTxYUEZpjXkHWvaa75mPgOB6cZwNY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fluid" src={resume} alt="resume"></img>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
}

export default TopNav;
