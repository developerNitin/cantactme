import React, { Component } from "react";
import Typed from "react-typed";
import "../style/resume.css";

class Resume extends Component {
  render() {
    const textLines = [
      `I Develop <a>Cool Website</a>`,
      `I Design <a>Amazing Logo</a>`,
    ];
    return (
      <div id="resume">
        {" "}
        <div className="works_topbar">
          <h1>I'm <span>Nitin Birdi</span></h1>
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
          <h1>Latest Posts</h1>
        </div>
      </div>
    );
  }
}

export default Resume;
