import React, { useState } from "react";

function Camp() {
  const [selectionState, setSelectionState] = useState(0);
  const [quoteState, setquoteState] = useState(0);
  const [faqState, setfaqState] = useState(0);
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

  return (
    <div className="wrapper flex flex-col w-full h-fit">
      <div className="w-full h-fit">
        <img
          className="flex object-contain w-full"
          src={require("../assets/bg3.jpg")}
          alt={"background1"}
        />
      </div>

      <div className="w-full h-[40vw] absolute flex flex-row">
        <div className="w-[50vw] h-[100%] flex flex-col justify-center  text-white text-[4vw] font-extrabold text-center">
          THE NEXT LEVEL LEADERSHIP CAMP
        </div>
        <div className="w-[45vw] h-[100%] flex flex-col justify-center  bg-white rounded-3xl mt-[5vw] overflow-hidden">
          <h2 className=" text-[#19103D] text-[4vw] font-extrabold text-center px-[3vw] leading-none pb-[2vw]">
            The Next Level Leadership Camp
          </h2>
          <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[20vw]">
            <p
              onClick={() => {
                setSelectionState(0);
              }}
              className={
                selectionState === 0
                  ? "px-[1vw] font-medium"
                  : "px-[1vw] font-medium text-gray-400"
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
                  ? "px-[1vw] font-medium"
                  : "px-[1vw] font-medium text-gray-400"
              }
            >
              Photos
            </p>
            <p
              onClick={() => {
                setSelectionState(2);
              }}
              className={
                selectionState === 2
                  ? "px-[1vw] font-medium"
                  : "px-[1vw] font-medium text-gray-400"
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
                  ? "px-[1vw] font-medium"
                  : "px-[1vw] font-medium text-gray-400"
              }
            >
              Map
            </p>
          </div>
          {selectionState === 0 ? (
            <p className="text-[2vw] font-bold text-center px-[5vw] py-[3vw] h-[20vw] leading-tight ">
              Once a year, a child or a teen must leave the comfort of home and
              luxury and go to a place called THE NEXT LEVEL CAMP, to answer the
              tough questions of life to GROW!
            </p>
          ) : selectionState === 1 ? (
            <div className="flex flex-row justify-center place-self-center place-content-center align-middle w-[20vw] h-[20vw]"></div>
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

          <p className=" text-[1vw] text-blue-400 underline pt-[1vw]">
            Learn More
          </p>
        </div>
      </div>
      <div className="w-full h-[5vw] bg-white"></div>
      <div className="w-full flex flex-col justify-center align-middle h-[40vw] bg-white">
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
          So why are parents not giving the kiddos this experience? You know
          they need and must have this, so why?
        </p>
      </div>

      <div className="w-full h-[50vw] flex flex-row justify-center align-middle bg-white">
        <p className="text-[#19103D] text-[2.5vw] place-self-center font-extrabold text-left w-[30vw] px-[6vw] ">
          FEAR! WE <br></br>AGREE WITH YOU
        </p>
        <img
          className="flex object-contain w-[50vw]"
          src={require("../assets/pic4.jpg")}
          alt={"indoor climbing"}
        />
        <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight leading-tight  text-left w-[30vw] px-[5vw] mt-[-3vw]">
          Our precious little ones going through tough challenges? It is scary,
          but you know what? They are so much more capable than what we give
          them credit for. They need this test and they want this test. They are
          born to win. Now, it is just you! Can you let go so that they can
          become the best version of themselves?
        </p>
      </div>

      <div className="w-full h-[38vw] flex flex-row justify-center align-middle bg-white">
        <div className="w-[40%] flex flex-col justify-center align-middle">
          <p className="text-[#19103D] text-[2.5vw] place-self-center font-extrabold text-left px-[5vw] ">
            YOU KNOW WHAT IS THE TOUGHEST PART OF GROWTH? IT IS HARD WORK!
          </p>
          <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight text-left px-[5vw] pt-[2vw]">
            So teachers and parents out there who want it easy for their kids,
            again, your search continues.
          </p>
        </div>
        <div className="w-[50%] bg-pic5 bg-center bg-no-repeat bg-contain p-[10vw]"></div>
      </div>

      <div className="w-full h-[50vw] flex flex-row justify-center align-middle bg-white">
        <p className="text-[#19103D] text-[1.4vw] place-self-center tracking-tight leading-tight  text-left w-[30vw] px-[5vw] mt-[-3vw]">
          Furthest from that! We want a once in a lifetime experience that
          triggers thoughts and emotions; for them to be the best version of
          themselves. Now, that requires experiences that bring out these
          emotions. We live in a world where they want everything now and it
          must be easy. For good things however, one has to put in some work.
        </p>
        <img
          className="flex object-contain w-[50vw]"
          src={require("../assets/pic6.jpg")}
          alt={"indoor climbing"}
        />
        <p className="text-[#19103D] text-[2.5vw] tracking-tight leading-tight place-self-center font-extrabold text-left w-[30vw] px-[6vw] ">
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
              src={require("../assets/icomma.jpg")}
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

      <div className="w-full h-[20vw] flex flex-col justify-center align-middle">
        <p className="text-black text-[2.5vw] tracking-tight leading-tight font-extrabold text-center ">
          SO WHAT'S THIS ABOUT?
        </p>
        <p className="text-black text-[1.4vw] tracking-tight leading-tight text-center pt-[3vw] px-[15vw]">
          The Next Level Camp is a 5 to 7 days experience for children between 7
          and 18 (Children above 10 go through the 7 days) usually in a place
          that is unfamiliar to them. Here is where the magic happens!
        </p>
      </div>

      <div className="w-full h-[30vw] flex flex-row justify-around align-middle">
        <div className="w-[23vw] h-[30vw] flex flex-col justify-end bg-magic1 bg-center bg-cover bg-no-repeat">
          <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] ">
            EXPERIENTIAL SOCIAL EMOTIONAL LEARNING
          </p>
          <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
            Expect the unexpected! You want to know more about oneself, throw
            them into the unknown. You can never truly know what you are made of
            until you are tested. Popularly known as The First Step!
          </p>
        </div>
        <div className="w-[23vw] h-[30vw]  flex flex-col justify-end bg-magic2 bg-center bg-cover bg-no-repeat">
          <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] ">
            MIND AND BODY CLEANSING
          </p>
          <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
            You can’t fill up a cup that is already full. You know what is the
            real scary part? You would be surprised what it is mostly filled
            with. The importance of self growth is self cleansing.
          </p>
        </div>
        <div className="w-[23vw] h-[30vw]  flex flex-col justify-end bg-magic3 bg-center bg-cover bg-no-repeat">
          <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] ">
            PEAK PERFORMANCE PSYCHOLOGY
          </p>
          <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
            Know what you are capable of and in that process, helping others to
            do the same. #togetherstronger
          </p>
        </div>
        <div className="w-[23vw] h-[30vw]  flex flex-col justify-end bg-magic4 bg-center bg-cover bg-no-repeat">
          <p className="text-white text-[1.5vw] font-bold text-left px-[2vw] ">
            HIGH PERFORMANCE TEAM BUILDING
          </p>
          <p className="text-white text-[1vw] text-left px-[2vw] py-[1vw]">
            No person is an island. As long as you are living on this earth, you
            need to work with people effectively and efficiently.
          </p>
        </div>
      </div>
      <div className="w-full h-[55vw] flex flex-col bg-bg8 bg-center bg-cover bg-no-repeat">
        <img
          className="flex object-contain w-[30vw] mt-[10vw] ml-[15vw]"
          src={require("../assets/bg7.jpg")}
          alt={"ira and friends"}
        />
        <p className="text-black text-[1.4vw] mt-[-16vw] mr-[18vw] place-self-end tracking-tight leading-tight w-[30vw] text-left">
          The Next Level Camp is not an experience that changes your life.
          People who say that are clueless about the beauty of life.{" "}
          <span className="font-bold">
            The Next Level gets you triggered and thinking; wanting more out
            life.
          </span>
        </p>

        <p className="text-black text-[1.4vw] mt-[15vw] ml-[15vw] tracking-tight leading-tight w-[45vw] text-left">
          Do connect with the coaches to set up a time to learn more about how
          you can get moving forward with The Next Level. As for international
          students, the fee does not include flight travel and R&R in Singapore.
          Schools can get in touch with us for bulk bookings too.
        </p>

        <div className="hover:cursor-pointer place-self-end mr-[22vw] mt-[-6vw] content-center text-center text-white text-[1.4vw] px-[3vw] py-[1vw] rounded-full bg-[#05194A]">
          Get in touch!
        </div>
      </div>

      <div className="w-full h-[40vw] flex flex-row justify-center align-middle">
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
      <div className="w-full h-[50vw] flex flex-row justify-center align-middle p-[3vw]">
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
                alert("Name can't be less than 4 characters");
              } //else if check if all numbers
              else if (checkingchildname.match(/^[0-9]+$/)) {
                document.getElementById("childname").value = "";
                document.getElementById("childname").style.border =
                  "2px solid red";
                alert("Name can't be numbers");
              } else {
                setChildname(checkingchildname);
                document.getElementById("childname").style.border =
                  "2px solid #00FF0A";
              }
            }}
            id="childname"
            placeholder="Type your name"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          />
          <label
            htmlFor="schoolname"
            className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
          >
            School & Grade
          </label>
          <input
            onBlur={() => {
              document.getElementById("schoolname").style.border =
                "2px solid #00FF0A";
              setSchoolname(document.getElementById("schoolname"));
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
              document.getElementById("pnumber").style.border =
                "2px solid #00FF0A";
              setPnumber(document.getElementById("pnumber"));
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
                alert("Name can't be less than 4 characters");
              } //else if check if all numbers
              else if (checkingparentsname.match(/^[0-9]+$/)) {
                document.getElementById("parentsname").value = "";
                document.getElementById("parentsname").style.border =
                  "2px solid red";
                alert("Name can't be numbers");
              } else {
                setParentsname(checkingparentsname);
                document.getElementById("parentsname").style.border =
                  "2px solid #00FF0A";
              }
            }}
            id="parentsname"
            placeholder="Type your Parents name"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          />
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
              if (checkingchildage < 99) {
                document.getElementById("childrenage").style.border =
                  "2px solid #00FF0A";
                setChildrenage(checkingchildage);
              } else {
                document.getElementById("childrenage").value = "";
                document.getElementById("childrenage").style.border =
                  "2px solid red";
                alert("Please input a valid number");
              }
            }}
            id="childrenage"
            type="number"
            placeholder="Type your children's age"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          />
          <label
            htmlFor="country"
            className="font-montserrat text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
          >
            Country
          </label>
          {/* <input
            id="country"
            placeholder="Select Your Country"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          /> */}
          <select
            onBlur={() => {
              setCountry(document.getElementById("country").value);
            }}
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
            id="country"
            name="country"
            placeholder="Select Your Country"
          >
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
              } else {
                document.getElementById("email").value = "";
                document.getElementById("email").style.border = "2px solid red";
                alert("Please input a valid email");
              }
            }}
            id="email"
            type="email"
            placeholder="Parents@email.com"
            className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
          />
          <label
            htmlFor="input"
            className="font-montserrat text-[0.9vw] text-black text-left place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]"
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
          <a
            href="##"
            onClick={() =>
              console.log({
                childname,
                schoolname,
                pnumber,
                parentsname,
                childrenage,
                country,
                email,
                input,
              })
            }
          >
            Register
          </a>
        </div>
        <div className="absolute place-self-center place-items-center rounded-full w-[20vw] mt-[41.5vw] ml-[30vw] px-[5vw] py-[0.5vw] tracking-tight text-gray-500 text-[0.5vw]">
          By clicking the submit button below, I agree to and accept the{" "}
          <span
            href="##"
            className="text-gray-700 underline hover:cursor-pointer"
          >
            following terms and conditions
          </span>
        </div>
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
  );
}

export default Camp;
