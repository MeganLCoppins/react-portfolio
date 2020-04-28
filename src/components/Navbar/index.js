import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        height: "18%",
      }}
    >
      <div className="myPhoto" >
        <img
          // className="fluid"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=1Xj4vKrYG9yo4V0PEp3G142F7t7HhODMdjTXaKwZO_U"
          alt="Me"
        ></img>
      </div>
      <div>
        <NavDropdown
          title="Megan Coppins"
          id="collasible-nav-dropdown"
          className="dropdown"
        >
          <NavDropdown.Item
            href="#home"
            style={{ color: "rgb(247, 50, 116)", fontSize: "25px" }}
          >
            Home
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#about"
            style={{ color: "rgb(247, 50, 116)", fontSize: "25px" }}
          >
            About
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#portfolio"
            style={{ color: "rgb(247, 50, 116)", fontSize: "25px" }}
          >
            Portfolio
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#contact"
            style={{ color: "rgb(247, 50, 116)", fontSize: "25px" }}
          >
            Contact
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item style={{ display: "flex", paddingLeft: "40%" }}
            href="https://github.com/MeganLCoppins"
            target="_blank"
            rel="noopener noreferrer">
            <img className="fluid"
              src="https://pngimg.com/uploads/github/github_PNG83.png"
              alt="github"
            ></img>
          </NavDropdown.Item>
          <NavDropdown.Item style={{ display: "flex", paddingLeft: "40%" }}
            href="https://linkedin.com/in/meganlcoppins"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="fluid"
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png"
              alt="linkedin"
            ></img>
          </NavDropdown.Item>
          <NavDropdown.Item style={{ display: "flex", paddingLeft: "40%" }}
            href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="fluid"
              src="https://image.flaticon.com/icons/png/512/14/14573.png"
              alt="resume"
            ></img>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
}

export default TopNav;
