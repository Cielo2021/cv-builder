import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Add this line

import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="top-section">
        <h1>Resume.builder</h1>
        <div className="icon-container">
          <button
            type="button"
            className="download-button"
            onClick={props.onGeneratePDF}
          >
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="bottom-section">
        <p>Created by HVBuilds</p>
        <a href="https://github.com/Cielo2021">
          
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </header>
  );
};

export default Header;
