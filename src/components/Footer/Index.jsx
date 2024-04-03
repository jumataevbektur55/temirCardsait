import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import motion from "../../assets/img/motionweb.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        background: "black",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div className="">
          <div className=" flex items-center justify-center gap-28">
            <h3 className=" text-white text-xl uppercase">Home</h3>
            <h3 className=" text-white text-xl uppercase">Order</h3>
            <h3 className=" text-white text-3xl uppercase">TEMIR LLC</h3>
            <h3 className=" text-white text-xl uppercase">About</h3>
            <h3 className=" text-white text-xl uppercase">Contacts</h3>
          </div>
          <p className=" text-center text-xl text-gray-500  pt-10">
            Mall Of Emirates. G-floor. <br /> Near: Rado, Pandiva, Steve <br />{" "}
            Madden
          </p>
          <div className=" flex items-center justify-center gap-20 pt-7">
            <a className=" text-white text-[35px]">
              {" "}
              <FaWhatsapp />
            </a>
            <a className=" text-white text-[35px]">
              {" "}
              <FaFacebookF />
            </a>
            <a className=" text-white text-[35px]">
              {" "}
              <FiYoutube />
            </a>
            <a className=" text-white text-[35px]">
              {" "}
              <FaInstagram />
            </a>
            <a className=" text-white text-[35px]">
              <CgMail />
            </a>
          </div>
          <div className=" flex items-center justify-center gap-20 pt-7">
            <p className=" text-center text-xl text-gray-500  ">
              Developed by
            </p>
            <Link to={"https://motion.kg/"} target="_blank">
              <img src={motion} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
