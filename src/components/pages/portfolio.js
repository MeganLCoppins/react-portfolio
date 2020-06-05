import React, { useState } from "react";
import "../style/portfolio.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import projects from "../../projects.json";

function Portfolio(){
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState("hide");
  const [arrow, setArrow] = useState("Details..")

  const handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    setIndex(selectedIndex);
  };

  const getDesc = () => {
    if(visible === "hide"){
      setVisible("show");
      setArrow("Close")
    } else {
      setVisible("hide");
      setArrow("Details..");
    }
  }

    return (
      <div className="portfolio">
        <h1>My Work</h1>
      <Carousel className="caroBody" activeIndex={index} onSelect={handleSelect} interval={null} style={{width: "80%", marginLeft: "10%"}}>
      {projects.map((project) => (
        <Carousel.Item key={project.title}>
            <Card style={{textAlign: "center", width: "90%", marginLeft: "5%", marginTop: "5%"}} border="light" className="cardBg">
              <Card.Body className="cardBody">
                <Card.Title style={{fontSize: "55px"}}>
                  <h2><strong>{project.title}</strong></h2>
                </Card.Title>
                <div className="links">
                  <Card.Link href={project.deployed} style={{ color: "white", fontSize: "23px"}}><strong>Deployed</strong></Card.Link>
                  <Card.Link href={project.github} target="_blank"
            rel="noopener noreferrer" style={{ color: "white", fontSize: "23px"}}><strong>GitHub</strong></Card.Link>
                </div>
              <Card.Img id="portImg" variant="top" src={project.image} style={{width: "84%", height: "45%"}}/>
              <div>
              <div className={visible} style={{marginTop: "4px"}}>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "0%"}}>{project.description}</Card.Text>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "1%", marginBottom: "1%"}}>{project.technologies}</Card.Text>
              </div>
              <button
              onClick = {() => getDesc()}
              style= {{backgroundColor: "transparent", color: "white", marginTop: "2%"}}
              >
                {arrow}
              </button>
              </div>
              </Card.Body>
            </Card>
        </Carousel.Item>
      ))}
      </Carousel>   
    </div>
    );
}

export default Portfolio;
