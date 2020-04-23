import React, { Component, useState } from "react";
import "../style/portfolio.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import projects from "../../projects.json";

function Portfolio(){

    return (
      <div className="col portfolio">
          <h1>My Work</h1>
          {projects.map((project) => (
            <CardDeck style={{marginLeft: "0%", marginRight: "8%"}}>
            {/* <Card border="warning" style={{ width: "25rem", height: "42rem",textAlign: "center"}}> */}
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
            </CardDeck>

                  
                
                

                
            // </div>
          ))}
    </div>
    );
}

export default Portfolio;
