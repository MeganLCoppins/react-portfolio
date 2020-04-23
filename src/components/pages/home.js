import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
import "../style/home.css";

function Home() {
  return (
    <div className="home">
      {/* <Jumbotron fluid style={{textAlign: "center",     backgroundColor: "rgb(1, 106, 117)", paddingBottom: "3%", paddingTop: "3%"}}> */}
        {/* <Container> */}
          {/* <h1 className="left">Hello and Welcome!</h1> */}
        {/* </Container> */}
      {/* </Jumbotron> */}
      <h1 className="left">Hello and Welcome!</h1>
      <div>
        {/* <h1 className="name">Megan Coppins</h1> */}

        <h1 className="emphasized">Full Stack Developer</h1>
      </div>
    </div>
  );
}

export default Home;
