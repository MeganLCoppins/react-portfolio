import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";

function App(){
  return (
    <div>
    <Navbar />
        <div id="home" style={{paddingTop: "5%"}}>
        </div>
      <Home />
        <div id="about" style={{paddingTop: "7%"}}>
        </div>
      <About />
        <div id="portfolio" style={{paddingTop: "7%"}}>
        </div>
      <Portfolio />
        <div id="contact" style={{paddingTop: "7%"}}>
        </div>
      <Contact />
      </div>
  )
}

export default App;