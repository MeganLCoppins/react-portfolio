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
            <div className="col-md-6" style={{ margin: "1%" }}>
              <div
                key={project.id}
                className="card projCard"
                style={{
                  width: "25rem",
                  height: "40rem",
                  background: project.background,
                  padding: ".5%",
                  margin: "1.5%",
                  float: "left",
                  textAlign: "center",
                }}
              >
                <h3 className="card-title">{project.title}</h3>
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "30%" }}
                />
                <div className="card-body">
                  <a
                    href={project.deployed}
                    target="_blank"
                    className="btn btn-primary"
                    style={{ marginRight: "5%" }}
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
