import React, { Component } from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
//import django from "../images/django.png";
class Skill extends Component {
  render() {
    return (
      <div className="skill-content">
        <Slide top>
          <h1 style={{ textAlign: "center", fontSize: "70px" }}>
            <strong>My Skills</strong>
          </h1>
        </Slide>
        <div className="grid-container">
          <div className="grid-item">
            <Fade left>
              <img
                src="https://www.pngkit.com/png/full/246-2467229_aws-logo-amazon-web-services-icon.png"
                alt="img"
                className="new-img"
              />
            </Fade>
          </div>
          <div className="grid-item">
            <Fade left>
              <h2>
                <strong>Amazon Web Services</strong>
              </h2>
              <p style={{ fontSize: "20px" }}>
               I am amrendra pratap sharma . If you want this , contact me on 6394111088 .
              </p>
            </Fade>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <Fade right>
              <h2>
                <strong>DevOps</strong>
              </h2>
              <p style={{ fontSize: "20px" }}>
                DevOps is now being used in all enterprises, nowadays. The
                previous decade has seen the rise of automation. I am
                well-versed with DevOps tools like Git, Docker, Kubernetes,
                Jenkins, etc. I have knowledge about making CI/CD Pipelines too.
              </p>
            </Fade>
          </div>
          <div className="grid-item">
            <Fade right>
              <img
                src="https://www.pngitem.com/pimgs/m/174-1745736_devops-developer-hd-png-download.png"
                alt="img"
                className="devops-img"
              />
            </Fade>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <Fade left>
              <img
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_django_icon_130645.png"
                alt="img"
                className="django-img"
              />
            </Fade>
          </div>
          <div className="grid-item">
            <Fade left>
              <h2>
                <strong>Django</strong>
              </h2>
              <p style={{ fontSize: "20px" }}>
                Django,Python Web Framework,from here my journey as a Back-End
                Developer starts.Django is my primary tool for backend
                development. I am proficient in Python programming language and
                Django. My personal favourite is combining the powers of Django
                with React.
              </p>
            </Fade>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <Fade right>
              <h2>
                <strong>Full-Stack Developer</strong>
              </h2>
              <p style={{ fontSize: "20px" }}>
                I am well-versed with HTML5, CSS3, JS and React to build
                FrontEnd application. I use Django as my BackEnd web framework.
                For Database Management, I use MySQL and MongoDB.
              </p>
            </Fade>
          </div>
          <div className="grid-item">
            <Fade right>
              <img
                src="https://media.giphy.com/media/d9IfL7seBexHLct75B/source.gif"
                alt="img"
                className="full-stack-img"
              />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
