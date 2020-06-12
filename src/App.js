import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <section id="index">
        <Index />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio" style={{ overflowX: "hidden" }}>
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </BrowserRouter>
  );
}

export default App;
