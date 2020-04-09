import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/index";
import "materialize-css";
import About from './components/Carousel/index';

class App extends React.Component {

  render(){
    return(
      <div className="container">
      <Navbar />
        <div className="layout">
          <About />
        </div>
      </div>
    )
  }
}

export default App;
