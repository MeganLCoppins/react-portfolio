import React, { Component, useState } from "react";
import "../style/portfolio.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import projects from "../../projects.json";

function Portfolio(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      // <Container id="portfolio">
      <div className="portfolio">
        {/* <Jumbotron fluid style={{backgroundColor: "rgba(199, 57, 100, 0.755)", paddingTop: "2%", paddingBottom: "3%"}}>
        <Container> */}
        {/* </Container>
        </Jumbotron> */}
        <h1>My Work</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {projects.map((project) => (
        <Carousel.Item>
            <Card style={{textAlign: "center", width: "90%", marginLeft: "5%"}} border="light" className="cardBg">
              <Card.Body>
                <Card.Title style={{fontSize: "55px"}}>
                  <h2><strong>{project.title}</strong></h2>
                </Card.Title>
                <div>
                  <Card.Link href={project.deployed} style={{ color: "white", fontSize: "25px"}}><strong>Deployed App</strong></Card.Link>
                  <Card.Link href={project.github} style={{ color: "white", fontSize: "25px"}}><strong>GitHub</strong></Card.Link>
                </div>
              <Card.Img variant="top" src={project.image} fluid style={{width: "70%", height: "50%"}}/>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "0%", marginBottom: "4%"}}>{project.description}</Card.Text>
              </Card.Body>
            </Card>
        </Carousel.Item>
      ))}
      </Carousel>


          {/* {projects.map((project) => (
            <CardDeck style={{marginLeft: "0%", marginRight: "8%"}}>
            <Card style={{textAlign: "center"}} border="light" className="cardBg">
              <Card.Body>
                <Card.Title style={{fontSize: "55px", paddingTop: "3%"}}>
                  <h2><strong>{project.title}</strong></h2>
                </Card.Title>
              <Card.Body border="secondary">
              <Card.Img variant="top" src={project.image} fluid style={{width: "80%", height: "80%"}}/>
                <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.deployed} style={{ color: "white", fontSize: "25px"}}><strong>Deployed App</strong></Card.Link>
                  <Card.Link href={project.github} style={{ color: "white", fontSize: "25px"}}><strong>GitHub</strong></Card.Link>
                </Card.Body>
              </Card.Body>
            </Card>
            </CardDeck>  */}

                  
                
                

                
    </div>
    // {/* </Container> */}
    );
}

export default Portfolio;
