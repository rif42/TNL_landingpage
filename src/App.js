import React, { useState, useEffect } from "react";
import Camp from "./components/Camp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gradient from "rgt";
import Class from "./components/Class";
import TheFirstStep from "./components/TheFirstStep";
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
import ContactUs from "./components/ContactUs";

function App() {
  //Done:
  // 1. new navigation items
  // 2. everything scrolls up when changing pages
  // 2. privacy policy
  // 3. contact us
  // 4. redirecting to register

  //todoL
  //1. why? tab content
  const [navpopup, setNavpopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      {/* <div className="text-[5vw]">
        {navState} {selectionState}
      </div> */}
      <div className="App">
        <div className="Navbar-container align-middle bg-[#191434] place-content-center place-items-center flex-row flex justify-evenly w-full h-[4vw] sticky top-0 z-50">
          <div className="flex px-[15vw]">
            <img
              className="flex text-center mx-auto my-auto "
              src={require("./assets/tnllogo.png")}
              alt={"TNL LOGO"}
            />
          </div>

          <Link onClick={() => setNavpopup(false)} to="/">
            <div
              className="font-montserrat flex text-center px-[1vw] text-[0.9vw] tracking-wide text-white cursor-pointer"
              href="##"
            >
              Home
            </div>
          </Link>

          <Link to="#">
            <div
              onClick={() => setNavpopup(!navpopup)}
              className={
                navpopup
                  ? "font-montserrat  flex text-center px-[1vw] py-[0.5vw] text-[0.9vw] tracking-wide text-white cursor-pointer box-border rounded-3xl bg-[#d9d9d936]"
                  : "font-montserrat  flex text-center px-[1vw] py-[0.5vw] mx-auto my-auto text-[0.9vw] tracking-wide text-white cursor-pointer rounded-3xl hover:bg-[#d9d9d936]"
              }
            >
              Experiences ᐯ
            </div>
          </Link>

          <div
            className={
              navpopup
                ? "navpopup h-fit w-[18vw] bg-white absolute rounded-2xl ml-[23vw] mt-[13vw]"
                : "hidden"
            }
          >
            <Link onClick={() => setNavpopup(false)} to="/camp">
              <p className="font-montserrat text-left font-semibold text-[0.9vw] hover:bg-slate-200 tracking-wide text-[#191434] pb-[0.5vw] pt-[1vw] pl-[0.5vw]">
                The Next Level Leadership Camp
              </p>
            </Link>

            <Link onClick={() => setNavpopup(false)} to="/class">
              <p className="font-montserrat text-left font-semibold text-[0.9vw] hover:bg-slate-200 tracking-wide text-[#191434] py-[0.5vw] pl-[0.5vw]">
                Classroom Without Walls
              </p>
            </Link>

            <Link onClick={() => setNavpopup(false)} to="/thefirststep">
              <p className="font-montserrat text-left font-semibold text-[0.9vw] hover:bg-slate-200 tracking-wide text-[#191434] pt-[0.5vw] pb-[1vw] pl-[0.5vw]">
                The First Step
              </p>
            </Link>
          </div>

          <Link onClick={() => setNavpopup(false)} to="/team">
            <div className="font-montserrat flex text-center px-[1vw] text-[0.9vw] tracking-wide text-white cursor-pointer ">
              Team Profile
            </div>
          </Link>

          <Link onClick={() => setNavpopup(false)} to="/contactus">
            <div className="font-montserrat flex text-center px-[1vw] text-[0.9vw] tracking-wide text-white cursor-pointer pr-[10vw]">
              Contact Us
            </div>
          </Link>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/camp" element={<Camp />} />
          <Route path="/class" element={<Class />} />
          <Route path="/thefirststep" element={<TheFirstStep />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/team/:name" element={<Teamdetail />} />
        </Routes>

        <footer className="h-[20vw] w-full bg-[#191434] flex flex-col justify-center align-middle">
          <img
            className="flex w-[10vw] text-center mx-auto my-auto"
            src={require("./assets/tnllogo2.png")}
            alt={"TNL LOGO"}
          />
          <div className="font-montserrat mt-[-1vw] w-[60vw] h-[3vw] place-self-center place-content-center place-items-center flex flex-row justify-evenly align-middle">
            <p className="text-[#61697D] font-medium hover:cursor-pointer">
              Home
            </p>
            <p
              onClick={() => setNavpopup(!navpopup)}
              className="text-[#61697D] font-medium hover:cursor-pointer"
            >
              Experiences ᐯ
            </p>
            <Link to="/team">
              <p className="text-[#61697D] font-medium hover:cursor-pointer">
                Team Profile
              </p>
            </Link>

            <Link to="/contactus">
              <p className="text-[#61697D] font-medium hover:cursor-pointer">
                Contact Us
              </p>
            </Link>
          </div>
          <div className="w-[30vw] h-[5vw] place-self-center flex flex-row justify-evenly align-middle">
            <a
              className="place-self-center"
              href="https://www.instagram.com/scorecampus/?hl=en"
            >
              <svg
                width="1.75vw"
                viewBox="0 0 22 22"
                className="fill-[#61697D] hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 8.38062C10.482 8.38082 9.97565 8.53461 9.54502 8.82255C9.1144 9.11049 8.77882 9.51964 8.58071 9.99829C8.38261 10.4769 8.33088 11.0036 8.43206 11.5116C8.53324 12.0197 8.78279 12.4863 9.14915 12.8525C9.51552 13.2188 9.98225 13.4681 10.4903 13.5691C10.9984 13.6701 11.525 13.6182 12.0036 13.4199C12.4822 13.2216 12.8912 12.8859 13.179 12.4551C13.4668 12.0244 13.6204 11.518 13.6204 11C13.6198 10.3053 13.3436 9.63919 12.8522 9.14805C12.3609 8.65691 11.6947 8.38089 11 8.38062ZM17.1242 6.36723C16.9908 6.0293 16.7894 5.72237 16.5326 5.46548C16.2757 5.20859 15.9687 5.00723 15.6308 4.87388C14.5996 4.46679 12.1442 4.55813 11 4.55813C9.8558 4.55813 7.4029 4.46335 6.36871 4.87388C6.03077 5.00723 5.72384 5.20859 5.46695 5.46548C5.21007 5.72237 5.0087 6.0293 4.87536 6.36723C4.46875 7.39848 4.5596 9.85629 4.5596 10.9995C4.5596 12.1427 4.46875 14.5976 4.87732 15.6323C5.01067 15.9702 5.21203 16.2771 5.46892 16.534C5.7258 16.7909 6.03273 16.9923 6.37067 17.1256C7.40192 17.5327 9.85728 17.4414 11.002 17.4414C12.1467 17.4414 14.5986 17.5362 15.6328 17.1256C15.9707 16.9923 16.2776 16.7909 16.5345 16.534C16.7914 16.2771 16.9928 15.9702 17.1261 15.6323C17.5362 14.601 17.4419 12.1432 17.4419 11C17.4419 9.85679 17.5362 7.40241 17.1261 6.36772L17.1242 6.36723ZM11 15.0268C10.2036 15.0268 9.42504 14.7906 8.76284 14.3482C8.10064 13.9057 7.58451 13.2768 7.27974 12.541C6.97496 11.8052 6.89521 10.9955 7.05059 10.2144C7.20596 9.43329 7.58948 8.71579 8.15263 8.15263C8.71579 7.58948 9.43329 7.20596 10.2144 7.05059C10.9955 6.89521 11.8052 6.97496 12.541 7.27974C13.2768 7.58451 13.9057 8.10064 14.3482 8.76284C14.7906 9.42504 15.0268 10.2036 15.0268 11C15.0274 11.529 14.9237 12.0529 14.7216 12.5417C14.5194 13.0306 14.2229 13.4748 13.8488 13.8488C13.4748 14.2229 13.0306 14.5194 12.5417 14.7216C12.0529 14.9237 11.529 15.0274 11 15.0268ZM15.1928 7.7442C15.0069 7.74429 14.8251 7.68925 14.6704 7.58603C14.5158 7.48281 14.3953 7.33605 14.3241 7.16431C14.2528 6.99258 14.2342 6.80358 14.2704 6.62122C14.3066 6.43886 14.3961 6.27134 14.5275 6.13984C14.6589 6.00834 14.8264 5.91878 15.0087 5.88247C15.1911 5.84616 15.3801 5.86475 15.5519 5.93587C15.7236 6.007 15.8704 6.12747 15.9737 6.28205C16.077 6.43663 16.1322 6.61837 16.1322 6.80429C16.1327 6.92775 16.1088 7.0501 16.062 7.16432C16.0151 7.27853 15.9461 7.38237 15.859 7.46988C15.7719 7.55739 15.6684 7.62684 15.5544 7.67425C15.4404 7.72166 15.3182 7.7461 15.1947 7.74616L15.1928 7.7442ZM19.6429 0H2.35714C1.73199 0 1.13244 0.248341 0.690391 0.690391C0.248341 1.13244 0 1.73199 0 2.35714L0 19.6429C0 20.268 0.248341 20.8676 0.690391 21.3096C1.13244 21.7517 1.73199 22 2.35714 22H19.6429C20.268 22 20.8676 21.7517 21.3096 21.3096C21.7517 20.8676 22 20.268 22 19.6429V2.35714C22 1.73199 21.7517 1.13244 21.3096 0.690391C20.8676 0.248341 20.268 0 19.6429 0ZM18.8021 14.2411C18.7388 15.4997 18.4515 16.6149 17.5327 17.5312C16.6139 18.4476 15.4997 18.7408 14.2425 18.8007C12.9456 18.8738 9.05732 18.8738 7.7604 18.8007C6.50179 18.7373 5.39049 18.4496 4.47022 17.5312C3.54996 16.6129 3.26071 15.4972 3.2008 14.2411C3.12763 12.9437 3.12763 9.05487 3.2008 7.75893C3.26415 6.50031 3.54799 5.38509 4.47022 4.46875C5.39246 3.55241 6.5067 3.26268 7.7604 3.20277C9.05732 3.1296 12.9456 3.1296 14.2425 3.20277C15.5012 3.26612 16.6159 3.55388 17.5327 4.47219C18.4496 5.39049 18.7422 6.50621 18.8021 7.76482C18.8753 9.05732 18.8753 12.9427 18.8021 14.2411Z"
                  fill="#61697D"
                />
              </svg>
            </a>

            <a
              className="place-self-center"
              href="https://www.facebook.com/ScoreCampus/"
            >
              <svg
                width="1.75vw"
                viewBox="0 0 22 22"
                className="fill-[#61697D] hover:cursor-pointer"
              >
                <path
                  d="M21.12 0H0.88C0.39325 0 0 0.39325 0 0.88V21.12C0 21.6068 0.39325 22 0.88 22H21.12C21.6068 22 22 21.6068 22 21.12V0.88C22 0.39325 21.6068 0 21.12 0ZM18.579 6.42125H16.8218C15.444 6.42125 15.1773 7.07575 15.1773 8.03825V10.1585H18.4662L18.0373 13.4777H15.1773V22H11.748V13.4805H8.87975V10.1585H11.748V7.711C11.748 4.87025 13.4832 3.322 16.0187 3.322C17.2342 3.322 18.2765 3.41275 18.5818 3.454V6.42125H18.579Z"
                  fill="#61697D"
                />
              </svg>
            </a>

            <a
              className="place-self-center"
              href="https://id.linkedin.com/company/score-campus"
            >
              <svg
                width="1.75vw"
                viewBox="0 0 22 22"
                className="fill-[#61697D] hover:cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06H20.16C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838V20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22H1.838C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161V1.838ZM8.708 8.388H11.687V9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106V18.928H15.583V13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822V18.928H8.708V8.388ZM3.208 18.791H6.416V8.25H3.208V18.791ZM6.875 4.812C6.88105 5.08668 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65248 5.61246 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65248 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08668 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25512 3.38269C6.64062 3.75979 6.86313 4.27286 6.875 4.812Z"
                  fill="#61697D"
                />
              </svg>
            </a>

            <a
              className="place-self-center"
              href="mailto:gabriel@scorecampus.com"
            >
              <svg
                width="1.75vw"
                viewBox="0 0 22 18"
                className="fill-[#61697D] hover:cursor-pointer"
              >
                <path
                  d="M6.97518e-09 5.124L10.654 10.665C10.7609 10.7206 10.8795 10.7496 11 10.7496C11.1205 10.7496 11.2391 10.7206 11.346 10.665L22 5.125V14.75C22.0001 15.5801 21.6824 16.3788 21.1123 16.9822C20.5422 17.5856 19.7628 17.948 18.934 17.995L18.75 18H3.25C2.41986 18.0001 1.62117 17.6824 1.01777 17.1123C0.414367 16.5422 0.0519987 15.7628 0.00500012 14.934L6.97518e-09 14.75V5.124ZM3.25 6.97519e-09H18.75C19.5801 -5.43467e-05 20.3788 0.317554 20.9822 0.887671C21.5856 1.45779 21.948 2.23719 21.995 3.066L22 3.25V3.434L11 9.154L6.97518e-09 3.434V3.25C-5.43467e-05 2.41986 0.317554 1.62117 0.887672 1.01777C1.45779 0.414367 2.23719 0.0519987 3.066 0.00500012L3.25 6.97519e-09H18.75H3.25Z"
                  fill="#61697D"
                />
              </svg>
            </a>
          </div>
          <p className="font-montserrat text-[#61697D] font-medium pb-[2vw] pt-[0.2vw]">
            © 2022 The Next Level Camp. All rights reserved. /
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
