import React, { useState } from "react";
import mallbg from "../../../assets/img/Mallbg.png";
import { TiArrowRight } from "react-icons/ti";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Mall = () => {
  const [leave, setLeave] = useState(false);

  const handleLeaveClick = () => {
    setLeave(true);
  };

  const handleBackClick = () => {
    setLeave(false);
  };

  return (
    <div
      id="mall"
      style={{
        background: `url(${mallbg}) no-repeat center/cover`,
        minHeight: "60vh",
        overflow: "hidden",
      }}
      className="relative"
    >
      <div className="container">
        <div className="flex">
          <div
            style={{
              display: leave ? "none" : "block",
              transition: "1s"
            }}
            className="w-[600px] left-0 top-2 absolute flex items-center justify-center flex-col  h-[400px] bg-[#ffffff17] backdrop-blur-sm rounded-[25px]"
          >
            <h1 className="text-white text-[40px]">
              Visit us at our store <br /> in the <br />
              <span className="text-white text-[60px] font-black">
                Mall of Emirate
              </span>
            </h1>
            <button
              onClick={handleLeaveClick}
              className="flex absolute bottom-[80px] right-[20px] items-center justify-center text-white gap-2 text-xl cursor-pointer underline p-1"
            >
              more... <TiArrowRight className="text-2xl" />
            </button>
          </div>
          <div
            style={{
                display: leave ? "block" : "none",
              transition: "1s"

            }}
            className="w-[600px] right-0 top-2 absolute flex items-center justify-center flex-col text-center h-[400px] bg-[#00000075] backdrop-blur-sm rounded-[25px]"
          >
          <h2
              onClick={handleBackClick}
              className="text-white text-4xl absolute left-5 cursor-pointer top-10"
            >
              <MdKeyboardArrowLeft />
            </h2>
          <div className=" mt-14">
            <h1 className="text-white text-[30px] w-[80%]">
              We are stationed in one of the most beautiful and prestigious
              malls on this planet. Visit us and we will consult you to all our
              products
            </h1>
          </div>
            <div className="flex items-center gap-[30px]">
              <button className="text-xl text-white border-[2px] border-solid border-white py-2 px-10 rounded-[10px]">
                Get directions
              </button>
              <button className="text-xl text-white bg-black border-[2px] border-solid border-white py-2 px-10 rounded-[10px]">
                Or buy online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mall;
