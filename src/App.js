import React, { useState } from "react";
import Camp from "./components/Camp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gradient from "rgt";
import Class from "./components/Class";

import "./App.css";

function App() {
  const [navState, setNavState] = useState("TNL");

  return (
    <div className="App">
      <div className="Navbar-container align-middle bg-[#191434] place-content-center place-items-center flex-row inline-flex justify-even w-full h-[4vw] sticky top-0 z-50">
        <img
          onClick={() => {
            setNavState("TNL");
          }}
          className="flex text-center mx-auto my-auto px-[15vw]"
          src={require("../src/assets/tnllogo.png")}
          alt={"TNL LOGO"}
        />

        <a
          className="flex hover:cursor-pointer bg-gradient-to-r from-[#FC5229] to-[#AF067D] font-montserrat font-medium text-white text-[0.9vw] tracking-wide place-self-center place-content-center place-items-center justify-center align-middle rounded-xl px-[2vw] w-fit h-[2.5vw]"
          href="##"
        >
          THE NEXT LEVEL CAMP
        </a>

        <div
          onClick={() => {
            setNavState("Team Profile");
          }}
          className={
            navState === "Team Profile"
              ? "font-montserrat font-medium flex text-center pl-[2vw] mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400"
              : "font-montserrat font-medium flex text-center pl-[2vw] mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer"
          }
        >
          Team Profile
        </div>
        <div
          onClick={() => {
            setNavState("Contact Us");
          }}
          className={
            navState === "Contact Us"
              ? "font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer underline decoration-2 underline-offset-4 decoration-red-400 pr-[15vw]"
              : "font-montserrat font-medium flex text-center mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer pr-[15vw]"
          }
        >
          Contact Us
        </div>
      </div>

      <Class />

      {/* {navState === "Event" ? <Event /> : null} */}
      {/* {navState === "TNL" ? <Camp /> : null} */}
      {/* {navState === "PrivateClass" ? <PrivateClass /> : null}
      {navState === "MasterClass" ? <MasterClass /> : null}
      {navState === "MeetTheTeam" ? <MeetTheTeam /> : null}
      {navState === "Partner" ? <Partner /> : null} */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
