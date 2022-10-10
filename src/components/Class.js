import React, { useState } from "react";
import Slider from "react-slick";

function Class() {
  const [selectionState, setSelectionState] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "mt-[3vw] w-[52vw] h-[33vw] flex flex-row",
  };

  return (
    <div className="wrapper flex flex-col w-full h-fit">
      {/* <div className="w-full ">
        <img
          className="flex object-cover w-full h-[45vw]"
          src={require("../assets/bgclass2.jpg")}
          alt={"background1"}
        />
      </div>

      <div className="w-full h-[40vw] absolute flex flex-row">
        <div className="w-[50vw] h-[100%] flex flex-col justify-center  text-white text-[4vw] font-extrabold text-center">
          CLASSROOM WITHOUT WALLS
        </div>
        <div className="w-[45vw] h-[100%] flex flex-col justify-center  bg-white rounded-3xl mt-[5vw] overflow-hidden">
          <h2 className=" text-[#19103D] text-[4vw] font-extrabold text-center px-[3vw] leading-none pb-[2vw]">
            Classroom Without Walls
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
              Photos
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
              The Perfect Bridge between the students’ academic learning and the
              real world.
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

          <p className=" text-[1vw] text-blue-400 underline pt-[1vw] hover:cursor-pointer">
            Learn More
          </p>
        </div>
      </div> */}

      <div className="w-full h-[50vw]"></div>

      <div className="w-full h-[65vw] bg-bgclass3 bg-center bg-no-repeat bg-cover flex flex-col justify-center align-middle">
        <h2 className="text-white text-[3vw] font-extrabold place-self-center justify-center text-center px-[10vw] leading-none">
          THE WORLD IS BECOMING A MORE AND MORE CHALLENGING PLACE DAILY
        </h2>
        <p className="text-white text-[1.5vw] font-medium place-self-center justify-center text-center px-[25vw] leading-none pt-[1vw]">
          and it is crucial that we bring experience that conditions our young
          winners to take on the unknown.
        </p>
      </div>

      <div className="w-full h-[40vw] flex flex-col ">
        <p className="text-[#19103D] text-[1.5vw] font-medium px-[10vw] leading-none pt-[5vw]">
          The Classroom Without Walls 4 days and 3 nights camp built to
          introduce, hone and showcase the skills, attributes and excellence
          that will take our young leaders on the path to vocational greatness,
          when they are of age
        </p>

        <h2 className="text-[#19103D]  text-[3vw] font-extrabold text-center px-[12vw] pt-[5vw]">
          For the 4 days and 3 nights, they are locked in “The Village” where
          they have to
        </h2>

        <img
          className="place-self-center pt-[5vw] w-[70%]"
          src={require("../assets/bgclass5.jpg")}
          alt={"background1"}
        />
      </div>

      <div className="w-full h-fit flex flex-col pt-[10vw]">
        <h2 className="text-[#19103D] text-[3vw] font-extrabold text-center px-[15vw] pt-[5vw]">
          What are some of the qualities and Attributes that are discovered and
          built upon?
        </h2>
        <div className="place-self-center flex flex-row justify-start flex-wrap w-[75vw] h-fit pt-[5vw]">
          <div className="w-[35vw] h-[10vw] flex flex-row  bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/support.png")}
              alt={"support icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-medium ">
              Their ability to make friends and form a team
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/target.png")}
              alt={"target icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
              Verbalizing their vision
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/inspiration.png")}
              alt={"inspiration icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
              Inspiring the team to work on the vision
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/project-management.png")}
              alt={"management icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
              Managing a project from start to finish
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/leadership.png")}
              alt={"leadership icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
              Leadership when it matters
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/flex.png")}
              alt={"flexible icon"}
            />
            <p className="text-[#393939] w-[15vw] self-center text-[1.3vw] text-left font-bold ">
              Work Ethic
            </p>
          </div>
          <div className="w-[35vw] h-[10vw] flex flex-row bg-[#D3D4E4] rounded-3xl m-[1vw] ">
            <img
              className="self-center w-[8vw] ml-[5vw] mr-[3vw]"
              src={require("../assets/effort.png")}
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
            Will you willing to go the extra mile to solve the problems of the
            world? This is what people want and how can one prepare this? What
            skills can be taught today?
          </p>
        </div>

        <Slider {...settings}>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard1.jpg")}
              alt={"classcard1"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Leading a Positive and Powerful Brain Storming Session
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl ">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard2.jpg")}
              alt={"classcard2"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Having a Clear Vision Leading to Ideation
            </p>
          </div>
          <div className="h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl ">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard3.jpg")}
              alt={"classcard3"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              AGILE Project Management
            </p>
          </div>
          <div className="h-[32vw] flex flex-col shadow-gray-600 shadow-md  rounded-3xl ">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard8.jpg")}
              alt={"classcard4"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Funds Management
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard9.jpg")}
              alt={"classcard5"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Prototyping of the vision
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard4.jpg")}
              alt={"classcard6"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Presentation Dynamics
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard5.jpg")}
              alt={"classcard7"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              Mass Communications and Marketing
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard7.jpg")}
              alt={"classcard8"}
            />
            <p className="text-[#19103D] text-[1.5vw] px-[3vw] text-left font-bold leading-tight pt-[1vw]">
              The Business Proposal
            </p>
          </div>
          <div className=" h-[32vw] flex flex-col shadow-gray-600 shadow-md rounded-3xl">
            <img
              className="w-[30vw] "
              src={require("../assets/classcard6.jpg")}
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
          that will allow our young creators to be in a natural space where they
          feel inspired. A Simplified High Tech Lab built in the beaches and
          parks of the world, fully functional and sustainable.
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
            src={require("../assets/cardclass1.png")}
            alt={"cardclass1"}
          />

          <img
            className="w-[20vw] pl-[0.5vw]"
            src={require("../assets/cardclass2.png")}
            alt={"cardclass2"}
          />
        </div>
        <p className="text-[#19103D] text-[1.5vw] text-center font-medium leading-tight pt-[3vw] ">
          Schools around the world can always connect with us for us to bring
          this to your school or organization
        </p>
      </div>
    </div>
  );
}

export default Class;
