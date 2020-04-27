import React from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function Navbar() {

  return (
      <Nav
      className="flex-column" style={{position: "fixed", fontFamily: "'Pacifico', cursive", backgroundImage: "url(https://cdn1.vectorstock.com/i/1000x1000/71/15/abstract-irregular-polygon-background-pastel-vector-16267115.jpg)", width: "15%", height: "100%", overflowX: "hidden"}}>
      <h3 fluid style={{color: "rgb(247, 50, 116)", textAlign: "center", marginBottom: "15%", fontSize: "40px"}}>Megan Coppins</h3>
      <div className="myPhoto" fluid>
        <img fluid 
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFdx-nOeBMxtg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=1Xj4vKrYG9yo4V0PEp3G142F7t7HhODMdjTXaKwZO_U"
          alt="Me"
        ></img>
      </div>
    <div className="navLinks">
        <div className="iconLinks">
            <Nav.Link href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"><img fluid src="https://pngimg.com/uploads/github/github_PNG83.png" alt="github"></img></Nav.Link>
            <Nav.Link href="https://linkedin.com/in/meganlcoppins" target="_blank" rel="noopener noreferrer"> <img fluid  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" alt="linkedin"></img></Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img fluid src="https://image.flaticon.com/icons/png/512/14/14573.png" alt="resume"></img></Nav.Link>
        </div>
      <Nav.Link id="linkColor" href="/react-portfolio" style={{color: "black"}}>Home</Nav.Link>
      <Nav.Link id="linkColor" href="#about" style={{color: "black"}}>About</Nav.Link>
      <Nav.Link id="linkColor" href="#portfolio" style={{color: "black"}}>Portfolio</Nav.Link>
      <Nav.Link id="linkColor" href="#contact" style={{color: "black"}}>Contact</Nav.Link>
    </div>
    </Nav>
  );
}

export default Navbar;
