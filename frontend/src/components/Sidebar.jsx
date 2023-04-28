import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../assets/constants.js";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <>
      {links.map((item, i) => (
        <NavLink
          className="flex flex-row my-1 text-gray-700
            py-2 mb-3   "
          key={i}
          to={item.to}
        >
          <div className="text-lg flex flex-row items-center ">
            <h1 className="mr-2">{item.icon}</h1>
            <h1>{item.name}</h1>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export const Sidebar = () => {
  console.log(links);
  return (
    <>
      <div className="sidebar bg-white h-screen fixed top-0 left-0 w-1/3  px-8 py-8 ">
        <Link to="/">
          <div className="logo flex flex-row items-center w-52 mb-10">
            <img
              className="w-10 mr-2"
              src="https://img.icons8.com/parakeet/96/null/shopping-cart.png"
              alt=""
            />
            <h1 className="font-semibold text-3xl cursor-pointer">Shopify</h1>
          </div>
        </Link>
        <h1 className="font-black text-2xl my-8">Explore</h1>
        <NavLinks />
      </div>
    </>
  );
};
