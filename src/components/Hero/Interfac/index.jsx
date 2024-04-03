import React, { useEffect, useState } from "react";
import code from "../../../assets/img/qr code.png";
const Interfac = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="py-[170px] ">
      <div className="container">
        <div className=" flex items-center justify-center py-32">
          <img src={code} alt="img" />
        </div>
        <div className="flex  justify-between">
          <div className="border-t-2 w-[260px]"></div>
          <div className="border-t-2  w-[260px]"></div>
          <div className="border-t-2  w-[260px]"></div>
        </div>
        <div
          className=" flex items-center justify-between "
          style={{
            marginTop: scrollPosition < 2900 ? "-500px" : "0px",
            opacity: scrollPosition < 2900 ? "0" : "1",
            transition: "3s",
          }}
        >
          <div className=" text-center w-[200px] h-[200px] text-white mt-4 ">
            <h1 className=" text-[90px] ">1</h1>
            <h2 className=" text-[30px] ">Fast delivery</h2>
            <p className=" mt-4 text-xl text-gray-500">
              We deliver right to your front door or office. Free of charge!
            </p>
          </div>
          <div className=" text-center w-[200px] h-[200px] text-white mt-4 ">
            <h1 className=" text-[90px] ">2</h1>
            <h2 className=" text-[30px] ">Fast delivery</h2>
            <p className=" mt-4  text-xl text-gray-500">
              We deliver right to your front door or office. Free of charge!
            </p>
          </div>
          <div className=" text-center w-[200px] h-[200px] text-white mt-4 ">
            <h1 className=" text-[90px] ">3</h1>
            <h2 className=" text-[30px] ">Fast delivery</h2>
            <p className=" mt-4  text-xl text-gray-500">
              We deliver right to your front door or office. Free of charge!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfac;
