import React, { Component } from "react";
import "../style/component/footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="footer_container">
        <div className="website_logo">
          <h1>
            <a style={{ color: "white" }}>Nitin Birdi</a>
          </h1>
          <div>
            <p>
              <a href="https://www.linkedin.com/in/nitin-birdi-5233651a6/">
                in.
              </a>
              <a href="https://github.com/developerNitin">gh.</a>
              <a href="https://instagram.com/realnitinb">ig.</a>
              <a href="https://facebook.com/nitin.birdi.786">fb.</a>
            </p>
          </div>
        </div>
        <div className="inquiries_info">
          <div>
            <h1>Work inquiries</h1>
            <p>
              Email: contact<span style={{ fontFamily: "Arial" }}>@</span>
              nitinbirdi.com
            </p>
            <p>Whatsapp: +91 88473 79603</p>
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="important_links">
          <h1>Pages</h1>
          <div>
            <a href="/home">Home</a>
            <a href="/resume">Resume</a>
            <a href="/works">Works</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="signup_form">
          <h1>Sign Up Newsletter</h1>
          <div>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form>
              <input placeholder="Email address"></input>
              <button>
                <p>Sign Up</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right_reserved">
        <div>
          <p>© 2021, Nitin birdi.</p>
          <p>All right reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
