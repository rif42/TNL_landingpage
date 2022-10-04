import React from "react";

function Footer() {
  return (
    <div>
      {/* footer */}
      <div className="footer h-[25vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D] inline-flex flex-row justify-center align-middle">
        <div className="flex flex-col justify-center align-middle px-[10vw]">
          <h2 className="font-inter font-extrabold text-white text-left text-[4vw] leading-snug tracking-tight">
            HAVE FUN!
          </h2>
          <p className="font-inter text-WHITE text-left text-white font-light justify-center align-middle text-[1.4vw] leading-tight tracking-tight">
            Make your learning experience exciting, simple and convenient
            whatever your age may be or wherever you may be. After 7 years of
            research, data, trials and tribulations, we present to you the
            Classroom Without Walls. Let’s Flip!
          </p>
          <button className="font-inter flex text-center text-white text-[0.9vw] items-center justify-center align-middle rounded-xl px-[3vw] mt-[2vw] w-fit h-[3vw] shadow-gray-500 shadow-md">
            {" "}
            Learn More!{" "}
          </button>
          <div className="flex flex-row justify-start align-middle pt-[2vw]">
            <img
              className="flex justify-center content-center self-center fill-white px-1"
              src={require("../assets/akar-icons_instagram-fill.png")}
              alt={"instagram"}
            />
            <p className="text-white align-middle text-[1vw] leading-tight tracking-tight pr-8">
              @Letsflip.sg
            </p>

            <img
              className="flex justify-center content-center self-center fill-white px-1"
              src={require("../assets/akar-icons_linkedin-fill.png")}
              alt={"linkedin"}
            />
            <p className="text-white align-middle text-[1vw] leading-tight tracking-tight pr-8">
              Score Campus
            </p>

            <img
              className="flex justify-center content-center self-center fill-white px-1"
              src={require("../assets/ant-design_facebook-filled.png")}
              alt={"fb"}
            />
            <p className="text-white align-middle text-[1vw] leading-tight tracking-tight pr-15">
              @Scorecampus
            </p>
          </div>
        </div>
        <img
          className="flex justify-center content-center self-center max-w-[40%] px-[10vw]"
          src={require("../assets/qrcode.png")}
          alt={"qr code"}
        />
      </div>

      {/* footer */}
    </div>
  );
}

export default Footer;
