import React from "react";
import ProjectContext from "../../context/ProjectContext";
import "./index.css";
import Footer from "../Footer";

function AddedProjects() {
  const urls = [
    "https://res.cloudinary.com/dpiaz73h0/image/upload/v1704418608/Rectangle_7_1_azkj8o.png",
    "https://res.cloudinary.com/dpiaz73h0/image/upload/v1704418598/Rectangle_7_m5ihdl.png",
    "https://res.cloudinary.com/dpiaz73h0/image/upload/v1704418593/pexels-elly-fairytale-3823207_1_giql61.png",
  ];

  return (
    <ProjectContext.Consumer>
      {(value) => {
        const { projects } = value;
        console.log(projects);

        return (
          <div className="added-projects-container">
            <h2 className="added-projects-head">Projects</h2>
            <div className="projects-image-content-card">
              {projects.map((project, index) => {
                const randomIndex = Math.floor(Math.random() * urls.length);
                const randomUrl = urls[randomIndex];

                return (
                  <div key={index} className="added-projects-card">
                    <img
                      src={randomUrl}
                      alt="Project Image"
                      className="project-image"
                    />
                    <div className="added-projects-content">
                      <h2 className="added-projects-title">
                        {project.projectName}
                      </h2>
                      <div className="project-details">
                        <p className="project-des">{project.projectDescription}</p>
                        <button type="button" className="vew-button">View Project</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Footer/>
          </div>
        );
      }}
    </ProjectContext.Consumer>
  );
}

export default AddedProjects;
