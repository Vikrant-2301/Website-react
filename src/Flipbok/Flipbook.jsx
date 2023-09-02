import React from "react";

const Flipbook = () => {
  return (
    <div>
      <iframe
        title="Flipbook"
        allowFullScreen="true"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/261815f265.html"
        style={{
          border: "1px solid lightgray",
          width: "100%",
          height: "400px",
        }}
      ></iframe>
    </div>
  );
};

export default Flipbook;
