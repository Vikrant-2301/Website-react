import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form
          action="https://formspree.io/f/xayzdvbr"
          method="POST"
          className="contact_form"
        >
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                name="username"
                className="contact_form-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                name="Email"
                className="contact_form-input"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="contact_form-div">
            <input
              type="text"
              name="Subject"
              className="contact_form-input"
              placeholder="Subject"
            />
          </div>
          <div className="contact_form-div contact_form-area">
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn" href="blank">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
