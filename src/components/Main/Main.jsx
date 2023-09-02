import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Pricing from "../Pricing/Pricing";
import Sidebar from "../Sidebar/Sidebar";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Preloader from "../Preloader/Preloader";

const Main = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Simulate some condition here to hide the preloader after a delay
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000); // Example: Hide preloader after 2 seconds
  }, []);

  return (
    <>
      {/* {showPreloader && <Preloader />} */}

      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        {/* <Testimonials/> */}
        {/* <Flipbook/> */}
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default Main;
