import React from "react";
import projects from "../projects.json";
import "../style/portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <div id="work">
        <h1>Check Out My Work!</h1>
      </div>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6" style={{ margin: "1%" }}>
              <div
                className="card projCard"
                style={{
                  // width: "25rem",
                  // height: "40rem",
                  background: project.background,
                  padding: ".5%",
                  margin: "1.5%",
                  float: "left",
                  textAlign: "center",
                }}
              >
                <h3 className="card-title">{project.title}</h3>
                <img
                  className="card-img-top portfolioImg"
                  src={project.image}
                  alt={project.title}
                  style={{ width: "50%", height: "30%", marginBottom: "2%", border: "6px solid grey", borderRadius: "10px" }}
                />
                <div className="card-body">
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginRight: "5%"}}
                  >
                    Deployed Link
                  </a>
                  <a href={project.github} className="btn btn-primary">
                    Github
                  </a>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">{project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
