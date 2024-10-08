import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

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

  const [isVisible, setIsVisible] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, navigate, setCartItem } = useContext(ShopContext);

  const logOut = () => {
    navigate("/login")
    localStorage.removeItem('token')
    setToken('')
    setCartItem({})
  }

  
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {NavData.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className="flex flex-col gap-1 items-center"
          >
            <p className="uppercase">{item.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        <div className="group relative">
          <Link to='/login'>
            <img
              onClick={() => token ? null : navigate('/login')}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile Icon"
            />
          </Link>
          {
            token &&
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logOut} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          }

        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setIsVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icons"
        />
      </div>

      {/* sidebar for smaller screen */}
      <div
        className={`${isVisible ? "w-full" : "w-0"
          } absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-700`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="Arrow Icon"
            />
            <p>Back</p>
          </div>
          {NavData.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              onClick={() => setIsVisible(false)}
              className="py-2 pl-6 border border-b-red-900"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
