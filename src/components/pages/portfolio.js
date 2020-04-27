import React, { useState } from "react";
import "../style/portfolio.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import projects from "../../projects.json";

function Portfolio(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    setIndex(selectedIndex);
  };

    return (
      <div className="portfolio">
        <h1>My Work</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{width: "80%", marginLeft: "10%"}}>
      {projects.map((project) => (
        <Carousel.Item>
            <Card style={{textAlign: "center", width: "90%", marginLeft: "5%", marginTop: "5%"}} border="light" className="cardBg">
              <Card.Body>
                <Card.Title style={{fontSize: "55px"}}>
                  <h2><strong>{project.title}</strong></h2>
                </Card.Title>
                <div>
                  <Card.Link href={project.deployed} style={{ color: "white", fontSize: "25px"}}><strong>Deployed App</strong></Card.Link>
                  <Card.Link href={project.github} style={{ color: "white", fontSize: "25px"}}><strong>GitHub</strong></Card.Link>
                </div>
              <Card.Img variant="top" src={project.image} fluid style={{width: "45%", height: "45%"}}/>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "0%", marginBottom: "4%"}}>{project.description}</Card.Text>
              </Card.Body>
            </Card>
        </Carousel.Item>
      ))}
      </Carousel>   
    </div>
    );
}

export default Portfolio;
