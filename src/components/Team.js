import React from "react";
import Slider from "react-slick";
import customcss from "./arrows.css";
import Teamdetail from "./Teamdetail";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Link,
  Route,
} from "react-router-dom";

var settings = {
  dots: false,
  arrows: true,
  infinite: false,
  easing: "snap",
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  className: "pt-[3vw] place-self-center w-[95%] h-[36vw] flex flex-row",
};

function Team() {
  return (
    <>
      <div className="LMAO flex flex-col w-full h-full justify-center bg-teambg0 bg-center bg-cover align-middle">
        <h1 className="font-montserrat font-extrabold text-[4vw] text-center pt-[3vw]">
          Meet Our Team
        </h1>
        <p className="font-montserrat text-center text-[1vw] px-[30vw]">
          Their missions are simple — Breaking the barriers for learning and
          empowering you to ask the questions that matter.
        </p>

        <Slider {...settings}>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/nasser">
              <img src={require("../assets/0.png")} alt={"Nasser"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/marc">
              <img src={require("../assets/1.png")} alt={"Marc"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/maureen">
              <img src={require("../assets/2.png")} alt={"Maureen"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/ira">
              <img src={require("../assets/3.png")} alt={"Ira"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/dave">
              <img src={require("../assets/4.png")} alt={"Dave"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/gabriel">
              <img src={require("../assets/5.png")} alt={"Gabriel"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/haidar">
              <img src={require("../assets/6.png")} alt={"haidar"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/rifky">
              <img src={require("../assets/7.png")} alt={"Rifky"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/rido">
              <img src={require("../assets/8.png")} alt={"rido"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/khoirul">
              <img src={require("../assets/9.png")} alt={"Khoirul"} />
            </Link>
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <Link to="/team/imam">
              <img src={require("../assets/10.png")} alt={"imam"} />
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Team;
