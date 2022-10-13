import React, { useState } from "react";
import Slider from "react-slick";

function FirstSlide() {
  const [slideState, setSlideState] = useState(0);
  const [navState, setNavState] = useState("TNL");
  const [selectionState, setSelectionState] = useState(0);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: " w-[99%] h-full flex flex-row",
    afterChange: (current) => setSlideState(current),
  };

  return (
    <div>
      <div className="w-full h-fit absolute ">
        <div className="absolute flex flex-row justify-center align-middle w-[10vw] h-[3vw] z-50 ml-[3vw] mt-[42vw]">
          <svg
            width="3vw"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {slideState === 0 ? (
              <circle //active
                cx="5"
                cy="5"
                r="5"
                stroke="white"
                transform="translate(1 1)"
              />
            ) : null}
            <circle // not active
              cx="2"
              cy="2"
              r="2"
              fill={slideState === 0 ? "white" : "#DACCCD"}
              transform="translate(4 4)"
            />
          </svg>
          <svg
            width="3vw"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {slideState === 1 ? (
              <circle //active
                cx="5"
                cy="5"
                r="5"
                stroke="white"
                transform="translate(1 1)"
              />
            ) : null}
            <circle // not active
              cx="2"
              cy="2"
              r="2"
              fill={slideState === 1 ? "white" : "#DACCCD"}
              transform="translate(4 4)"
            />
          </svg>

          <svg
            width="3vw"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {slideState === 2 ? (
              <circle //active
                cx="5"
                cy="5"
                r="5"
                stroke="white"
                transform="translate(1 1)"
              />
            ) : null}
            <circle // not active
              cx="2"
              cy="2"
              r="2"
              fill={slideState === 2 ? "white" : "#DACCCD"}
              transform="translate(4 4)"
            />
          </svg>
        </div>
        <Slider {...settings}>
          {/* <div className="w-full h-[50vw] bg-bg1 bg-center bg-cover">a</div>
          <div className="bg-bg2 bg-center">b</div> */}

          <div className="w-full h-[45vw] bg-bg3 bg-center bg-cover z-0">
            <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center ">
              THE NEXT LEVEL LEADERSHIP CAMP
            </h1>
          </div>
          <div className="w-full h-[45vw] bg-bg1 bg-center bg-cover  z-0">
            <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center">
              CLASSROOM WITHOUT WALLS
            </h1>
          </div>
          <div className="w-full h-[45vw] bg-bg2 bg-center bg-cover  z-0">
            <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center">
              THE FIRST STEP
            </h1>
          </div>
        </Slider>

        <div className="w-[45vw] h-[40vw] absolute flex flex-col justify-center ml-[50vw] mt-[-38vw] bg-white rounded-3xl z-10 overflow-hidden">
          <h2 className=" text-[#19103D] text-[4vw] font-extrabold text-center px-[3vw] leading-none pb-[2vw]">
            {slideState === 0
              ? "The Next Level Leadership Camp"
              : slideState === 1
              ? "Classroom Without Walls"
              : slideState === 2
              ? "The First Step"
              : null}
          </h2>
          <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[20vw]">
            <p
              onClick={() => {
                setSelectionState(0);
              }}
              className={
                selectionState === 0
                  ? "px-[1vw] font-medium hover:cursor-pointer"
                  : "px-[1vw] font-medium text-gray-400 hover:cursor-pointer"
              }
            >
              Details
            </p>
            <p
              onClick={() => {
                setSelectionState(1);
              }}
              className={
                selectionState === 1
                  ? "px-[1vw] font-medium hover:cursor-pointer"
                  : "px-[1vw] font-medium text-gray-400 hover:cursor-pointer"
              }
            >
              Why?
            </p>
            <p
              onClick={() => {
                setSelectionState(2);
              }}
              className={
                selectionState === 2
                  ? "px-[1vw] font-medium hover:cursor-pointer"
                  : "px-[1vw] font-medium text-gray-400 hover:cursor-pointer"
              }
            >
              Testimony
            </p>
            <p
              onClick={() => {
                setSelectionState(3);
              }}
              className={
                selectionState === 3
                  ? "px-[1vw] font-medium hover:cursor-pointer"
                  : "px-[1vw] font-medium text-gray-400 hover:cursor-pointer"
              }
            >
              Map
            </p>
          </div>
          {selectionState === 0 ? (
            <p className="text-[2vw] font-bold text-center px-[5vw] py-[3vw] h-[20vw] leading-tight ">
              {slideState === 0 ? (
                <p>
                  Junior Camp, 6-10 years old <br />
                  <span className="text-[1.5vw]">
                    12th to 16th December 2022
                  </span>
                  <br />
                  <br />
                  Senior Camp, 11-17 years old <br />
                  <span className="text-[1.5vw]">
                    12th to 18th December 2022
                  </span>
                </p>
              ) : slideState === 1 ? (
                "The Perfect Bridge between the students’ academic learning and the real world."
              ) : slideState === 2 ? (
                "It is exactly as it says; The First Step! It is all you and this can potentially be one of the toughest 8 hours you would have spent in your life."
              ) : null}
            </p>
          ) : selectionState === 1 ? (
            <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[35vw] h-[20vw]">
              {" "}
              <p className="text-[2vw] font-bold text-center leading-tight pt-[3vw] ">
                {slideState === 0
                  ? "Once a year, a child or a teen must leave the comfort of home and luxury and go to a place called THE NEXT LEVEL CAMP, to answer the tough questions of life to GROW!"
                  : slideState === 1
                  ? "The Perfect Bridge between the students’ academic learning and the real world."
                  : slideState === 2
                  ? "It is exactly as it says; The First Step! It is all you and this can potentially be one of the toughest 8 hours you would have spent in your life."
                  : null}
              </p>
            </div>
          ) : selectionState === 2 ? (
            <p className="flex flex-col place-self-center justify-center item text-[1.1vw] font-medium italic text-center px-[5vw] w-[45vw] h-[20vw] ">
              “The Next Level Camp was one of the hardest things I have done in
              my life, but if you ask me to do it again, I will do it in a
              heartbeat. This is something I would recommend for every teen out
              there and the relationships built here, lasts a lifetime.”{" "}
              <br></br>
              <br></br>
              <br></br>- Kenny, The Next Level 2018 Kulim Camp, Malaysia!
            </p>
          ) : selectionState === 3 ? (
            <div className="flex flex-row bg-map bg-center bg-no-repeat bg-contain justify-center place-self-center place-content-center align-middle w-[37vw] h-[20vw]"></div>
          ) : null}

          {/* <p className=" text-[1vw] text-blue-400 underline pt-[1vw] hover:cursor-pointer">
            Learn More
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
