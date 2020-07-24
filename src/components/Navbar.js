import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    navBackground: "transparent",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 160 ? "transparent" : "white";

      this.setState({ navBackground: backgroundcolor });
    });
  }
  render() {
    return (
      <div
        style={{ backgroundColor: `${this.state.navBackground}` }}
        className="Navbar"
      >
        <nav className="fill">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="mailto:Amrendrasharmasrh@gmail.com">Contact Me!</a>
            </li>
            <li>
              <Link to="/projects">My Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
