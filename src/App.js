import React, { useState } from "react";
import Camp from "./components/Camp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gradient from "rgt";
import Class from "./components/Class";
import Slider from "react-slick";
import Team from "./components/Team";
import Teamdetail from "./components/Teamdetail";
import Privacypolicy from "./components/Privacypolicy";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Link,
  Route,
} from "react-router-dom";

import "./App.css";

function App() {
  //TODO:
  // 1. Make first slide the proper order
  // 2. Make the rest of the content only appear after clicking LEARN MORE
  // 3. Make the default content appear correctly

  const [slideState, setSlideState] = useState(0);
  const [navState, setNavState] = useState("Home");
  const [selectionState, setSelectionState] = useState(0);
  const [quoteState, setquoteState] = useState(0);
  const [faqState, setfaqState] = useState(0);
  const [cardState, setCardState] = useState(1);
  const [childname, setChildname] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [parentsname, setParentsname] = useState("");
  const [childrenage, setChildrenage] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");

  let checkingchildname;
  let checkingparentsname;
  let checkingchildage;
  let checkemail;

  var settingsclass = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "mt-[3vw] w-[52vw] h-[33vw] flex flex-row",
  };

  var settingscamp = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "w-[97%] mx-auto",
  };

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
    <Router>
      {/* <div className="text-[5vw]">
        {navState} {selectionState}
      </div> */}
      <div className="App">
        <div className="Navbar-container align-middle bg-[#191434] place-content-center place-items-center flex-row inline-flex justify-even w-full h-[4vw] sticky top-0 z-50">
          <img
            onClick={() => {
              setNavState("Home");
            }}
            className="flex text-center mx-auto my-auto px-[15vw]"
            src={require("./assets/tnllogo.png")}
            alt={"TNL LOGO"}
          />

          <Link to="/">
            <div
              onClick={() => {
                setNavState("Home");
              }}
              className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-montserrat font-medium text-white text-[0.9vw] tracking-wide place-self-center place-content-center place-items-center justify-center align-middle rounded-xl px-[2vw] mr-[3vw] w-fit h-[2.5vw]"
              href="##"
            >
              THE NEXT LEVEL CAMP
            </div>
          </Link>

          <Link to="/team">
            <div
              onClick={() => {
                setNavState("Team");
              }}
              className={
                navState === "Team"
                  ? "font-montserrat font-medium flex text-center pl-[2vw] mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
                  : "font-montserrat font-medium flex text-center pl-[2vw] mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer"
              }
            >
              Team Profile
            </div>
          </Link>

          <div
            onClick={() => {
              setNavState("ContactUs");
            }}
            className={
              navState === "ContactUs"
                ? "font-montserrat font-medium flex text-center px-[5vw] my-auto text-[0.9vw] tracking-wide text-white cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400 pr-[15vw]"
                : "font-montserrat font-medium flex text-center px-[5vw] my-auto text-[0.9vw] tracking-wide text-white cursor-pointer pr-[15vw]"
            }
          >
            Contact Us
          </div>
        </div>
        {navState === "Home" ? (
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
            <div className="w-[10vw] h-[3vw] absolute place-self-end z-50 text-[1.5vw] underline text-blue-400 ml-[67.6vw] mt-[42vw]">
              Learn More
            </div>
            <Slider {...settings}>
              <div className="w-full h-[45vw] bg-bg1 bg-center bg-cover z-0">
                <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center ">
                  CLASSROOM WITHOUT WALLS
                </h1>
              </div>
              <div className="w-full h-[45vw] bg-bg2 bg-center bg-cover  z-0">
                <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center">
                  THE FIRST STEP
                </h1>
              </div>
              <div className="w-full h-[45vw] bg-bg3 bg-center bg-cover  z-0">
                <h1 className="text-white text-[4vw] mt-[15vw] w-[50vw] font-extrabold text-center">
                  THE NEXT LEVEL LEADERSHIP CAMP
                </h1>
              </div>
            </Slider>

            <div className="w-[45vw] h-[40vw] absolute flex flex-col justify-center ml-[50vw] mt-[-38vw] bg-white rounded-3xl z-10 overflow-hidden">
              <h2 className=" text-[#19103D] text-[4vw] font-extrabold text-center px-[3vw] leading-none pb-[2vw]">
                {slideState === 0
                  ? "Classroom Without Walls"
                  : slideState === 1
                  ? "The First Step"
                  : slideState === 2
                  ? "The Next Level Leadership Camp"
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
                    "The Perfect Bridge between the students’ academic learning and the real world."
                  ) : slideState === 1 ? (
                    "It is exactly as it says; The First Step! It is all you and this can potentially be one of the toughest 8 hours you would have spent in your life."
                  ) : slideState === 2 ? (
                    <span>
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
                    </span>
                  ) : null}
                </p>
              ) : selectionState === 1 ? (
                <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[35vw] h-[20vw]">
                  {" "}
                  <p className="text-[2vw] font-bold text-center leading-tight pt-[3vw] ">
                    {slideState === 0
                      ? "The Perfect Bridge between the students’ academic learning and the real world."
                      : slideState === 1
                      ? "Once a year, a child or a teen must leave the comfort of home and luxury and go to a place called THE NEXT LEVEL CAMP, to answer the tough questions of life to GROW!"
                      : slideState === 2
                      ? "It is exactly as it says; The First Step! It is all you and this can potentially be one of the toughest 8 hours you would have spent in your life."
                      : null}
                  </p>
                </div>
              ) : selectionState === 2 ? (
                <p className="flex flex-col place-self-center justify-center item text-[1.1vw] font-medium italic text-center px-[5vw] w-[45vw] h-[20vw] ">
                  “The Next Level Camp was one of the hardest things I have done
                  in my life, but if you ask me to do it again, I will do it in
                  a heartbeat. This is something I would recommend for every
                  teen out there and the relationships built here, lasts a
                  lifetime.” <br></br>
                  <br></br>
                  <br></br>- Kenny, The Next Level 2018 Kulim Camp, Malaysia!
                </p>
              ) : selectionState === 3 ? (
                <div className="flex flex-row bg-map bg-center bg-no-repeat bg-contain justify-center place-self-center place-content-center align-middle w-[37vw] h-[20vw]"></div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* {navState === "Home" && slideState === 0 ? (
          <div className="home-page flex flex-col w-full h-fit">
            <div className="w-full h-[50vw] bg-white"></div>

            <div className="w-full h-fit flex flex-col bg-white">
              <h2 className=" absolute place-self-center justify-center text-[#19103D] text-[4vw] font-extrabold text-center leading-none px-[15vw]">
                These are such tough times to be a parent
              </h2>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[10vw] ml-[15vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                Schools have gotten harder.
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[14vw] ml-[7vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                The bad elements of social media are<br></br>victimizing our
                children
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[20vw] ml-[10vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                They have become more dependent and<br></br>entitled than ever
                before
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[26vw] ml-[10vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                They have become reclusive
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[11vw] ml-[55vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                We have all becomes addicts of technology<br></br>(mostly the
                phone)
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[18vw] ml-[60vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                It is so difficult to understand their needs
              </div>
              <div
                className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[23vw] ml-[67vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
              >
                Gaming world is larger than ever and is<br></br>sucking our kids
                in
              </div>
              <div className="absolute flex flex-col justify-end w-[45vw] h-fit place-self-end mt-[80%] mr-[5%]">
                <h2 className=" text-white text-[3vw] font-bold text-right leading-tight">
                  It’s tough. We see it. We now both need to agree that more has
                  to be done
                </h2>
                <p className="text-white text-[1vw] font-semibold text-right pb-[2vw] pt-[1vw] pl-[17vw]">
                  This cannot be done by you alone. You need a group of people
                  dedicated to the growth and excellence of your children.
                </p>
                <a
                  className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-self-end place-content-center place-items-center justify-center align-middle rounded-xl px-[2vw] w-fit h-[2.5vw]"
                  href="##"
                >
                  GET IN TOUCH
                </a>
              </div>
              <img
                className="flex object-contain w-full mt-[10vw]"
                src={require("./assets/bg4.jpg")}
                alt={"background4"}
              />
            </div>

            <div className="flex flex-col w-full h-[40vw] bg-bg5 bg-center bg-cover justify-center">
              <img
                className="absolute mt-[-13%] place-self-end w-[15vw]"
                src={require("./assets/icomma.jpg")}
                alt={"decoration"}
              />
              <p className="text-[#190539]  font-medium text-[1.2vw] flex flex-col text-left px-[18vw]">
                I am going to be honest here. Working with Coach Gabe was a
                challenge. Matthew got 5/100 for all his subjects when I brought
                him to Coach. Matthew was on medication for ADHD and the school
                had nothing but complaints about him.<br></br> <br></br> Coach
                Gabe told me that he would do his best. This was Matt’s PSLE
                year and we went to Score Campus in June. Results came and he
                got 225. We were speechless for an hour. I asked Matt, how did
                he do this?<br></br> <br></br> He replied, The coaches built me
                a table to stand and do my work. Every time I got a right
                answer, he gave hugs, high fives and a genius cookie.”
              </p>
              <p
                style={{
                  "text-shadow":
                    "-2px -2px 0 #FF5C00,2px -2px 0 #FF5C00,-2px 2px 0 #FF5C00, 2px 2px 0 #FF5C00",
                }}
                className="text-[2vw] italic text-white tracking-wide px-[18vw] text-left pt-[3vw] font-extrabold"
              >
                Matthew, son of Serene
              </p>
            </div>

            <div className="flex flex-col w-full h-[54vw] bg-ellips bg-center bg-cover bg-no-repeat justify-center z-10">
              <h2 className="text-center text-white text-[3vw] font-extrabold ">
                WHY US AND WHO ARE WE?
              </h2>
              <p className="text-center text-white text-[1.1vw] font-bold px-[15vw] pt-[3vw]">
                This is simple.{" "}
                <span className="text-black text-[1.2vw]">
                  We do what we do, so that you can completely enjoy being a
                  parent at home.
                </span>{" "}
                Let’s be honest. You have 18 years at this before they grow
                wings and fly. How do you want them to remember this? Food for
                thought!
              </p>
              <p
                style={{
                  "text-shadow":
                    "-2px -2px 0 #FFFFFF,2px -2px 0 #FFFFFF,-2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF",
                }}
                className="text-[3vw] text-[#F5AA4D] px-[15vw] text-center pt-[3vw] font-extrabold"
              >
                NOW, TO SCORE CAMPUS.
              </p>
              <p className="text-center text-white text-[1.1vw] font-bold px-[15vw] pt-[1vw]">
                My goodness! What a journey it has been?
              </p>
              <div className="inline-flex flex-row justify-around align-middle content-center w-[70vw] pb-[8vw] place-self-center pt-[5vw]">
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    More than a
                  </p>

                  <p
                    style={{
                      "text-shadow":
                        "-2px -2px 0 #FFFFFF,2px -2px 0 #FFFFFF,-2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF",
                    }}
                    className="text-[5vw] text-[#F7AF4D] text-center font-extrabold"
                  >
                    100
                  </p>

                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    cities over 12 countries
                  </p>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    More than
                  </p>

                  <p
                    style={{
                      "text-shadow":
                        "-2px -2px 0 #FFFFFF,2px -2px 0 #FFFFFF,-2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF",
                    }}
                    className="text-[5vw] text-[#F7AA4E] text-center font-extrabold"
                  >
                    200,000
                  </p>

                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    students
                  </p>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    More than
                  </p>

                  <p
                    style={{
                      "text-shadow":
                        "-2px -2px 0 #FFFFFF,2px -2px 0 #FFFFFF,-2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF",
                    }}
                    className="text-[5vw] text-[#F5A752] text-center font-extrabold"
                  >
                    15,000
                  </p>

                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    teachers
                  </p>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-center text-white invisible text-[1.1vw] font-bold ">
                    {"aaaa"}
                  </p>

                  <p
                    style={{
                      "text-shadow":
                        "-2px -2px 0 #FFFFFF,2px -2px 0 #FFFFFF,-2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF",
                    }}
                    className="text-[5vw] text-[#F4A354] text-center font-extrabold"
                  >
                    27
                  </p>

                  <p className="text-center text-white text-[1.1vw] font-bold ">
                    years
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-[50vw]">
              <img
                className="absolute w-[100%] mt-[-9vw] z-[-1]"
                src={require("./assets/component2.jpg")}
                alt={"bgcomponent"}
              />

              <p className="text-center text-black text-[1.5vw] font-medium pt-[5vw] ">
                Our Coaching Philosophy :
              </p>
              <p className="text-center text-black text-[3vw] font-extrabold pt-[3vw] ">
                Learning is a change in behaviour as a<br></br>result of an
                experience.
              </p>
              <div className="inline-flex flex-row justify-center align-middle">
                <p className="text-center text-black text-[1.5vw] font-medium pt-[5vw] ">
                  Powered by <span className="invisible">-</span>
                </p>
                <a
                  className="flex hover:cursor-pointer bg-gradient-to-r from-[#2795D1] to-[#F44839] place-self-end place-content-center place-items-center justify-center align-middle rounded-full px-[3vw] w-fit h-[2.5vw]"
                  href="web.scorecampus.com"
                >
                  <div className="flex flex-col text-center font-semibold tracking-wide justify-center align-middle place-self-center bg-white rounded-full text-[1.1vw] mx-[-2.9vw] w-[10vw] h-[2.3vw]">
                    Scorecampus.com
                  </div>
                </a>

                <p className="text-center text-black text-[1.5vw] font-medium pt-[5vw] ">
                  <span className="invisible">-</span> and{" "}
                  <span className="invisible">-</span>
                </p>

                <a
                  className="flex hover:cursor-pointer bg-gradient-to-r from-[#2795D1] to-[#F44839] place-self-end place-content-center place-items-center justify-center align-middle rounded-full px-[3vw] w-fit h-[2.5vw]"
                  href="web.scorecampus.com"
                >
                  <div className="flex flex-col text-center font-semibold tracking-wide justify-center align-middle place-self-center bg-white rounded-full text-[1.1vw] mx-[-2.9vw] w-[10vw] h-[2.3vw]">
                    Let's Fl!p app
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col place-content-center place-items-end justify-center w-full h-[35vw] bg-bg6 bg-center bg-cover bg-no-repeat">
              <h2 className=" text-white text-[3vw] font-bold text-left leading-tight pr-[3vw] w-[45vw]">
                So, what is this all about and how can we work together?
              </h2>
              <p className="text-left text-white text-[1.1vw] pr-[3vw] w-[45vw] font-medium pt-[1vw]">
                For a start, let’s meet over coffee and talk. But for now, we
                have <br></br>
                described in brief what we do for every child.
              </p>
              <a
                className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-items-center mr-[33vw] mt-[3vw] rounded-full px-[2vw] w-fit h-[2.5vw]"
                href="##"
              >
                GET IN TOUCH
              </a>
            </div>

            <div className="flex flex-col w-full h-[200vw] bg-component4 bg-center bg-cover bg-no-repeat">
              <div className="flex flex-col w-[45vw] ml-[12vw] mt-[10vw] h-fit">
                <p className="text-left text-[#05194A] text-[1.1vw] font-medium">
                  The complete Score Campus experience
                </p>
                <h2 className="text-left text-[#05194A] text-[2.5vw] font-bold leading-none tracking-tighter pt-[1vw]">
                  Sounds very cliche but it all starts within the perimeters of
                  Love and Tough Love
                </h2>
                <p className="text-left text-[#05194A] text-[1.1vw] font-medium pt-[1vw] w-[90%]">
                  At Score Campus, it gets as real as it gets. It is student
                  driven. They are on the driver’s seat and we are the guides.
                  They have dreams and they want to succeed. We just need to
                  listen to them!
                </p>
                <h2 className="text-left text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighter pt-[1vw] w-[80%]">
                  6 Months Coaching Relationship for a start (Start and end date
                  is highly customizable)
                </h2>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-5vw] mr-[10vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card1.png")}
                  alt={"the first step"}
                />
                <h2 className="text-left pl-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  The First Step
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  There are 38 values, attributes and characteristics that you
                  must know about your children. It is designed for kids above
                  10 but you will be surprised by the outcomes.
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-start ml-[10vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card2.png")}
                  alt={"Assigned to a coach"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  Assigned to a coach
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  For academic planning for English, Maths and Science
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-10vw] mr-[25vw]"
              >
                <img
                  className="w-[20vw] place-self-center"
                  src={require("./assets/card3.png")}
                  alt={"Weekdays are for academic coaching"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  Weekdays are for academic coaching
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  In campus or online. We do this though the Let’s Flip App and
                  www.scorecampus.com
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-start mt-[-5vw] ml-[5vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card4.png")}
                  alt={"Saturdays are for character development"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  Saturdays are for character development
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  Skills and Project Work.
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-10vw] mr-[13vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card5.png")}
                  alt={"The Next Level Camp"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  The Next Level Camp
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  5 to 7 days of an experience that every child in the world
                  must go for. More details in the page.
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-start mt-[-5vw] ml-[30vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card6.png")}
                  alt={"Classroom Without Walls"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  Classroom Without Walls
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  4 days Project Management Experience that bridges your
                  academic world to the corporate experience.
                </p>
              </div>

              <div
                className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-5vw] mr-[8vw]"
              >
                <img
                  className="w-[12vw] place-self-center"
                  src={require("./assets/card7.png")}
                  alt={"Competitive Sports"}
                />
                <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
                  Competitive Sports
                </h2>
                <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
                  Sports reveals character and we build on them
                </p>
              </div>
              <a
                className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[3vw] tracking-wide place-items-center rounded-full mt-[5vw] mx-auto px-[4vw] w-fit h-[6vw]"
                href="##"
              >
                GET IN TOUCH
              </a>
            </div>

            <div className="flex flex-col justify-center w-full h-[40vw] ">
              <img
                className=" absolute w-[80vw] place-self-center z-0"
                src={require("./assets/bghome1.jpg")}
                alt={"background pic"}
              />
              <h2 className="text-center place-self-center text-white text-[2.5vw] font-bold leading-none tracking-tighter w-[60vw] z-10">
                We built this entire EcoSystem based on Love.
              </h2>
              <p className="text-center place-self-center px-[3vw] text-white text-[1.1vw] font-medium w-[60vw] pt-[2vw] z-10">
                One might think that this is mushy talk but I challenge you to
                come see the family we have here. Everything here is built as a
                model for schools to follow. Come visit with us!
              </p>
              <a
                className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-self-center place-content-center place-items-center rounded-full justify-center align-middle mt-[2vw] px-[2vw] w-fit h-[2.5vw] z-10"
                href="##"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        ) : navState === "Home" && slideState === 1 ? (
          <div className="class-page flex flex-col w-full h-fit">
            <div className="w-full h-[50vw]"></div>

            <div className="w-full h-[65vw] bg-bgclass3 bg-center bg-no-repeat bg-cover flex flex-col justify-center align-middle">
              <h2 className="text-white text-[3vw] font-extrabold place-self-center justify-center text-center px-[10vw] leading-none">
                THE WORLD IS BECOMING A MORE AND MORE CHALLENGING PLACE DAILY
              </h2>
              <p className="text-white text-[1.5vw] font-medium place-self-center justify-center text-center px-[25vw] leading-none pt-[1vw]">
                and it is crucial that we bring experience that conditions our
                young winners to take on the unknown.
              </p>
            </div>

            <div className="w-full h-[40vw] flex flex-col ">
              <p className="text-[#19103D] text-[1.5vw] font-medium px-[10vw] leading-none pt-[5vw]">
                The Classroom Without Walls 4 days and 3 nights camp built to
                introduce, hone and showcase the skills, attributes and
                excellence that will take our young leaders on the path to
                vocational greatness, when they are of age
              </p>

              <h2 className="text-[#19103D]  text-[3vw] font-extrabold text-center px-[12vw] pt-[5vw]">
                For the 4 days and 3 nights, they are locked in “The Village”
                where they have to
              </h2>

              <img
                className="place-self-center pt-[5vw] w-[70%]"
                src={require("./assets/bgclass5.jpg")}
                alt={"background1"}
              />
            </div>

            <div className="w-full h-fit flex flex-col pt-[10vw]">
              <h2 className="text-[#19103D] text-[3vw] font-extrabold text-center px-[15vw] pt-[5vw]">
                What are some of the qualities and Attributes that are
                discovered and built upon?
              </h2>
              <div className="place-self-center flex flex-row justify-start flex-wrap w-[75vw] h-fit pt-[5vw]">
                <div className="w-[35vw] h-[10vw] flex flex-row  bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/support.png")}
                    alt={"support icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-medium ">
                    Their ability to make friends and form a team
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/target.png")}
                    alt={"target icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Verbalizing their vision
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/inspiration.png")}
                    alt={"inspiration icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Inspiring the team to work on the vision
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/project-management.png")}
                    alt={"management icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Managing a project from start to finish
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/leadership.png")}
                    alt={"leadership icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Leadership when it matters
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/flex.png")}
                    alt={"flexible icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Work Ethic
                  </p>
                </div>
                <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
                  <img
                    className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
                    src={require("./assets/effort.png")}
                    alt={"effort icon"}
                  />
                  <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
                    Grit
                  </p>
                </div>
              </div>
            </div>

            <div className="w-fit h-fit justify-center flex flex-row py-[5vw]">
              <div className="w-[40vw] h-[35vw] flex flex-col justify-center mr-[5vw] pl-[10vw]">
                <h2 className="text-[#19103D] text-[3vw]  font-bold leading-tight text-left ">
                  The future of the world is not about getting a job anymore.
                </h2>
                <p className="text-[#19103D] text-[1.5vw] text-left font-medium leading-tight pt-[1vw]">
                  Will you willing to go the extra mile to solve the problems of
                  the world? This is what people want and how can one prepare
                  this? What skills can be taught today?
                </p>
              </div>

              <Slider {...settingsclass}>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard1.jpg")}
                    alt={"classcard1"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Leading a Positive and Powerful Brain Storming Session
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl ">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard2.jpg")}
                    alt={"classcard2"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Having a Clear Vision Leading to Ideation
                  </p>
                </div>
                <div className="h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl ">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard3.jpg")}
                    alt={"classcard3"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    AGILE Project Management
                  </p>
                </div>
                <div className="h-[32vw] flex flex-col shadow-gray-600 shadow-md  rounded-3xl ">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard8.jpg")}
                    alt={"classcard4"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Funds Management
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard9.jpg")}
                    alt={"classcard5"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Prototyping of the vision
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard4.jpg")}
                    alt={"classcard6"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Presentation Dynamics
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard5.jpg")}
                    alt={"classcard7"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    Mass Communications and Marketing
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard7.jpg")}
                    alt={"classcard8"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    The Business Proposal
                  </p>
                </div>
                <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
                  <img
                    className="w-[30vw] "
                    src={require("./assets/classcard6.jpg")}
                    alt={"classcard9"}
                  />
                  <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
                    CRUNCH TIME! - Bringing it all together!
                  </p>
                </div>
              </Slider>
            </div>

            <div className="w-full h-[55vw] bg-bgclass6 bg-center bg-no-repeat bg-cover flex flex-col justify-center align-middle">
              <h2
                className="text-[#19103D] text-[3vw] font-bold leading-tight 
        text-left place-self-end w-[35vw] mr-[10vw]"
              >
                The Village is the creation of a space
              </h2>
              <p className="text-[#19103D] text-[1.5vw] text-left font-medium leading-tight place-self-end w-[35vw] pt-[2vw] mr-[10vw]">
                that will allow our young creators to be in a natural space
                where they feel inspired. A Simplified High Tech Lab built in
                the beaches and parks of the world, fully functional and
                sustainable.
              </p>
            </div>

            <div className="w-full h-[50vw] flex flex-col justify-center">
              <h2
                className="text-[#19103D] text-[3vw] font-bold leading-tight 
        text-center pb-[3vw]"
              >
                The next 2 camps in Singapore are on the
              </h2>
              <div className="flex flex-row justify-center">
                <img
                  className="w-[20vw] pr-[0.5vw]"
                  src={require("./assets/cardclass1.png")}
                  alt={"cardclass1"}
                />

                <img
                  className="w-[20vw] pl-[0.5vw]"
                  src={require("./assets/cardclass2.png")}
                  alt={"cardclass2"}
                />
              </div>
              <p className="text-[#19103D] text-[1.5vw] text-center font-medium leading-tight pt-[3vw] ">
                Schools around the world can always connect with us for us to
                bring this to your school or organization
              </p>
            </div>
          </div>
        ) : navState === "Home" && slideState === 2 ? (
          <div className="camp-page flex flex-col w-full h-fit">
            <div className="w-full h-[45vw] bg-white"></div>

            <div className="w-full h-[20vw] flex flex-col justify-center align-middle">
              <p className="text-black text-[2.5vw] tracking-tight leading-tight font-extrabold text-center ">
                SO WHAT'S THIS ABOUT?
              </p>
              <p className="text-black text-[1.4vw] tracking-tight leading-tight text-center pt-[3vw] px-[15vw]">
                The Next Level Camp is a 5 to 7 days experience for children
                between 7 and 18 (Children above 10 go through the 7 days)
                usually in a place that is unfamiliar to them. Here is where the
                magic happens!
              </p>
            </div>
            <Slider {...settingscamp}>
              <div className="w-[25vw] h-[30vw] bg-magic1 bg-center bg-cover bg-no-repeat">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw]">
                  EXPERIENTIAL SOCIAL EMOTIONAL LEARNING
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw] ">
                  Expect the unexpected! You want to know more about oneself,
                  throw them into the unknown. You can never truly know what you
                  are made of until you are tested. Popularly known as The First
                  Step!
                </p>
              </div>
              <div className="w-[25vw] h-[30vw]  flex flex-col justify-end bg-magic2 bg-center bg-cover bg-no-repeat">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  MIND AND BODY CLEANSING
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  You can’t fill up a cup that is already full. You know what is
                  the real scary part? You would be surprised what it is mostly
                  filled with. The importance of self growth is self cleansing.
                </p>
              </div>
              <div className="w-[25vw] h-[30vw]  flex flex-col justify-end bg-magic3 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  PEAK PERFORMANCE PSYCHOLOGY
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  Know what you are capable of and in that process, helping
                  others to do the same. #togetherstronger
                </p>
              </div>
              <div className="w-[25vw] h-[30vw]  flex flex-col justify-end bg-magic4 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  HIGH PERFORMANCE TEAM BUILDING
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  No person is an island. As long as you are living on this
                  earth, you need to work with people effectively and
                  efficiently.
                </p>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col justify-end bg-magic5 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  LEADERSHIP WHEN IT MATTERS
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  Leaders eat last. Leaders are first in and last out. Leaders
                  put their neck on the line for their teams. You heard it all.
                  Guess what? Hearing it and reading about it is completely
                  different from being right in the thick of action.
                </p>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col justify-end bg-magic6 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[55%] font-bold text-left px-[2vw] ">
                  FAMILY, HEALING AND FORGIVENESS
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  Have you seen a baby get upset and how it can go from crying
                  to laughing in a split second? Remember? When does that change
                  as we grow up? Why are some of us angry for hours, days,
                  weeks, months, years or in some serious cases, decades? The
                  Healing starts with you!
                </p>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col justify-end bg-magic7 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  TRUST AND RENEWAL
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  A long forgotten word; TRUST! We need to believe and honestly,
                  many things will happen for us to lose faith, and that is when
                  you remember what you learned to RENEW your trust. It is never
                  easy but winners find a way.
                </p>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col justify-end bg-magic8 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  WORK ETHIC
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  Efficiency and Effectiveness using the Game Plan. Work = Force
                  X Distance from a human centric angle. Agile in Education and
                  Agile in Time Management. Taking Educational Scrum to the next
                  level
                </p>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col justify-end bg-magic9 bg-center bg-cover bg-no-repeat ">
                <p className="text-white text-[1.5vw] mt-[60%] font-bold text-left px-[2vw] ">
                  HIGHLIGHTS OF EXPERIENCES
                </p>
                <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
                  The unknown is where the human mind and body thrive. For this
                  very simple reason, we cannot talk about our experiences that
                  we custom design for each and every camp.
                </p>
              </div>
            </Slider>

            <div className="w-full h-[50vw] flex flex-row justify-center bg-pic4 bg-center bg-no-repeat bg-contain align-middle bg-[#F8F0F8]">
              <p className="text-[#19103D] text-[2.5vw] place-self-center font-extrabold text-left w-[20vw] mr-[25vw] z-10">
                FEAR! WE <br></br>AGREE WITH YOU
              </p>

              <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight leading-tight z-10 text-left w-[20vw] ml-[25vw] mt-[-3vw]">
                Our precious little ones going through tough challenges? It is
                scary, but you know what? They are so much more capable than
                what we give them credit for. They need this test and they want
                this test. They are born to win. Now, it is just you! Can you
                let go so that they can become the best version of themselves?
              </p>
            </div>

            <div className="w-full h-[38vw] flex flex-row justify-center align-middle mt-[-5vw] bg-white">
              <div className="w-[40%] flex flex-col justify-center align-middle">
                <p className="text-[#19103D] text-[2.5vw] place-self-center font-extrabold text-left px-[5vw] ">
                  YOU KNOW WHAT IS THE TOUGHEST PART OF GROWTH? IT IS HARD WORK!
                </p>
                <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight text-left px-[5vw] pt-[2vw]">
                  So teachers and parents out there who want it easy for their
                  kids, again, your search continues.
                </p>
              </div>
              <div className="w-[50%] bg-pic5 bg-center bg-no-repeat bg-contain p-[10vw]"></div>
            </div>

            <div className="w-full h-[45vw] mt-[2vw] flex flex-row justify-center align-middle bg-[#F8F0F8]">
              <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight leading-tight  text-left w-[30vw] px-[5vw] mt-[-3vw]">
                Furthest from that! We want a once in a lifetime experience that
                triggers thoughts and emotions; for them to be the best version
                of themselves. Now, that requires experiences that bring out
                these emotions. We live in a world where they want everything
                now and it must be easy. For good things however, one has to put
                in some work.
              </p>
              <img
                className="flex object-contain w-[50vw]"
                src={require("./assets/pic6.jpg")}
                alt={"indoor climbing"}
              />
              <p className="text-[#19103D] text-[2.5vw] tracking-tight leading-tight place-self-center font-extrabold text-left  w-[30vw] px-[6vw] ">
                DO NOT GET US WRONG! WE ARE NOT HERE TO TORTURE THE KIDDOS.
              </p>
            </div>
            <div
              onClick={() => {
                setquoteState(quoteState + 1 === 4 ? 0 : quoteState + 1);
              }}
              className="w-full h-[35vw]"
            >
              <div className="w-full h-[35vw] flex flex-col justify-center align-middle bg-[#F6A652] z-[1]">
                <div className=" w-[80vw] h-[25vw] place-self-center flex flex-col justify-center align-middle  bg-white rounded-3xl">
                  <img
                    className="absolute place-self-end mt-[-8vw] ml-[-2vw] w-[10vw]"
                    src={require("./assets/icomma.jpg")}
                    alt={"comma icon"}
                  />
                  <p className="text-[#19103D] text-[1.4vw]  tracking-tight leading-tight text-center px-[15vw] ">
                    {quoteState === 0
                      ? "“The Next Level Camp was one of the hardest things I have done in my life, but if you ask me to do it again, I will do it in a heartbeat. This is something I would recommend for every teen out there and the relationships built here, lasts a lifetime.”"
                      : quoteState === 1
                      ? "“When she first came to Score she was just going through the motions of life which has landed her into some trouble,but as months passed with guidance from the coaches.I've seen her transform into a self-aware and  driven to excel young powerhouse.”"
                      : quoteState === 2
                      ? "“The Next Level Camp, truly stood up to the name. Before going for the Camp my 12yrs old boy was a lost. He wasn't motivated and we were finding it hard to inspire him. Attending the Camp and being away from home for 7 days, it took Irfan away from his comfort zone. Ever since Camp, Irfan had grown to be an independent boy with more self confidence and self awareness. Looking forward to The Next Level Camp.”"
                      : quoteState === 3
                      ? "“TNL widened my daughter’s awareness to the good and uglies of life but more importantly, reminded her of the gift of choice and gave her the moment and support to build herself up. As a parent, there is nothing more elating and comforting than hearing your child say, “I’ve got this!”"
                      : null}
                  </p>
                  <p className="text-[#19103D] text-[1.5vw] font-bold text-center px-[15vw] pt-[2vw]">
                    {quoteState === 0
                      ? "Kenny, The Next Level 2018 Kulim Camp, Malaysia!"
                      : quoteState === 1
                      ? "From a Dad @ Score Campus, 2022"
                      : quoteState === 2
                      ? "From a Score Campus Dad, TNL June 2022"
                      : quoteState === 3
                      ? "Maureen, mom of Ela @ TNL June 2022"
                      : null}
                  </p>
                </div>
              </div>

              <div className=" buttons absolute inline-flex flex-row place-self-center items-center justify-around mt-[-8vw] ml-[-5vw] w-[10vw] z-10">
                <svg
                  width={quoteState === 0 ? "1vw" : "0.6vw"}
                  height={quoteState === 0 ? "1vw" : "0.6vw"}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="5.5"
                    transform="matrix(1 0 0 -1 5.5 5.5)"
                    fill={quoteState === 0 ? "#3E3E3E" : "#BFBFBF"}
                  />
                </svg>
                <svg
                  width={quoteState === 1 ? "1vw" : "0.6vw"}
                  height={quoteState === 1 ? "1vw" : "0.6vw"}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="5.5"
                    transform="matrix(1 0 0 -1 5.5 5.5)"
                    fill={quoteState === 1 ? "#3E3E3E" : "#BFBFBF"}
                  />
                </svg>
                <svg
                  width={quoteState === 2 ? "1vw" : "0.6vw"}
                  height={quoteState === 2 ? "1vw" : "0.6vw"}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="5.5"
                    transform="matrix(1 0 0 -1 5.5 5.5)"
                    fill={quoteState === 2 ? "#3E3E3E" : "#BFBFBF"}
                  />
                </svg>
                <svg
                  width={quoteState === 3 ? "1vw" : "0.6vw"}
                  height={quoteState === 3 ? "1vw" : "0.6vw"}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="5.5"
                    transform="matrix(1 0 0 -1 5.5 5.5)"
                    fill={quoteState === 3 ? "#3E3E3E" : "#BFBFBF"}
                  />
                </svg>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center align-middle h-[40vw] pt-[10vw] bg-white">
              <h2
                className=" text-[#19103D] text-[2.5vw] font-extrabold text-center mt-[-3vw] px-[3vw] leading-none 
            pb-[3vw]"
              >
                LET US PAINT YOU A PICTURE WITH WORDS.
              </h2>
              <div className="flex flex-row justify-center place-self-center place-content-center align-middle h-[30vw] w-[75vw]">
                <div className="bg-pic1 bg-center bg-contain bg-no-repeat w-[25vw] h-[30vw] flex flex-col place-content-end">
                  <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] py-[2vw]">
                    They say the toughest seas make the best sailors.
                  </p>
                </div>
                <div className="bg-pic2 bg-center bg-contain bg-no-repeat w-[25vw] h-[30vw] flex flex-col place-content-end">
                  <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] py-[1vw]">
                    They say that success happens in the uncomfortable zone.
                  </p>
                </div>
                <div className="bg-pic3 bg-center bg-contain bg-no-repeat w-[25vw] h-[30vw] flex flex-col place-content-end">
                  <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] py-[1vw]">
                    They say the hardest tests and challenges make the champion.
                  </p>
                </div>
              </div>
              <p className="text-[#19103D] text-[1.1vw] font-medium tracking-wide text-center px-[2vw] pt-[3vw]">
                So why are parents not giving the kiddos this experience? You
                know they need and must have this, so why?
              </p>
            </div>

            <div className="w-full h-[55vw] flex flex-col bg-bg8 bg-center bg-cover bg-no-repeat">
              <img
                className="flex object-contain w-[30vw] mt-[10vw] ml-[15vw]"
                src={require("./assets/bg7.jpg")}
                alt={"ira and friends"}
              />
              <p className="text-black text-[1.4vw] mt-[-16vw] mr-[18vw] place-self-end tracking-tight leading-tight w-[30vw] text-left">
                The Next Level Camp is not an experience that changes your life.
                People who say that are clueless about the beauty of life.{" "}
                <span className="font-bold">
                  The Next Level gets you triggered and thinking; wanting more
                  out life.
                </span>
              </p>

              <p className="text-black text-[1.4vw] mt-[15vw] ml-[15vw] tracking-tight leading-tight w-[45vw] text-left">
                Do connect with the coaches to set up a time to learn more about
                how you can get moving forward with The Next Level. As for
                international students, the fee does not include flight travel
                and R&R in Singapore. Schools can get in touch with us for bulk
                bookings too.
              </p>

              <div className="hover:cursor-pointer place-self-end mr-[22vw] mt-[-6vw] content-center text-center text-white text-[1.4vw] px-[3vw] py-[1vw] rounded-full bg-[#05194A]">
                Get in touch!
              </div>
            </div>

            <div className="w-full h-[40vw] flex flex-row justify-center align-middle bg-[#F8F0F8]">
              <div className="w-[25vw] h-[30vw] flex flex-col place-self-center justify-center align-middle text-[2.5vw] text-[#19103D] font-bold text-left px-[3vw] ">
                THE NEXT LEVEL EXPERIENCE IS BROUGHT TO YOU AT
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col place-self-center justify-center align-middle bg-[#05194A] rounded-3xl mx-[2vw]">
                <p className="text-[1vw] tracking-widest text-white font-bold">
                  J U N I O R
                </p>
                <p className="text-[3.5vw] text-white tracking-wide font-bold py-[2vw]">
                  SGD$4380
                </p>
                <div className="inline-flex flex-row justify-start align-middle px-[3vw] py-[0.5vw]">
                  <svg
                    width="1.8vw"
                    height="1.8vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1032 5.9549C19.2056 5.85045 19.3278 5.76747 19.4626 5.71082C19.5975 5.65418 19.7422 5.625 19.8885 5.625C20.0347 5.625 20.1795 5.65418 20.3144 5.71082C20.4492 5.76747 20.5714 5.85045 20.6737 5.9549C21.1027 6.3884 21.1087 7.0889 20.6887 7.5299L11.8192 18.0149C11.7185 18.1255 11.5963 18.2144 11.4601 18.2761C11.3239 18.3378 11.1765 18.3711 11.0269 18.3739C10.8774 18.3767 10.7289 18.349 10.5904 18.2924C10.452 18.2358 10.3265 18.1516 10.2217 18.0449L4.82474 12.5759C4.61659 12.3636 4.5 12.0782 4.5 11.7809C4.5 11.4836 4.61659 11.1982 4.82474 10.9859C4.92711 10.8815 5.04929 10.7985 5.18412 10.7418C5.31896 10.6852 5.46374 10.656 5.60999 10.656C5.75624 10.656 5.90102 10.6852 6.03586 10.7418C6.17069 10.7985 6.29287 10.8815 6.39524 10.9859L10.9732 15.6254L19.0732 5.9879C19.0826 5.97631 19.0926 5.96529 19.1032 5.9549Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[1.2vw] pl-[1vw] text-white font-bold">
                    Junior Programs
                  </p>
                </div>
                <div className="inline-flex flex-row justify-start align-middle px-[3vw] py-[0.5vw]">
                  <svg
                    width="1.8vw"
                    height="1.8vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1032 5.9549C19.2056 5.85045 19.3278 5.76747 19.4626 5.71082C19.5975 5.65418 19.7422 5.625 19.8885 5.625C20.0347 5.625 20.1795 5.65418 20.3144 5.71082C20.4492 5.76747 20.5714 5.85045 20.6737 5.9549C21.1027 6.3884 21.1087 7.0889 20.6887 7.5299L11.8192 18.0149C11.7185 18.1255 11.5963 18.2144 11.4601 18.2761C11.3239 18.3378 11.1765 18.3711 11.0269 18.3739C10.8774 18.3767 10.7289 18.349 10.5904 18.2924C10.452 18.2358 10.3265 18.1516 10.2217 18.0449L4.82474 12.5759C4.61659 12.3636 4.5 12.0782 4.5 11.7809C4.5 11.4836 4.61659 11.1982 4.82474 10.9859C4.92711 10.8815 5.04929 10.7985 5.18412 10.7418C5.31896 10.6852 5.46374 10.656 5.60999 10.656C5.75624 10.656 5.90102 10.6852 6.03586 10.7418C6.17069 10.7985 6.29287 10.8815 6.39524 10.9859L10.9732 15.6254L19.0732 5.9879C19.0826 5.97631 19.0926 5.96529 19.1032 5.9549Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[1.2vw] pl-[1vw] text-white font-bold">
                    Junior is 5 days 4 nights
                  </p>
                </div>
                <div className="hover:cursor-pointer place-self-center place-items-center rounded-full mt-[3vw] px-[2vw] py-[0.5vw] bg-white text-[#05194A] text-[1.2vw]">
                  <a href="##">Register Now</a>
                </div>
              </div>
              <div className="w-[25vw] h-[30vw] flex flex-col place-self-center justify-center align-middle bg-[#05194A] rounded-3xl mx-[2vw] ">
                <p className="text-[1vw] tracking-widest text-white font-bold">
                  S E N I O R
                </p>
                <p className="text-[3.5vw] text-white tracking-wide font-bold py-[2vw]">
                  SGD$4380
                </p>
                <div className="inline-flex flex-row justify-start align-middle px-[3vw] py-[0.5vw]">
                  <svg
                    width="1.8vw"
                    height="1.8vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1032 5.9549C19.2056 5.85045 19.3278 5.76747 19.4626 5.71082C19.5975 5.65418 19.7422 5.625 19.8885 5.625C20.0347 5.625 20.1795 5.65418 20.3144 5.71082C20.4492 5.76747 20.5714 5.85045 20.6737 5.9549C21.1027 6.3884 21.1087 7.0889 20.6887 7.5299L11.8192 18.0149C11.7185 18.1255 11.5963 18.2144 11.4601 18.2761C11.3239 18.3378 11.1765 18.3711 11.0269 18.3739C10.8774 18.3767 10.7289 18.349 10.5904 18.2924C10.452 18.2358 10.3265 18.1516 10.2217 18.0449L4.82474 12.5759C4.61659 12.3636 4.5 12.0782 4.5 11.7809C4.5 11.4836 4.61659 11.1982 4.82474 10.9859C4.92711 10.8815 5.04929 10.7985 5.18412 10.7418C5.31896 10.6852 5.46374 10.656 5.60999 10.656C5.75624 10.656 5.90102 10.6852 6.03586 10.7418C6.17069 10.7985 6.29287 10.8815 6.39524 10.9859L10.9732 15.6254L19.0732 5.9879C19.0826 5.97631 19.0926 5.96529 19.1032 5.9549Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[1.2vw] pl-[1vw] text-white font-bold">
                    Senior Programs
                  </p>
                </div>
                <div className="inline-flex flex-row justify-start align-middle px-[3vw] py-[0.5vw]">
                  <svg
                    width="1.8vw"
                    height="1.8vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1032 5.9549C19.2056 5.85045 19.3278 5.76747 19.4626 5.71082C19.5975 5.65418 19.7422 5.625 19.8885 5.625C20.0347 5.625 20.1795 5.65418 20.3144 5.71082C20.4492 5.76747 20.5714 5.85045 20.6737 5.9549C21.1027 6.3884 21.1087 7.0889 20.6887 7.5299L11.8192 18.0149C11.7185 18.1255 11.5963 18.2144 11.4601 18.2761C11.3239 18.3378 11.1765 18.3711 11.0269 18.3739C10.8774 18.3767 10.7289 18.349 10.5904 18.2924C10.452 18.2358 10.3265 18.1516 10.2217 18.0449L4.82474 12.5759C4.61659 12.3636 4.5 12.0782 4.5 11.7809C4.5 11.4836 4.61659 11.1982 4.82474 10.9859C4.92711 10.8815 5.04929 10.7985 5.18412 10.7418C5.31896 10.6852 5.46374 10.656 5.60999 10.656C5.75624 10.656 5.90102 10.6852 6.03586 10.7418C6.17069 10.7985 6.29287 10.8815 6.39524 10.9859L10.9732 15.6254L19.0732 5.9879C19.0826 5.97631 19.0926 5.96529 19.1032 5.9549Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[1.2vw] pl-[1vw] text-white font-bold">
                    Junior is 7 days 6 nights
                  </p>
                </div>
                <div className="hover:cursor-pointer place-self-center place-items-center rounded-full mt-[3vw] px-[2vw] py-[0.5vw] bg-white text-[#05194A] text-[1.2vw]">
                  <a href="##">Register Now</a>
                </div>
              </div>
            </div>
            <div className="w-full h-[50vw] flex flex-row justify-center align-middle p-[3vw] bg-[#F8F0F8]">
              <div className="w-[33%] h-[100%] flex flex-col justify-center align-middle bg-[#FB7135]">
                <p className="text-[4vw] text-white font-extrabold leading-none px-[3vw] text-left">
                  HOW CAN I CONNECT WITH THE COACHES?
                </p>
                <p className="text-[1.4vw] text-white pl-[3vw] pr-[5vw] pt-[2vw]  text-left">
                  Fill in the form and our coaches will get in touch with you.
                </p>
              </div>
              <div className="w-[33%] h-[100%] flex flex-col justify-center align-middle ">
                <label
                  htmlFor="childname"
                  className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                >
                  Name of Children
                </label>
                <input
                  onBlur={() => {
                    checkingchildname =
                      document.getElementById("childname").value;
                    if (checkingchildname.length < 4) {
                      document.getElementById("childname").value = "";
                      document.getElementById("childname").style.border =
                        "2px solid red";
                      document.getElementById("name-error").innerHTML =
                        "Name can't be less than 4 characters";
                    } //else if check if all numbers
                    else if (checkingchildname.match(/^[0-9]+$/)) {
                      document.getElementById("childname").value = "";
                      document.getElementById("childname").style.border =
                        "2px solid red";
                      document.getElementById("name-error").innerHTML =
                        "Name can't number";
                    } else {
                      setChildname(checkingchildname);
                      document.getElementById("name-error").innerHTML = "";
                      document.getElementById("childname").style.border =
                        "2px solid #00FF0A";
                    }
                  }}
                  id="childname"
                  placeholder="Type your name"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <p
                  class="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                  id="name-error"
                ></p>
                <label
                  htmlFor="schoolname"
                  className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
                >
                  School & Grade
                </label>
                <input
                  onBlur={() => {
                    if (
                      document.getElementById("schoolname").value.length === 0
                    ) {
                      document.getElementById("schoolname").style.border =
                        "2px solid red";
                    } else {
                      document.getElementById("schoolname").style.border =
                        "2px solid #00FF0A";
                      setSchoolname(document.getElementById("schoolname"));
                    }
                  }}
                  id="schoolname"
                  placeholder="Type your School name"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <label
                  htmlFor="pnumber"
                  className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black text-left place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
                >
                  Mobile Number of Corresponding Parent
                </label>
                <input
                  onBlur={() => {
                    if (document.getElementById("pnumber").value.length === 0) {
                      document.getElementById("pnumber").style.border =
                        "2px solid red";
                    } else {
                      document.getElementById("pnumber").style.border =
                        "2px solid #00FF0A";
                      setPnumber(document.getElementById("pnumber"));
                    }
                  }}
                  id="pnumber"
                  type="number"
                  placeholder="+65XXXXXX"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <label
                  htmlFor="parentsname"
                  className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
                >
                  Parents Name
                </label>
                <input
                  onBlur={() => {
                    checkingparentsname =
                      document.getElementById("parentsname").value;
                    if (checkingparentsname.length < 4) {
                      document.getElementById("parentsname").value = "";
                      document.getElementById("parentsname").style.border =
                        "2px solid red";
                      document.getElementById("parent-name-error").innerHTML =
                        "Name can't be less than 4 characters";
                    } //else if check if all numbers
                    else if (checkingparentsname.match(/^[0-9]+$/)) {
                      document.getElementById("parentsname").value = "";
                      document.getElementById("parentsname").style.border =
                        "2px solid red";
                      document.getElementById("parent-name-error").innerHTML =
                        "Name can't be numbers";
                    } else {
                      setParentsname(checkingparentsname);
                      document.getElementById("parentsname").style.border =
                        "2px solid #00FF0A";
                      document.getElementById("parent-name-error").innerHTML =
                        "";
                    }
                  }}
                  id="parentsname"
                  placeholder="Type your Parents name"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <p
                  class="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                  id="parent-name-error"
                ></p>
              </div>
              <div className="w-[33%] h-[100%] flex flex-col justify-center align-middle ">
                <label
                  htmlFor="childrenage"
                  className="font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                >
                  Age of Children
                </label>
                <input
                  onBlur={() => {
                    checkingchildage =
                      document.getElementById("childrenage").value;
                    if (0 < checkingchildage < 99) {
                      document.getElementById("childrenage").style.border =
                        "2px solid #00FF0A";
                      setChildrenage(checkingchildage);
                      document.getElementById("age-error").innerHTML = "";
                    } else {
                      document.getElementById("childrenage").value = "";
                      document.getElementById("childrenage").style.border =
                        "2px solid red";
                      document.getElementById("age-error").innerHTML =
                        "Please input a valid number";
                    }
                  }}
                  id="childrenage"
                  type="number"
                  placeholder="Type your children's age"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <p
                  class="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                  id="age-error"
                ></p>
                <label
                  htmlFor="country"
                  className="font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
                >
                  Country
                </label>
                <select
                  onBlur={() => {
                    if (document.getElementById("country").value.length === 0) {
                      document.getElementById("country").style.border =
                        "2px solid red";
                    } else {
                      document.getElementById("country").style.border =
                        "2px solid #00FF0A";
                      setCountry(document.getElementById("country"));
                    }
                  }}
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                  id="country"
                  name="country"
                  placeholder="Select Your Country"
                >
                  <option value=""></option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">
                    Congo, The Democratic Republic of The
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and The Grenadines">
                    Saint Vincent and The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">
                    South Georgia and The South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <label
                  htmlFor="email"
                  className="font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
                >
                  Email of Corresponding Parent
                </label>
                <input
                  onBlur={() => {
                    checkemail = document.getElementById("email").value;
                    if (
                      checkemail.match(
                        /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                      )
                    ) {
                      setEmail(checkemail);
                      document.getElementById("email").style.border =
                        "2px solid #00FF0A";
                      document.getElementById("email-error").innerHTML = "";
                    } else {
                      document.getElementById("email").style.border =
                        "2px solid red";
                      document.getElementById("email-error").innerHTML =
                        "Please enter an email address";
                    }
                  }}
                  id="email"
                  type="email"
                  placeholder="Parents@email.com"
                  className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
                <p
                  class="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
                  id="email-error"
                ></p>
                <label
                  htmlFor="input"
                  className="font-montserrat text-[0.9vw] text-black text-left place-self-start pl-[3.1vw]"
                >
                  Any additional information or concerns you have for your
                  children and how you feel the next level coaches can help
                </label>
                <textarea
                  onBlur={() => {
                    document.getElementById("input").style.border =
                      "2px solid #00FF0A";
                    setInput(document.getElementById("input"));
                  }}
                  id="input"
                  type="text"
                  placeholder="Type here"
                  className="flex flex-col justify-center w-[80%] h-[5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
                />
              </div>
              <div className="hover:cursor-pointer absolute place-self-center place-items-center rounded-full mt-[37vw] ml-[30vw] px-[5vw] py-[0.5vw] bg-[#05194A] text-white text-[1.1vw]">
                <a href="##">Register</a>
              </div>

              <Link onClick={() => setNavState("privacy")} to="/privacy">
                <div className="absolute place-self-center place-items-center rounded-full w-[20vw] mt-[41.5vw] ml-[-41vw] px-[5vw] py-[0.5vw] tracking-tight text-gray-500 text-[0.5vw]">
                  By clicking the submit button below, I agree to and accept the{" "}
                  <span className="text-gray-700 underline hover:cursor-pointer">
                    following terms and conditions
                  </span>
                </div>
              </Link>
            </div>

            <div className="w-full h-[30vw] flex flex-col justify-center align-middle">
              <div className=" flex flex-col justify-center align-middle bg-bg9 bg-center bg-contain bg-no-repeat w-[75%] h-full place-self-center">
                <p className="text-white text-[1.4vw] pb-[1vw] text-center">
                  2022 Dates of The Next Level Camp
                </p>
                <p className="text-white text-[2.5vw] font-extrabold text-center px-[10vw]">
                  12TH TO 18TH OF DECEMBER 2022 IN BINTAN, INDONESIA.
                </p>
              </div>
            </div>
            <div className="w-full h-[20vw] flex flex-col justify-center align-middle content-center pt-[5vw]">
              <div className="w-full inline-flex flex-row justify-evenly align-middle h-fit">
                <p
                  onClick={() => setfaqState(0)}
                  className={
                    faqState === 0
                      ? "text-black font-bold text-[1.1vw] pl-[5vw] hover:cursor-pointer h-fit underline underline-offset-[1vw] decoration-[0.2vw] underline-black"
                      : "text-gray-500 font-bold text-[1vw] pl-[5vw] hover:cursor-pointer h-fit"
                  }
                >
                  Flight, Visa and Stay
                </p>

                <p
                  onClick={() => setfaqState(1)}
                  className={
                    faqState === 1
                      ? "text-black font-bold text-[1.1vw] pl-[5vw] hover:cursor-pointer h-fit underline underline-offset-[1vw] decoration-[0.2vw] underline-black"
                      : "text-gray-500 font-bold text-[1vw] pl-[5vw] hover:cursor-pointer h-fit"
                  }
                >
                  Schools and Tertiary Organizations
                </p>

                <p
                  onClick={() => setfaqState(2)}
                  className={
                    faqState === 2
                      ? "text-black font-bold text-[1.1vw] pl-[5vw] hover:cursor-pointer h-fit underline underline-offset-[1vw] decoration-[0.2vw] underline-black"
                      : "text-gray-500 font-bold text-[1vw] pl-[5vw] hover:cursor-pointer h-fit"
                  }
                >
                  From the desk of the coaches of the next level experience
                </p>
              </div>
              <p className="text-black font-normal text-[1vw] pt-[3vw] px-[14vw] text-left h-[10vw]">
                {faqState === 0
                  ? "Depending on where you are coming from, the coaches will advise accordingly. The destination to land and take off after the experience will always be Singapore and when the kids come from abroad, we do a little extra with the leaders."
                  : faqState === 1
                  ? "When you decide that you want this for your school students, please get in touch with our coaches and we will let you know more."
                  : faqState === 2
                  ? "Winners never want it easy. Neither can you expect Success to be given to you on a platter. It is all about Work Ethic. Experience every moment and let success come into your life when you least expect it!"
                  : null}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )} */}
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/camp" element={<Camp />} />
        <Route path="/class" element={<Class />} />  */}
        <Route path="/privacy" element={<Privacypolicy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:name" element={<Teamdetail />} />
      </Routes>
    </Router>
  );
}

export default App;
