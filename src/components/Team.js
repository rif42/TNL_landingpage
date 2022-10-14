import React from "react";
import Slider from "react-slick";
import customcss from "./arrows.css";

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

        <Slider style={customcss} {...settings}>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/nasser.png")} alt={"Nasser"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/marc.png")} alt={"Marc"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/maureen.png")} alt={"Maureen"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/ira.png")} alt={"Ira"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/dave.png")} alt={"Dave"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/gabriel.png")} alt={"Gabriel"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/haidar.png")} alt={"haidar"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/rifky0.png")} alt={"Rifky"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/rido.png")} alt={"rido"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/khoirul.png")} alt={"Khoirul"} />
          </div>
          <div className="flex flex-row justify-center px-[0.5vw] h-[10vw] align-middle">
            <img src={require("../assets/imam.png")} alt={"imam"} />
          </div>
        </Slider>
      </div>

      <button onClick={{}}>LMAOOOOOOO</button>
    </>
  );
}

export default Team;
