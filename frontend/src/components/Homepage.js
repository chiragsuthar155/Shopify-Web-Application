import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function Homepage() {
  const [gender, setGender] = useState(true);
  return (
    <>
      <div className="w-full ">
        <div className="flex flex-row items-center justify-between  ml-0 lg:ml-72 lg:mr-8">
          <div className="flex flex-row items-center gap-2 text-lg px-2 md:text-2xl">
            <p>⚡</p>
            <p className="font-black">New In</p>
          </div>
          <div className="flex flex-row items-center font-black gap-4 mr-4 md:mr-0">
            <div className="flex flex-row items-center border rounded-md ">
              <div
                className={`p-2 md:p-3 flex flex-row items-center ${
                  gender ? "bg-slate-300" : ""
                } rounded-md cursor-pointer`}
                onClick={() => {
                  setGender(!gender);
                }}
              >
                🙋‍♀️ <span className="hidden sm:inline">Women</span>
              </div>
              <div
                className={`p-2 md:p-3 flex flex-row items-center ${
                  gender ? "" : "bg-slate-300"
                } rounded-md cursor-pointer`}
                onClick={() => {
                  setGender(!gender);
                }}
              >
                🙋‍♂️ <span className="hidden sm:inline">Men</span>
              </div>
            </div>
            <div className="p-3 hidden flex-row  md:flex cursor-pointer items-center gap-5 border rounded-md hover:bg-slate-200">
              <img
                className="w-5 h-5"
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/null/external-bars-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                alt=""
              />
              <p>Sort</p>
            </div>
            <div className=" p-3 cursor-pointer hidden md:flex flex-row items-center gap-4 px-8 border rounded-md hover:bg-slate-200">
              <p className="p-3 bg-black text-slate-50 rounded-full w-5 h-5 flex flex-row items-center justify-center">
                S
              </p>
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="photo-grid mx-2 md:mx-4 lg:ml-80 text-2xl py-10">
          <div className="card card-tall relative lg:card-wide  bg-[url('https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxjbG90aGVzJTIwYmFubmVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=570&q=60')]">
            <p className="font-black absolute top-3 right-3 ">Summer Deals</p>
          </div>
          <div className="card card-tall relative  bg-[url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzJTIwYmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')]">
            <p className="font-black absolute bottom-8 text-black">
              Sneaky Sneakers
            </p>
          </div>
          <div className="card relative card-tall bg-[url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')]">
            <p className="font-black absolute bottom-8 text-black">
              Woman Sandals
            </p>
          </div>

          <div className="card card-tall bg-[url('https://images.unsplash.com/photo-1583846762363-5fc36ec494a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')]">
            <p className="font-black text-black ">Woman's Clothing</p>
          </div>
          <div className="card relative card-tall md:card-wide bg-[url('https://images.unsplash.com/photo-1517865288-978fcb780652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80')]  ">
            <p className="font-black absolute top-3 right-3 text-black  ">
              Men's Clothing
            </p>
          </div>
        </div>

        <ProductCard gender={gender} />

        <div className="flex flex-row items-center justify-center ml-0 lg:ml-72 mb-20">
          <ul className="list-none flex flex-row items-center justify-center gap-8">
            <li className="flex flex-row items-center justify-center rounded-full h-12 w-12 border border-slate-500 cursor-pointer text-2xl transition-colors duration-300 hover:bg-yellow-400">
              1
            </li>
            <li className="flex flex-row items-center justify-center rounded-full h-12 w-12 border border-slate-500 cursor-pointer text-2xl transition-colors duration-300 hover:bg-yellow-400">
              2
            </li>
            <li className="flex flex-row items-center justify-center rounded-full h-12 w-12 border border-slate-500 cursor-pointer text-2xl transition-colors duration-300 hover:bg-yellow-400">
              3
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
