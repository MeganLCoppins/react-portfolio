import React from "react";
import "./App.css";
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
        <div id="home">
        </div>
      <Home />
        <div id="about" >
        </div>
      <About />
        <div id="portfolio">
        </div>
      <Portfolio />
        <div id="contact">
        </div>
      <Contact />
      </div>
  )
}

export default App;