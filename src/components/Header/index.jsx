import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";

import logo from "../../assets/img/logo.svg";
const Header = () => {
  return (
    <div className="header bg-black py-5 sticky top-0 z-[99]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center gap-10">
            <NavLink
              to={"/"}
              className="text-white tracking-wider text-2xl duration-[.8s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Home
            </NavLink>
            <NavLink
              to={"/product"}duration
              className="text-white tracking-wider text-2xl  hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Products
            </NavLink>
            <img src={logo} alt="img" className="mx-10" />
            <NavLink
              to={"/"}
              className="text-white tracking-wider text-2xl  hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              About
            </NavLink>
            <NavLink
              to={"/"}
              className="text-white tracking-wider text-2xl  hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Contact US
            </NavLink>
          </div>
          <Link to={"/"} className="text-white tracking-wider text-4xl">
            <TbShoppingBagPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
