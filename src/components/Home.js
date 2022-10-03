import React, { useState } from "react";
import App from "../App";
import { motion } from "framer-motion";

function Home() {
  const [cardState, setCardState] = useState(1);

  return (
    <div>
      {/* banner1 */}
      <div className="flex flex-col banner1 h-[34.9vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D]"></div>
    </div>
  );
}

export default Home;
