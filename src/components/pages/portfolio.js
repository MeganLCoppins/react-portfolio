import React, { useState } from "react";
import "../style/portfolio.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import upArrow from "../../assets/uparrow.png";
import downArrow from "../../assets/downarrow.png";
import projects from "../../projects.json";

function Portfolio(){
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState("hide");
  // const [arrow, setArrow] = useState("https://www.perse.co.uk/wp-content/themes/perse/static/img/icons/cal-arrow-down.svg");
  const [arrow, setArrow] = useState(downArrow)

  const handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    setIndex(selectedIndex);
  };

  const getDesc = () => {
    if(visible === "hide"){
      setVisible("show");
      setArrow(upArrow)
      // setArrow("https://www.perse.co.uk/wp-content/themes/perse/static/img/icons/cal-arrow-up.svg");
    } else {
      setVisible("hide");
      setArrow(downArrow);
      // setArrow("https://www.perse.co.uk/wp-content/themes/perse/static/img/icons/cal-arrow-down.svg");
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
              <Card.Img id="portImg" variant="top" src={project.image} style={{width: "65%", height: "45%"}}/>
              <div>
              <div className={visible}>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "0%"}}>{project.description}</Card.Text>
                <Card.Text style={{width: "82%", textAlign: "center", marginLeft: "8%", marginTop: "1%", marginBottom: "1%"}}>{project.technologies}</Card.Text>
              </div>
              <button
              onClick = {() => getDesc()}
              style={{ marginTop: "1%", padding: "0", border: "transparent"}}
              >
                <img src={arrow} alt="arrow"></img>
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
