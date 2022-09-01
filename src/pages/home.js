import React, { Component } from "react";
// import Typed from "react-typed";
import $ from "jquery";
import ImageBar from "../elements/image_bar.jpg";
import "../style/home.css";

class Home extends Component {
  render() {
    const textLines = [
      `I Develop <a>Cool Website</a>.`,
      `I Design <a>Amazing Logo</a>.`,
    ];

    window.onresize = function () {
      var Iwidth, imgWidth;
      Iwidth = this.innerWidth;
      imgWidth = 1222 + Iwidth - 1920;
      console.log(imgWidth);
      if (Iwidth >= 1920) {
        $(".image_bar img").css({ height: imgWidth });
      }
    };

    return (
      <div id="home">
        <div className="my_intro">
          <h2>
            Strategy, UI/UX <span>•</span> Apr 17, 2019.
          </h2>
          <h1>
            Nitin Birdi 
            {/* <br></br> Get Things Done. */}
          </h1>
          <h2>
            Hello There! I’m Nitin Birdi, UX/UI, Graphic Designer and Front-end
            Developer Based in India.
          </h2>
          <h2 className="show_project_link">
            <a href="/works">
              Show Project
              <div className="arrow_1">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  className="svg-inline--fa fa-arrow-right fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </div>
              <div className="arrow_2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  className="svg-inline--fa fa-arrow-right fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </div>
            </a>
          </h2>
          {/* <div className="typing_text">
            <Typed
              strings={textLines}
              loop
              typeSpeed={100}
              backSpeed={50}
              smartBackspace={0}
            />
          </div> */}
        </div>
        <div className="image_bar">
          <img src={ImageBar}></img>
        </div>
      </div>
    );
  }
}
export default Home;
