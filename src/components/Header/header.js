import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="top-section">
        <h1>Resume.builder</h1>
        <div className="icon-container">
          <button type="button" className="download-button" onClick={props.onGeneratePDF}>
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="bottom-section">
        <p>Created by HVBuilds</p>
        <a href="#">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
