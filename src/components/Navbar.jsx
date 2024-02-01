import React from "react";
import logo from "../assets/logo.png";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-violet-500 flex justify-between items-center pl-16 sm:pl-6 sm:pr-12 md:pl-12 md:pr-16  p-4 pr-36 shadow-2xl  w-full h-[8vh] fixed z-50 ">
        <div className=" ">
          <Link to="/">
            <img className=" cursor-pointer h-auto w-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="relative flex gap-4 ">
          <Link to="/wishlist">
            <AiOutlineHeart size={24} />
          </Link>

          <Link to="/cart">
            <GiShoppingBag size={22} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
