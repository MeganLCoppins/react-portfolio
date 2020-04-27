import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "../style/home.css";

function Home() {
  // backgroundColor: "rgba(140, 132, 164, 0.899)"
  return (
    <div className="home">
      {/* <div>
      <Jumbotron fluid style={{textAlign: "center", backgroundColor: "rgba(199, 57, 100, 0.755)", paddingBottom: "3%", paddingTop: "2%"}}>
        <Container>
          <h1 className="left">Hello and Welcome!</h1>
        </Container>
      </Jumbotron>
      </div> */}
      <div>
      <h1 className="left" fluid>Hello and Welcome!</h1>
      <h1 className="emphasized" fluid>Full Stack Developer</h1>
      </div>
    </div>
  );
}

export default Home;
