import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavData = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about-us",
    },
    {
      label: "Collection",
      url: "/collections",
    },
    {
      label: "Contact",
      url: "/contact-us",
    },
  ];
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="Logo" />

      <ul className="flex sm:flex gap-5 text-sm text-gray-700">
        {NavData.map((item, index) => (
          <NavLink key={index} to={item.url} className="flex flex-col gap-1 items-center">
            <p className="uppercase">{item.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search Icon" />

        <div className="group relative">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile Icon" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
