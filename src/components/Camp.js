import React, { useState } from "react";

function Camp() {
  const [selectionState, setSelectionState] = useState(0);
  const [quoteState, setquoteState] = useState(0);

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
          <div className="place-self-center place-items-center rounded-full mt-[3vw] px-[2vw] py-[0.5vw] bg-white text-[#05194A] text-[1.2vw]">
            Register Now
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
          <div className="place-self-center place-items-center rounded-full mt-[3vw] px-[2vw] py-[0.5vw] bg-white text-[#05194A] text-[1.2vw]">
            Register Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camp;
