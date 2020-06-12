import React from "react";
import "../style/style.css";
import logo from "../images/logo2.png";
import arrow from "../images/button4.png";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div id="intro">
        <img
          src={logo}
          alt="logo"
          style={{ width: "250px", height: "160px", marginTop: "2%" }}
        />
        <h1>Hello My Name is Megan Coppins</h1>
      </div>
      <a href="#about">
        <button id="homeBtn">
          <img
            src={arrow}
            style={{
              width: "120px",
              height: "120px",
            }}
          />
        </button>
      </a>
      <div id="developer">
        <h1>Full Stack Web Developer!</h1>
        <p>Coding Enthusiast.</p>
      </div>
    </Layout>
  );
}
