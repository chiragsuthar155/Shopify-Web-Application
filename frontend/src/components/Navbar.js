import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import user1 from "../assets/user-1.jpg";
export default function Navbar() {
  // useSelector helps us to get the data from the store (It works as subscribe model , means we will get the data as soon as the data in the store changes)
  const items = useSelector((state) => state.cart);
  let cartItems = 0;
  items.forEach((item) => (cartItems += item.qty));

  return (
    <>
      <div className="flex flex-row items-center justify-around md:justify-between px-4 py-8 md:p-6 gap-10 ml-0 lg:ml-72  ">
        <div className="search border text-sm md:text-lg rounded-full  py-3 px-4 flex flex-row items-center w-11/12 md:w-4/6">
          <img
            className=" w-4 h-4 md:w-6 md:h-6  mr-3"
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-search-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"
            alt="Search-logo"
          />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search for items, brands and inspiration ..."
          />
        </div>
        <div className="cart flex flex-row cursor-pointer items-center relative gap-1">
          <Link to="/cart">
            <img
              className="md:w-10 md:h-10 h-8 w-8 mb-1"
              src="https://img.icons8.com/windows/32/null/shopping-cart.png"
              alt="Cart"
            />
            <p className="font-black text-sm md:text-lg bg-emerald-500 absolute md:bottom-6 md:left-5 h-4 w-4  flex flex-row justify-center items-center p-2.5 md:p-3 bottom-4 left-4 rounded-full">
              {cartItems}
            </p>
          </Link>
        </div>
        <div className="user  hidden sm:flex flex-row items-center gap-2">
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            src={user1}
            alt=""
          />
          <img
            className=" hidden md:inline"
            src="https://img.icons8.com/material-outlined/24/null/expand-arrow--v1.png"
            alt="Expand Arrow"
          />
        </div>
      </div>
    </>
  );
}
