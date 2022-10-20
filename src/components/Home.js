import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Form from "./Form";

function Home() {
  const [selectionState, setSelectionState] = useState(0);
  const [slideState, setSlideState] = useState(0);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="home-page flex flex-col w-full h-fit">
      <div className="w-full h-fit flex flex-col bg-white mt-[3vw]">
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
          The bad elements of social media are<br></br>victimizing our children
        </div>
        <div
          className="w-fit h-fit absolute  font-medium text-gray-500 text-[1.1vw] bg-white outline-[#3D2B93] 
          mt-[20vw] ml-[10vw] px-[2vw] py-[0.3vw] rounded-full outline outline-1 text-center"
        >
          They have become more dependent and<br></br>entitled than ever before
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
          We have all becomes addicts of technology<br></br>(mostly the phone)
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
          Gaming world is larger than ever and is<br></br>sucking our kids in
        </div>
        <div className="absolute flex flex-col justify-end w-[45vw] h-fit place-self-end mt-[80%] mr-[5%]">
          <h2 className=" text-white text-[3vw] font-bold text-right leading-tight">
            It’s tough. We see it. We now both need to agree that more has to be
            done
          </h2>
          <p className="text-white text-[1vw] font-semibold text-right pb-[2vw] pt-[1vw] pl-[17vw]">
            This cannot be done by you alone. You need a group of people
            dedicated to the growth and excellence of your children.
          </p>
          <a
            className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-self-end place-content-center place-items-center justify-center align-middle rounded-xl px-[2vw] w-fit h-[2.5vw]"
            href="#registration"
          >
            GET IN TOUCH
          </a>
        </div>
        <img
          className="flex object-contain w-full mt-[-3vw]"
          src={require("../assets/bg4.jpg")}
          alt={"background4"}
        />
      </div>

      <div className="flex flex-col w-full h-[40vw] bg-bg5 bg-center bg-cover justify-center">
        <img
          className="absolute mt-[-13%] place-self-end w-[15vw]"
          src={require("../assets/icomma.jpg")}
          alt={"decoration"}
        />
        <p className="text-[#190539]  font-medium text-[1.2vw] flex flex-col text-left px-[18vw]">
          I am going to be honest here. Working with Coach Gabe was a challenge.
          Matthew got 5/100 for all his subjects when I brought him to Coach.
          Matthew was on medication for ADHD and the school had nothing but
          complaints about him.<br></br> <br></br> Coach Gabe told me that he
          would do his best. This was Matt’s PSLE year and we went to Score
          Campus in June. Results came and he got 225. We were speechless for an
          hour. I asked Matt, how did he do this?
          <br></br> <br></br> He replied, The coaches built me a table to stand
          and do my work. Every time I got a right answer, he gave hugs, high
          fives and a genius cookie.”
        </p>
        <p
          style={{
            "textShadow":
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
            We do what we do, so that you can completely enjoy being a parent at
            home.
          </span>{" "}
          Let’s be honest. You have 18 years at this before they grow wings and
          fly. How do you want them to remember this? Food for thought!
        </p>
        <p
          style={{
            "textShadow":
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
                "textShadow":
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
                "textShadow":
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
                "textShadow":
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
                "textShadow":
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
          src={require("../assets/component2.jpg")}
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
            target="_blank"
            rel="noreferrer"
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
            href="https://onelink.to/hc6ta4"
            target="_blank"
            rel="noreferrer"
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
          For a start, let’s meet over coffee and talk. But for now, we have{" "}
          <br></br>
          described in brief what we do for every child.
        </p>
        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-items-center mr-[33vw] mt-[3vw] rounded-full px-[2vw] w-fit h-[2.5vw]"
          href="#registration"
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
            Sounds very cliche but it all starts within the perimeters of Love
            and Tough Love
          </h2>
          <p className="text-left text-[#05194A] text-[1.1vw] font-medium pt-[1vw] w-[90%]">
            At Score Campus, it gets as real as it gets. It is student driven.
            They are on the driver’s seat and we are the guides. They have
            dreams and they want to succeed. We just need to listen to them!
          </p>
          <h2 className="text-left text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighter pt-[1vw] w-[80%]">
            6 Months Coaching Relationship for a start (Start and end date is
            highly customizable)
          </h2>
        </div>

        <div
          className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-5vw] mr-[10vw]"
        >
          <img
            className="w-[12vw] place-self-center"
            src={require("../assets/card1.png")}
            alt={"the first step"}
          />
          <h2 className="text-left pl-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
            The First Step
          </h2>
          <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
            There are 38 values, attributes and characteristics that you must
            know about your children. It is designed for kids above 10 but you
            will be surprised by the outcomes.
          </p>
        </div>

        <div
          className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-start ml-[10vw]"
        >
          <img
            className="w-[12vw] place-self-center"
            src={require("../assets/card2.png")}
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
            src={require("../assets/card3.png")}
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
            src={require("../assets/card4.png")}
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
            src={require("../assets/card5.png")}
            alt={"The Next Level Camp"}
          />
          <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
            The Next Level Camp
          </h2>
          <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
            5 to 7 days of an experience that every child in the world must go
            for. More details in the page.
          </p>
        </div>

        <div
          className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-start mt-[-5vw] ml-[30vw]"
        >
          <img
            className="w-[12vw] place-self-center"
            src={require("../assets/card6.png")}
            alt={"Classroom Without Walls"}
          />
          <h2 className="text-left px-[3vw] text-[#05194A] text-[1.8vw] font-bold leading-none tracking-tighte pt-[2vw]">
            Classroom Without Walls
          </h2>
          <p className="text-left px-[3vw] text-[#05194A] text-[1.1vw] font-medium pt-[1vw]">
            4 days Project Management Experience that bridges your academic
            world to the corporate experience.
          </p>
        </div>

        <div
          className="flex flex-col justify-center w-[24vw] h-[28vw] backdrop-blur-2xl rounded-3xl outline outline-4 outline-white
         place-self-end mt-[-5vw] mr-[8vw]"
        >
          <img
            className="w-[12vw] place-self-center"
            src={require("../assets/card7.png")}
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
          href="#registration"
        >
          GET IN TOUCH
        </a>
      </div>

      <div className="newslider">
        <div className="w-full h-fit absolute ">
          <div className="absolute flex flex-row justify-center align-middle w-[10vw] h-[3vw] z-50 ml-[1vw] mt-[42vw]">
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
          <Link
            to={
              slideState === 0
                ? "/class"
                : slideState === 1
                ? "/thefirststep"
                : slideState === 2
                ? "/camp"
                : null
            }
          >
            <div className="hover:cursor-pointer w-[10vw] h-[3vw] absolute place-self-end z-20 text-[1.5vw] underline text-blue-400 ml-[67.6vw] mt-[42vw]">
              Learn More
            </div>
          </Link>

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
            </div>
            {selectionState === 0 ? (
              <p className="text-[2vw] font-bold text-center px-[5vw] py-[3vw] h-[20vw] leading-tight ">
                {slideState === 0 ? (
                  <span>
                    5th to 8th December 2022 <br /> 7 to 17 years old
                  </span>
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
                    ? "It is exactly as it says; The First Step! It is all you and this can potentially be one of the toughest 8 hours you would have spent in your life."
                    : slideState === 2
                    ? "Once a year, a child or a teen must leave the comfort of home and luxury and go to a place called THE NEXT LEVEL CAMP, to answer the tough questions of life to GROW!"
                    : null}
                </p>
              </div>
            ) : selectionState === 2 ? (
              <p className="flex flex-col place-self-center justify-center item text-[1.1vw] font-medium italic text-center px-[5vw] w-[45vw] h-[20vw] ">
                “The Next Level Camp was one of the hardest things I have done
                in my life, but if you ask me to do it again, I will do it in a
                heartbeat. This is something I would recommend for every teen
                out there and the relationships built here, lasts a lifetime.”{" "}
                <br></br>
                <br></br>
                <br></br>- Kenny, The Next Level 2018 Kulim Camp, Malaysia!
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="spacer w-full h-[50vw]"></div>

      <div className="flex flex-col justify-center w-full h-[40vw] ">
        <img
          className=" absolute w-[80vw] place-self-center z-0"
          src={require("../assets/bghome1.jpg")}
          alt={"background pic"}
        />
        <h2 className="text-center place-self-center text-white text-[2.5vw] font-bold leading-none tracking-tighter w-[60vw] z-10">
          We built this entire EcoSystem based on Love.
        </h2>
        <p className="text-center place-self-center px-[3vw] text-white text-[1.1vw] font-medium w-[60vw] pt-[2vw] z-10">
          One might think that this is mushy talk but I challenge you to come
          see the family we have here. Everything here is built as a model for
          schools to follow. Come visit with us!
        </p>
        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-extrabold text-white text-[1.1vw] tracking-wide place-self-center place-content-center place-items-center rounded-full justify-center align-middle mt-[2vw] px-[2vw] w-fit h-[2.5vw] z-10"
          href="#registration"
        >
          GET IN TOUCH
        </a>
      </div>
      <Form />
{/* 
      <div
        id="registration"
        className="w-full h-[50vw] flex flex-row justify-center align-middle p-[3vw] bg-[#F8F0F8]"
      >
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
              checkingchildname = document.getElementById("childname").value;
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
            className="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
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
              if (document.getElementById("schoolname").value.length === 0) {
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
                document.getElementById("parent-name-error").innerHTML = "";
              }
            }}
            id="parentsname"
            placeholder="Type your Parents name"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          />
          <p
            className="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
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
              checkingchildage = document.getElementById("childrenage").value;
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
            className="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
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
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
            <option value="Moldova, Republic of">Moldova, Republic of</option>
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
            <option value="Netherlands Antilles">Netherlands Antilles</option>
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
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">
              Saint Pierre and Miquelon
            </option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
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
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
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
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
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
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
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
                document.getElementById("email").style.border = "2px solid red";
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
            className="text-red-500 text-xs italic font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]"
            id="email-error"
          ></p>
          <label
            htmlFor="input"
            className="font-montserrat text-[0.9vw] text-black text-left place-self-start pl-[3.1vw]"
          >
            Any additional information or concerns you have for your children
            and how you feel the next level coaches can help
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

        <Link to="/privacy">
          <div className="absolute place-self-center place-items-center rounded-full w-[20vw] mt-[41.5vw] ml-[-41vw] px-[5vw] py-[0.5vw] tracking-tight text-gray-500 text-[0.5vw]">
            By clicking the submit button below, I agree to and accept the{" "}
            <span className="text-gray-700 underline hover:cursor-pointer">
              following terms and conditions
            </span>
          </div>
        </Link>
      </div> */}
    </div>
  );
}

export default Home;
