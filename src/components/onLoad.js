import React from "react";
import $ from "jquery";
import "../style/component/onLoad.css";

const Onload = () => {
  window.onload = function () {
    $(".on_load_strip_b").css({ marginTop: "100vh" });
    $(".on_load_strip_a").css({ marginTop: "-100vh" });
    var Iwidth, imgWidth;
    Iwidth = this.innerWidth;
    imgWidth = 1222 + Iwidth - 1920;
    console.log(imgWidth);
    if (Iwidth >= 1920) {
      $(".image_bar img").css({ height: imgWidth });
    }
  };

  return (
    <div id="onLoad">
      <div className="on_load_strip_a"></div>
      <div className="on_load_strip_b"></div>
      <div className="on_load_strip_a"></div>
      <div className="on_load_strip_b"></div>
      <div className="on_load_strip_a"></div>
    </div>
  );
};

export default Onload;
