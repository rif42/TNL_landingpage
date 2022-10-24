import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function TheFirstStep() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tfs-page w-full h-fit flex flex-col justify-center align-middle">
      {/* <div className="w-full h-[50vw] bg-white"></div> */}
      <div className="w-full h-[45vw] bg-tfs0 bg-center bg-cover flex flex-col justify-center align-middle">
        <p className="text-[#05194A] text-[1.5vw] leading-none">
          The First Step is the mother of all Social Emotional Learning
          Programs;
        </p>
        <p className="text-[#05194A] text-[4.5vw] font-extrabold">
          IT IS AN EXPERIENCE
        </p>
      </div>

      <div className="w-full h-[45vw] flex flex-row justify-center align-middle">
        <div className="w-[50%] h-[45vw] bg-[#f26e9636] flex flex-col justify-center align-middle">
          <p className="text-[#05194A] text-[3vw] text-left px-[12vw] tracking-tighter leading-tight font-extrabold">
            IF THERE WAS A WAY, JUST IF, WOULD YOU NOT BE CURIOUS TO KNOW MORE?
          </p>
          <p className="font-inter text-[#05194A] text-[1.1vw] text-left px-[12vw] pt-[2vw]">
            We are talking about the growth of mind, body and soul. For the
            body, you have your medical and your fitness examinations.
            <br /> <br />
            The mind and soul? There is a way to find out about 38
            characteristics about you that gives you the POWER to make the
            change you want to see. What breaks you and what makes you?
          </p>
        </div>
        <div className="w-[50%] h-[45vw] bg-tfs1 bg-center bg-cover"></div>
      </div>
      <div className="w-full h-[45vw] flex flex-row justify-center align-middle">
        <div className="w-[50%] h-[45vw] bg-tfs2 bg-center bg-cover"></div>
        <div className="w-[50%] h-[45vw] bg-[#f26e9636] flex flex-col justify-center align-middle">
          <p className="text-[#05194A] text-[3vw] text-left px-[12vw] tracking-tighter leading-tight font-extrabold">
            WHAT IS THIS EXPERIENCE WE ALWAYS SEEM TO TALK ABOUT YOU ASK?
          </p>
          <p className="font-inter text-[#05194A] text-[1.1vw] text-left px-[12vw] pt-[2vw]">
            Think about it! You can google Social Emotional Learning, or attend
            courses on udemy or coursera on Self awareness and get all the
            contents you need. So why The First Step OR The Next Level for that
            matter you ask?
          </p>
        </div>
      </div>

      <div className="w-full h-[40vw] flex flex-col justify-center align-middle">
        <div className=" flex flex-col justify-center align-middle bg-tfs3 bg-center bg-contain bg-no-repeat w-[75%] h-full place-self-center">
          <p className="text-white text-[1.4vw] text-center">
            You come to our experiences for the NON GOOGLEABLE learnings.
          </p>
          <p className="text-white text-[2.5vw] font-extrabold text-center pt-[1vw] px-[10vw]">
            LEARNING IS A CHANGE IN BEHAVIOUR AS A RESULT OF AN EXPERIENCE
          </p>
          <p className="text-white text-[1.4vw] px-[5vw] pt-[1vw] text-center">
            Content may give you academic knowledge but when you do it,
            especially with us, you have an experience that touches your Mind,
            Body and Soul. It goes deeper!
          </p>
        </div>
      </div>

      <p className="text-[#05194A] text-[2.5vw] font-extrabold text-center pb-[3vw]">
        Tell me more!
      </p>

      <div className="w-full h-[45vw] flex flex-row flex-wrap justify-center align-middle px-[10vw]">
        <div className="w-[48%] h-[48%] bg-[#D4D5E5] flex flex-col align-middle rounded-3xl m-[0.5vw]">
          <img
            className="w-[39vw] place-self-center rounded-t-3xl"
            src={require("../assets/tfscard0.jpg")}
            alt={"group of student doing push ups"}
          />
          <p className="text-center font-inter text-[1.1vw] text-[#05194A] px-[3vw] pt-[1vw]">
            Start with something cliched and that is
            <span className="font-bold">
              “What is it that you really want in this life of yours?"
            </span>
            What’s your purpose? We don’t sit down and discuss this. We have a
            challenge for this!
          </p>
        </div>
        <div className="w-[48%] h-[48%] bg-[#D4D5E5] flex flex-col align-middle rounded-3xl m-[0.5vw]">
          <img
            className="w-[39vw] place-self-center rounded-t-3xl"
            src={require("../assets/tfscard1.png")}
            alt={"running on the beach"}
          />
          <p className="text-center font-inter text-[1.1vw] text-[#05194A] px-[3vw] pt-[1vw]">
            <span className="font-bold">
              The First Step Peak Performance Profile
            </span>{" "}
            - 38 characteristics about you that you MUST know. This is like an
            MRI of your Mind, Body and Soul. Outcomes will stun you.
          </p>
        </div>
        <div className="w-[48%] h-[48%]  bg-[#D4D5E5] flex flex-col align-middle rounded-3xl m-[0.5vw]">
          <img
            className="w-[39vw] place-self-center rounded-t-3xl"
            src={require("../assets/tfscard2.jpg")}
            alt={"teachers and students holding hands"}
          />
          <p className="text-center font-inter text-[1.1vw] text-[#05194A] px-[3vw] pt-[1vw]">
            A long forgotten word;
            <span className="font-bold">TRUST!</span> We need to believe and
            honestly, many things will happen for us to lose faith, and that is
            when you remember what you learned to RENEW your trust. It is never
            easy but winners find a way.
          </p>
        </div>
        <div className="w-[48%] h-[48%]  bg-[#D4D5E5] flex flex-col align-middle rounded-3xl m-[0.5vw]">
          <img
            className="w-[39vw] place-self-center rounded-t-3xl"
            src={require("../assets/tfscard3.jpg")}
            alt={"a group activity with students"}
          />
          <p className="text-center font-inter text-[1.1vw] text-[#05194A] px-[3vw] pt-[1vw]">
            <span className="font-bold">A Promise</span> - A very personal
            decision to start the journey of continuously being the best version
            of you.
          </p>
        </div>
      </div>
      <p className="text-center font-inter text-[1.1vw] text-[#05194A] px-[20vw] pt-[3vw] pb-[5vw]">
        You deserve this! If you only had 4 to 8 hours to learn things about
        yourself that you never knew about or needed confirmation on, The First
        Step is a great start.
      </p>

      <div className="w-full h-[10vw] bg-[#D3BCE7] flex flex-row justify-evenly align-middle">
        <p className="text-right font-inter font-bold text-[1.1vw] text-[#05194A] w-[35vw] h-[5vw] pt-[3vw] pb-[5vw]">
          For schools and organizations, The First Step is best when done in
          small groups. 25 to 30 for optimum outcomes.
        </p>
        <Link to="/contactus">
          <div className="w-[20vw] h-[4vw] flex flex-col justify-center place-self-center text-[1.3vw] text-white font-semibold rounded-full bg-[#05194A]">
            Call us for a cup of coffee
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TheFirstStep;
