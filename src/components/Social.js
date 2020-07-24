import React, { Component } from "react";
import "./Social.css";
//import { SocialIcon } from "react-social-icons";
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          href="mailto:amrendrasharmasrh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-envelope"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-facebook-f"></i>
        </a>
      </div>
    );
  }
}
export default Social;
