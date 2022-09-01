import React, { Component } from "react";
import $ from "jquery";
import Typed from "react-typed";
import "../style/works.css";

//img
import Img1 from "../elements/img/img1.jpg";

class Works extends Component {
  render() {
    const textLines = [
      `I Develop <a>Cool Website</a>`,
      `I Design <a>Amazing Logo</a>`,
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
    const worksData = [
      {
        imgUrl1: Img1,
        imgUrl2: Img1,
        title1: "Project Red1",
        title2: "Project Red2",
        subTitle1: "Logo",
        subTitle2: "Logo",
      },
      {
        imgUrl1: Img1,
        imgUrl2: Img1,
        title1: "Project Red3",
        title2: "Project Red4",
        subTitle1: "Logo",
        subTitle2: "Logo",
      },
    ];

    return (
      <div id="works">
        <div className="works_topbar">
          <h1>Projects</h1>
          <div>
            <Typed
              strings={textLines}
              loop
              typeSpeed={100}
              backSpeed={50}
              smartBackspace={0}
              cursorChar= "."
            />
          </div>
        </div>
        <div className="works_filter_menu">
          <div>
            <label>All</label>
          </div>
          <div>
            <label>Logo</label>
          </div>
          <div>
            <label>Website</label>
          </div>
          <div>
            <label>Marketing</label>
          </div>
          <div>
            <label>Content</label>
          </div>
        </div>
        <div className="projects_grid">
          {worksData.map((i) => {
            return (
              <div className="projects_grid_items">
                <div>
                  <img src={i.imgUrl1}></img>
                  <h1>{i.title1}</h1>
                  <p>{i.subTitle1}</p>
                </div>
                <div>
                  <img src={i.imgUrl2}></img>
                  <h1>{i.title2}</h1>
                  <p>{i.subTitle2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Works;
