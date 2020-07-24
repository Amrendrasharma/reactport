import React from "react";
import "./projectcontent.css";
import ss1 from "../images/ss1.png";
/*import ss2 from "../images/ss2.png";
import ss3 from "../images/ss3.png";
import ss4 from "../images/ss4.png";*/

const ProjectContent = () => {
  return (
    <div className="project-content">
      <div class="projects-grid">
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img src={ss1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">
              <strong>Hostel Complaint Site</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Built a Hostel Complaint Site with the help of Django Web
              Framework with Mysql Connectivity.
            </p>
            <a
              href="https://hostelcomplaintapp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6ezkO9dMPsQYrL7uD58Pslvb1tGyBkVigZg&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">
              <strong>Weather App</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Build a Weather App which tells you a current Weather of your city
              with the help of Python web Framework Django.
            </p>
            <a
              href="https://forecastingapp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img
            src="https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">
              <strong>React Based Weather App</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Built a Weather App which tells you a current Weather of your city
              with the help of JavaScript library React.
            </p>
            <a
              href="https://deepaknewapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img
            src="https://www.cdc.gov/coronavirus/2019-ncov/images/coronavirus-1200x675.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">
              <strong>Covid Statics App</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Built this useful Covid Static App which gives you an information
              about Covid cases in your Country.This application gives you a
              whole analysis of Covid cases with a graph
            </p>
            <a
              href="https://covid-app-statics.netlify.app/"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img
            src="https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png"
            className="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">
              <strong>Dockerize Django Application</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Dockerize all my django application in a Docker Container.
            </p>
            <a
              href="https://hub.docker.com/repository/docker/deeptech/dockerizehostelcomplaint"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
        <div
          class="card animate__animated animate__zoomIn"
          style={{ width: "18rem" }}
        >
          <img
            src="https://stackify.com/wp-content/uploads/2019/04/big-Feature-Image-on-What-Is-CI_CD-1280x720.jpg"
            className="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">
              <strong>Build a CI/CD Pipeline</strong>
            </h2>
            <p class="card-text" style={{ fontWeight: "bold" }}>
              Built a CI/CD pipeline (Continous Integration and Continous
              Deployment).This is one of the DevOps Methodolody for shorter
              Software Lifecycle.I build this pipeline with the help of
              Automation Server Jenkins.
            </p>
            <a
              href="https://github.com/DeepakShakya24/Django-CI-CD.git"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Lookout my Work!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
