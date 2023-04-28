import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        {items.length === 0 ? (
          <h1 className="text-3xl font-bold mt-10 text-center">
            Your Cart is Empty
          </h1>
        ) : (
          items.map((item, i) => (
            <div
              key={i}
              className="flex flex-row justify-between px-3 sm:px-5 md:px-10  pt-0  ml-0 lg:ml-72  bg-white items-center  cursor-pointer"
            >
              <img
                className="w-12 sm:w-16 md:w-32 "
                src={
                  item.images
                    ? item.images[0].baseUrl
                    : item.galleryDetails[0].baseUrl
                }
              />
              <h1 className="ml-4 md:ml-8 mr-3 font-lg text-md md:text-xl truncate  my-3 ">
                {item.name}
              </h1>
              <h1 className=" font-lg text-md md:text-xl w-32 my-3 ">
                Qty: {item.qty}
              </h1>
              <p className=" md:w-64 flex flex-row items-center text-md md:text-lg">
                <span className="hidden md:inline">Price: </span>
                {item.price ? item.price.formattedValue : item.whitePrice.price}
              </p>
              <button
                onClick={() => handleRemove(item.code)}
                className="text-md p-2 md:p-3 ml-3 md:text-lg  rounded-lg text-gray-50 bg-red-500  hover:bg-yellow-400"
              >
                <h1 className="text-md md:text-lg">Remove</h1>
              </button>
            </div>
          ))
        )}
        {items.length !== 0 ? (
          <div className="flex flex-row justify-center my-10">
            <Link to="/Checkout">
              <button className="text-md p-2 md:p-3  md:text-lg rounded-lg text-gray-50 ml-3 bg-green-500  hover:bg-green-400">
                <h1 className="md:text-lg">Proceed to Checkout</h1>
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
