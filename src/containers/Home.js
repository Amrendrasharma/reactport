import React, { Component } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
class Home extends Component {
  render() {
    return (
      <div className="bg">
        <Particles params={particlesOptions} className="particles" />
        <Navbar />
        <Content />
        <footer
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "15px",
            marginTop: "40px",
          }}
        >
          Design By Krish kumar
        </footer>
      </div>
    );
  }
}

export default Home;
