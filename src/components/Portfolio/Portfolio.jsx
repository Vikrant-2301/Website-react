import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}></span>
        {/* <span className="work_item" onClick={() => filterItem("Construction")}>
          Building Construction
        </span>
        <span className="work_item" onClick={() => filterItem("Cad")}>
          AutoCAD
        </span>
        <span className="work_item" onClick={() => filterItem("Revit")}>
          Revit
        </span>
        <span className="work_item" onClick={() => filterItem("Render")}>
          Renderings
        </span> */}
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <Link to={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
