import React from "react";
import "./Pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section_title">Videos</h2>

      <div className="pricing_container grid">
        <div className="pricing_items">
          <div className="video-responsive">
            <iframe
              width="288"
              height="162"
              src="https://www.youtube.com/embed/z8MOvNLU77g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <img src={Image1} alt="" className="pricing_img" /> */}
          {/* <h3 className="pricing_plan">Basic</h3> */}
          {/* <p className="pricing_title">
            A Simple option but powerful to manage your business
          </p> */}
          <p className="pricing_support">Frank Lloyd Wright</p>
          {/* <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3> */}
          {/* <a
            href="https://www.youtube.com/@vikrantyadav3950/featured?sub_confirmation=1"
            className="btn"
          >
            Subscribe
          </a> */}
        </div>

        <div className="pricing_items">
          <div className="video-responsive">
            <iframe
              width="288"
              height="162"
              src="https://www.youtube.com/embed/xe6arUKWCxs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <span className="badge">Recommended</span> */}
          {/* <img src={Image2} alt="" className="pricing_img" /> */}
          {/* <h3 className="pricing_plan">Premium</h3> */}
          {/* <p className="pricing_title">
            Unlimited product including app integration and more features
          </p> */}
          <p className="pricing_support">Nagara Style Temple Architecture</p>
          {/* <h3 className="price">
            <em>$</em> 15 <span>Month</span>
          </h3> */}
          {/* <a
            href="https://www.youtube.com/@vikrantyadav3950/featured?sub_confirmation=1"
            className="btn"
          >
            Subscribe
          </a> */}
        </div>

        <div className="pricing_items">
          <div className="video-responsive">
            <iframe
              width="288"
              height="162"
              src="https://www.youtube.com/embed/kBmfeIzUIeE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <img src={Image3} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Ultimate</h3> */}
          {/* <p className="pricing_title">
            A wise option for large companies and individuals
          </p> */}
          <p className="pricing_support">Swaminarayan Akshardham Temple</p>
          {/* <h3 className="price">
            <em>$</em> 19 <span>Month</span>
          </h3> */}
          {/* <a
            href="https://www.youtube.com/@vikrantyadav3950/featured?sub_confirmation=1"
            className="btn"
          >
            Subscribe
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
