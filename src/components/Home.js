import React, { useState } from "react";
import App from "../App";
import { motion } from "framer-motion";

function Home() {
  const [cardState, setCardState] = useState(1);

  return (
    <div className="wrapper flex flex-col w-full h-fit">
      {/* <div className="w-full h-fit">
        <img
          className="flex object-contain w-full"
          src={require("../assets/bg1.jpg")}
          alt={"background1"}
        />
      </div>

      <div className="w-full h-[40vw] absolute flex flex-row">
        <div className="w-[50vw] h-[100%] flex flex-col justify-center  text-white text-[4vw] font-extrabold text-center">
          CLASSROOM<br></br> WITHOUT WALLS
        </div>
        <div className="w-[45vw] h-[100%] flex flex-col justify-center  bg-white rounded-3xl mt-[5vw] overflow-hidden">
          <h2 className=" text-[#19103D] text-[4vw] font-extrabold text-center px-[3vw] leading-none pb-[2vw]">
            Classroom Without Walls
          </h2>
          <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[20vw]">
            <p className="px-[1vw] font-medium">Details</p>
            <p className="px-[1vw] font-medium">Photos</p>
            <p className="px-[1vw] font-medium">Testimony</p>
            <p className="px-[1vw] font-medium">Map</p>
          </div>
          <p className=" text-grey-400 text-[2.5vw] font-extrabold text-center px-[5vw] py-[3vw] leading-tight ">
            The Perfect Bridge between the students’ academic learning and the
            real world.
          </p>
          <p className=" text-[1vw] text-blue-400 underline pt-[1vw]">
            Learn More
          </p>
        </div>
      </div> */}
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
            href="##"
          >
            GET IN TOUCH
          </a>
        </div>
        <img
          className="flex object-contain w-full mt-[10vw]"
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
          hour. I asked Matt, how did he do this?<br></br> <br></br> He replied,
          The coaches built me a table to stand and do my work. Every time I got
          a right answer, he gave hugs, high fives and a genius cookie.”
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
            We do what we do, so that you can completely enjoy being a parent at
            home.
          </span>{" "}
          Let’s be honest. You have 18 years at this before they grow wings and
          fly. How do you want them to remember this? Food for thought!
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
          For a start, let’s meet over coffee and talk. But for now, we have{" "}
          <br></br>
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
          href="##"
        >
          GET IN TOUCH
        </a>
      </div>

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
          href="##"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
}

export default Home;
