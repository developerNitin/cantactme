import React, { Component } from "react";
import $ from "jquery";
import "../style/header.css";

class Header extends Component {
  render() {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll <= "25") {
        $("#header").css({ padding: "50px 0", backgroundColor: "transparent" });
        $("#header_mask").css({ height: "140px" });
      } else {
        $("#header").css({ padding: "30px 0", backgroundColor: "#101010" });
        $("#header_mask").css({ height: "100px" });
      }
    });

    $(function () {
      var i = 1;
      $("#mobile_navbar_button_a").on("click", function () {
        var scroll = $(window).scrollTop();
        if (i === 0) {
          $("#mobile_link_list").css({ top: "-100vh" });
          if (scroll <= "25") {
            $("#header").css({ padding: "50px 0" });
          }
          $("#mobile_navbar_button_id").removeClass(
            "mobile_navbar_button_crose"
          );
          i = 1;
        } else if (i === 1) {
          $("#mobile_link_list").css({ top: "0vh" });
          if (scroll <= "25") {
            $("#header").css({ padding: "30px 0" });
          }
          $("#mobile_navbar_button_id").addClass("mobile_navbar_button_crose");
          i = 0;
        }
      });
    });

    $(function () {
      const location = window.location.pathname;
      if (location === "/home") {
        $(".navbar-nav li").removeClass("active");
        $(".navbar-nav li:nth-child(1)").addClass("active");
      }
      // else if (location === "/resume") {
      //   $(".navbar-nav li").removeClass("active");
      //   $(".navbar-nav li:nth-child(2)").addClass("active");
      // }
      else if (location === "/works") {
        $(".navbar-nav li").removeClass("active");
        $(".navbar-nav li:nth-child(2)").addClass("active");
      } else if (location === "/contact") {
        $(".navbar-nav li").removeClass("active");
        $(".navbar-nav li:nth-child(4)").addClass("active");
      } else if (
        location === "/blogs" ||
        "/blog/page/project-red1" ||
        "/blog/page/project-red2" ||
        "/blog/page/project-red3" ||
        "/blog/page/project-red4"
      ) {
        $(".navbar-nav li").removeClass("active");
        $(".navbar-nav li:nth-child(3)").addClass("active");
      }
    });

    return (
      <div id="header">
        <div className="header_logo">
    
            <h1>
              <span>Rajnish</span>Kumar
            </h1>
      
        </div>
      </div>
    );
  }
}

export default Header;
