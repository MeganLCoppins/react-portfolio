import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
// import Navbar from "./components/navbar";
import Wrapper from "./components/Wrapper";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";

function App(){
  // return (
  //   <Router>
  //       <Navbar />
  //       <Wrapper>
  //         <Route exact path="/react-portfolio/" component={Home} />
  //         <Route exact path="/home" component={Home} />
  //         <Route exact path="/about" component={About} />
  //         <Route exact path="/portfolio" component={Portfolio} />
  //         <Route exact path="/contact" component={Contact} />
  //       </Wrapper>
  //   </Router>
  // )

  return (
  <Router>
  {/* <Wrapper> */}
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
  {/* </Wrapper> */}
  </Router>
  )
}

export default App;