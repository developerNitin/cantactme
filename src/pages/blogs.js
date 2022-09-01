import React, { Component } from "react";
import $ from "jquery";
import Typed from "react-typed";
import "../style/blogs.css";

//img
import Img1 from "../elements/img/blog/img1.jpg";
import Img2 from "../elements/img/blog/img2.jpg";
import Img3 from "../elements/img/blog/img3.jpg";

class Blogs extends Component {
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
        imgUrl2: Img2,
        title1: "Project Red1",
        title2: "Project Red2",
        urlTitle1: "/blog/page/project-red1",
        urlTitle2: "/blog/page/project-red2",
        subTitle1: "Logo",
        subTitle2: "Logo",
        para1:
          "love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to….",
        para2:
          "love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to….",
      },
      {
        imgUrl1: Img3,
        imgUrl2: Img1,
        title1: "Project Red3",
        title2: "Project Red4",
        urlTitle1: "/blog/page/project-red3",
        urlTitle2: "/blog/page/project-red4",
        subTitle1: "Logo",
        subTitle2: "Logo",
        para1:
          "love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to….",
        para2:
          "love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to….",
      },
    ];

    return (
      <div id="blogs">
        <div className="works_topbar">
          <h1>Opinions</h1>
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
        <div className="projects_grid blog_grid">
          {worksData.map((i) => {
            return (
              <div className="projects_grid_items blog_grid_items">
                <div>
                  <a href={i.urlTitle1}>
                    <img src={i.imgUrl1}></img>
                  </a>
                  <p>{i.subTitle1}</p>
                  <h1>
                    <a href={i.urlTitle1}>{i.title1}</a>
                  </h1>
                  <p className="blog_para">{i.para1}</p>
                </div>
                <div>
                  <a href={i.urlTitle2}>
                    <img src={i.imgUrl2}></img>
                  </a>
                  <p>{i.subTitle2}</p>
                  <h1>
                    <a href={i.urlTitle2}>{i.title2}</a>
                  </h1>
                  <p className="blog_para">{i.para2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blogs;
