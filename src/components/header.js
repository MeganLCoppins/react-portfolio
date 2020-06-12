import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header
      style={{
        padding: ".5rem",
        position: "fixed",
        top: "0",
        width: "100%",
        marginBottom: "10%",
      }}
    >
      <a
        href="/"
        style={{
          textShadow: `none`,
          backgroundImage: `none`,
          textDecoration: "none",
        }}
      >
        <h3 style={{ display: `inline`, color: "#008080" }}>Megan Coppins</h3>
      </a>
      <div id="links" style={{ float: "right", marginRight: "2rem" }}>
        <a href="#about">About</a>
        <a href="#portfolio">Work</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ float: "clear" }}></div>
    </header>
  );
}
