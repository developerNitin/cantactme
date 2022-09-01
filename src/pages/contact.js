import React, { Component } from "react";
import Typed from "react-typed";
import "../style/component/contact.css"

class Contact extends Component {
  render() {
    const textLines = [
      `I Develop <a>Cool Website</a>`,
      `I Design <a>Amazing Logo</a>`,
    ];
    return (
      <div id="contact">
        <div className="works_topbar">
          <h1>Contact</h1>
          <div>
            <Typed
              strings={textLines}
              loop
              typeSpeed={100}
              backSpeed={50}
              smartBackspace={0}
              cursorChar="."
            />
          </div>
        </div>
        <div className="works_filter_menu blog_filter_menu">
          <h1>Contacts info</h1>
        </div>
        <div className="contact_info">
          <div className="contact_info_sub">
            <div>
              <p>Phone</p>
              <span>+91 8847379603</span>
            </div>
            <div>
              <p>Email</p>
              <span>contact@nitinbirdi.com</span>
            </div>
          </div>
          <div className="contact_info_sub">
            <div>
              <p>Address</p>
              <span>2621 W Pico Blvd, Los Angeles</span>
            </div>
            <div>
              <p>Freelance Available</p>
              <span>I am available for Freelance hire</span>
            </div>
          </div>
        </div>
        <div className="works_filter_menu blog_filter_menu">
          <h1>Contacts Form</h1>
        </div>
        <div className="contact_form">
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <textarea style={{fontFamily: "arial"}} cols="40" rows="10" aria-invalid="false" aria-required="true" placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
