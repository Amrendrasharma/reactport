import React, { Component } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Skill from "../components/Skills";
import img2 from "../images/img2.jpeg";
class About extends Component {
  render() {
    return (
      <div className="about-content">
        <div className="Navbar">
          <nav className="fill">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="mailto:amrendrasharmasrh@gmail.com">Hire Me!</a>
              </li>
              <li>
                <a href="digitechbits.com">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="about-grid">
          <div className="grid-item animate__animated animate__fadeInUp">
            <h1>
              <strong>About Me</strong>
            </h1>
            <img src={img2} className="profile-pic" alt="profile-pic" />
          </div>
          <div className="grid-item2 animate__animated animate__fadeInDown">
            <h1
              style={{
                textAlign: "center",

                fontSize: "60px",
                fontFamily: "Rowdies",
              }}
            >
              Amrendra sharma
            </h1>
            <p style={{ fontSize: "20px" }}>
              If you want this website contact me .
            </p>
            <p style={{ fontSize: "20px" }}>
              This is React App
            </p>
            <p style={{ fontSize: "20px" }}>
              We are full stack developer
            </p>
          </div>
        </div>
        <Skill />
      </div>
    );
  }
}

export default About;
