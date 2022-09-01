import React from "react";
import "../style/component/blogPage.css";

const BlogPage = (props) => {
  return (
    <div id="blog_page">
      <div className="blog_page_top_img">
        <div>
          <img src={props.imgUrl1}></img>
        </div>
      </div>
      <div className="blog_page_top_section">
        <h1>{props.name}</h1>
        <footer></footer>
      </div>
      <div className="blog_page_container">
        <div className="blog_page_description_container">
          {" "}
          <div className="blog_page_description">
            <p>{props.p1}</p>
            <p>
              {props.p2a}
              <a href="#">{props.a1}</a>
              {props.p2b}
              <a href="#">{props.a2}</a>
              {props.p2c}
            </p>
            <p>{props.p3}</p>
            <p className="blog_page_testimonial">
              {props.p4}
              <br></br>
              <br></br>
              <span>{props.span1}</span>
            </p>
            <p>
              {props.p5a}
              <span>{props.span2}</span>
              {props.p5b}
            </p>
            <ul>
              <li>{props.li1}</li>
              <li>{props.li2}</li>
              <li>{props.li3}</li>
              <li>{props.li4}</li>
            </ul>
            <p>{props.p6}</p>
            <div>
              <h1>{props.h1}</h1>
              <p>{props.p7}</p>
              <div className="blog_page_description_gallery">
                <img src={props.imgUrl1a} />
                <img src={props.imgUrl1b} />
              </div>
              <p>{props.p8}</p>
            </div>
            <footer>
              <p className="by_admin">
                Posted in <a href="#">Design</a>, <a href="#">Logo</a>,{" "}
                <a href="#">Website</a> by <a href="#">admin</a>
              </p>
              <p className="tags">
                Tags:
                <a href="#">design</a>
                <a href="#">html</a>
                <a href="#">mobile</a>
                <a href="#">website</a>
                <a href="#">logo</a>
              </p>
            </footer>
            
          </div>
          <div
            style={{
              zIndex: "-1",
            }}
            id="mask"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
