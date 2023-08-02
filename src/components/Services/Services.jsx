import React from "react";
import "./Services.css";
import Image1 from "../../assets/cad.png";
import Image2 from "../../assets/skp.svg";
import Image3 from "../../assets/png.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "CAD Drafting",
    description:
      "I can create accurate and detailed architectural drawings using computer-aided design (CAD) software, including floor plans, elevations, sections, and details.",
  },
  {
    id: 2,
    image: Image2,
    title: "3D Modeling",
    description:
      "I can use software such as SketchUp and Revit to create 3D models of buildings and spaces, which can be used to visualize designs and communicate ideas to clients.",
  },
  {
    id: 3,
    image: Image3,
    title: "Sheet Drafting",
    description:
      "I can create Construction Drawings, I have strong sheet drafting skills including creating accurate and detailed architectural drawings for construction documentation.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
