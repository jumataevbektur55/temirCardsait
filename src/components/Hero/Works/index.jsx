import React, {useState,useEffect} from "react";
import img97 from "../../../assets/img/tap card.png";
import img98 from "../../../assets/img/Add details.png";
import img99 from "../../../assets/img/Go share.png";
import hand from "../../../assets/img/Hand,L.png";
import image from "../../../assets/img/iPhone 12 Pro (Wooden Hands).png";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Works = () => {
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
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" py-10 mt-32  ">
      <div className="container">
        <div className=" flex items-start justify-between">
          <div className="text-[70px] text-white font-black mb-4">
            <h1>How it works</h1>
            <div className=" flex items-center gap-6 ">
              <div className=" text-white flex flex-col gap-3 items-center justify-center">
                <img src={img97} alt="" />
              </div>
              <div className=" text-white flex flex-col gap-3 items-center justify-center">
                <img src={img98} alt="" />
              </div>
              <div className=" text-white flex flex-col gap-3 items-center justify-center">
                <img src={img99} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex items-start border-l-2 mt-8 gap-4 pl-[30px] border-inherit border-solid">
            <h2 className=" text-white text-2xl">•</h2>
            <p className="text-white text-xl  ">
              Choose your design & personalize with your own <br /> company
              logo. The logo will be engraved into the <br /> metal card.
            </p>
          </div>
        </div>
        <div className=" mt-10 flex items-flex justify-between gap-[100px]">
          <div className=" flex items-center justify-center flex-col ">
              <h1 className=" text-white text-[60px]">FAQ </h1>
            <div className=" w-[90%] flex flex-col gap-3 overflow-auto">
            </div>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className=" text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className=" text-white text-[25px] w-[100%] h-[70px] "
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} />}
              className="text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className=" text-white text-[25px] w-[100%] h-[70px] "
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} />}
              className="text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className=" text-white text-[25px] w-[100%] h-[70px]"
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={<Icon id={4} open={open} />}
              className=" text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-white text-[25px] w-[100%] h-[70px]"
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={<Icon id={5} open={open} />}
              className="text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className=" text-white text-[25px] w-[100%] h-[70px]"
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              icon={<Icon id={6} open={open} />}
              className="text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-white text-[25px] w-[100%] h-[70px]"
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 7}
              icon={<Icon id={7} open={open} />}
              className="text-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className=" text-white text-[25px] w-[100%] h-[70px]"
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
          <div className=" relative">
            <div className=" w-[500px]  mr-[-100px]">
              <img src={image} alt="img" />
              <div className=" absolute top-[250px] right-[100px]  w-[100]" style={{
               marginTop: scrollPosition < 2050 ? "100%" : "0px",
               transition: "1s"
              }}>
                <img src={hand} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
