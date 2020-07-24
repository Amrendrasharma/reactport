import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "./Social";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ fontSize: "40px" }}>Amrendra pratap sharma</h1>
        <h1>
          <ReactTypingEffect
            className="typingeffect"
            text={["Engineer", "Developer", "Full-Stack Developer"]}
            speed={100}
            eraseDelay={700}
          />
        </h1>
        <Social />
      </div>
    );
  }
}
export default Content;
