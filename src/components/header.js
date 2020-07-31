import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header
      style={{
        padding: ".5%",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <a
        href="/react-portfolio/"
        style={{
          textShadow: `none`,
          backgroundImage: `none`,
          textDecoration: "none",
        }}
      >
        <h3 style={{ display: `inline`, color: "#008080", float:"right", margin: "0", marginRight: "1.5rem" }}>Megan Coppins</h3>
      </a>
      <div className="dropdown">
        <div className="divBar bar1"></div>
        <div className="divBar bar2"></div>
        <div className="divBar bar3"></div>
        <div className="dropdown-content">
          <a href="#about">About</a>
          <a href="#portfolio">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div style={{ float: "clear" }}></div>
    </header>
  );
}
