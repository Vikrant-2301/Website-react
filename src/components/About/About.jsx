import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import CV from "../../assets/NEW RESUME.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Hii, I am Vikrant Yadav, and I am a third-year architecture
              student at Lovely Professional University. Originally from Kanpur,
              Uttar Pradesh, I am passionate about creating spaces that are both
              functional and visually appealing, and I am eager to continue
              exploring new ideas and pushing boundaries in the field of
              architecture. Take a look at my portfolio to see some of my work
              and get in touch if you have any questions or opportunities for
              collaboration.
            </p>
            <a href={CV} className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Autodesk AutoCAD</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage autocad"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Autodesk Revit</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage revit"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Adobe Photoshop</h3>
                <span className="skills_number">60%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photoshop"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Lumion</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage lumion"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">SketchUp</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage sketchup"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Navisworks</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage navisworks"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">MS Office</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage office"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
