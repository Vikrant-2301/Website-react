import React from "react";
import "./Flipbook.css";
import { Link } from "react-router-dom";

const Landscaping = () => {
  return (
    <div className="fullscreen">
      <iframe
        title="Flipbook"
        allowFullScreen="true"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/751eeb11d9.html"
        style={{
          width: "100vw",
          height: "90vh",
        }}
      ></iframe>
      <button className="homebtn">
        <Link to="/" className="btn">
          Back to home
        </Link>
      </button>
    </div>
  );
};

export default Landscaping;
