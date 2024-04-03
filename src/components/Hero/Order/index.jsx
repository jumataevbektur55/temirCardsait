import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import photo from "../../../assets/img/Group 484.png";
import photo1 from "../../../assets/img/Group 481.png";
import photo2 from "../../../assets/img/Group 482.png";

const Order = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollPosition);
  AOS.init({
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="py-20 bg-black">
      <div className="container">
        <div className="flex items-start justify-between relative">
          <h1 className=" text-white text-[60px] leading-[80px] font-black bg-black z-[3] p-3">
            The smart way <br /> of staying <br /> connected
          </h1>
          <p
            className="text-white text-[25px] font-extraligth absolute leading-[40px] overflow-hidden top-[95px]"
            style={{
              transform:
                scrollPosition < 500 ? "translateX(-540px)" : "translateX(60%)",
              opacity: scrollPosition < 500 ? "0" : "1",
              transition: "2s",
            }}
            // data-aos="fade-right"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            Digital business cards are the modern way to share contact <br />{" "}
            information. Digital business cards are more interactive, <br />{" "}
            costeffective, and sustainable than their physical counterparts.
          </p>
        </div>
        <h1 className="text-white text-2xl fixed bottom-[40px] right-[50px] z-[99] ">
          {scrollPosition}
        </h1>
        <div className="">
          <div className=" flex items-center justify-center  mt-28">
            <div
              className=" w-[300px] h-[340px] bg-[#3a3a3a] relative"
              style={{
                transform:
                  scrollPosition < 850 ? "translateX(-300px)" : "translateX(0)",
                transition: "1.5s",
              }}
            >
              <img src={photo} alt="" className="absolute left-0 bottom-0" />
            </div>{" "}
            <h2>START CARDS</h2>
            <div
              className="  w-[300px] h-[340px] bg-[#3a3a3a] relative"
              style={{
                transform: scrollPosition > 850 ? "scale(1)" : "scale(0)",
                transition: "1.5s",
              }}
            >
              <img src={photo1} alt="" className="absolute left-0 bottom-0" />
            </div>{" "}
            <h2>START CARDS</h2>
            <div
              className=" w-[300px] h-[340px] bg-[#3a3a3a] relative"
              style={{
                transform:
                  scrollPosition < 850 ? "translateX(300px)" : "translateX(0)",
                transition: "1.5s",
              }}
            >
              <img src={photo2} alt="" className="absolute left-0 bottom-0" />
            </div>{" "}
            <h2>START CARDS</h2>
          </div>
          <div className="fifi flex items-center justify-center mr-24 mt-28">
            <button className=" flex items-center justify-center w-[200px] h-[60px] text-[25px] text-blue-50 bg-black-900 border-[3px] rounded-[10px]">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
