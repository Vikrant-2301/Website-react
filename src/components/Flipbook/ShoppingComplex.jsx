import React from "react";
import "./Flipbook.css";
import { Link } from "react-router-dom";

const ShoppingComplex = () => {
  return (
    <div className="fullscreen">
      <iframe
        title="Flipbook"
        allowFullScreen="true"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/261815f265.html"
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

export default ShoppingComplex;
