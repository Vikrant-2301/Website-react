import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Aspiring </span>
        <span>Architectural </span>
        <span>Designer</span>
      </div>
    </div>
  );
};

export default Preloader;
