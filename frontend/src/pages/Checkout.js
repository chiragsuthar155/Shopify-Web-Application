import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
export const Checkout = () => {
  const items = useSelector((state) => state.cart);
  const [productPrices, setProductPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    name: "Buy React",
    price: 10,
    productBy: "H&M",
  });

  useEffect(() => {
    console.log(items);
    let temp;
    if (items.length === 0) {
      temp = 0;
    } else {
      temp = items.map((product) => product.price.value * product.qty);
      setProductPrices(temp);
      const temp2 = temp.reduce((acc, price) => (acc += price)).toFixed(2);
      setTotalPrice(temp2);
    }
    // if (items) {
    // }
    // console.log(name);
    // console.log(mobile);
    // console.log(email);
    // console.log(address);
  }, []);

  function setProductFunc() {
    console.log(totalPrice);
    setProduct({
      name: name,
      price: totalPrice,
      productBy: "H&M",
    });
  }

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:3000/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log("Response: ", res);
        const { status } = res;
        console.log("Status: ", status);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div className=" flex flex-row justify-evenly items-center ml-56">
      <div className="my-2 md:my-4">
        <h1 className=" text-3xl md:text-4xl mb-8 ">
          Kindly fill the details in the form:{" "}
        </h1>
        <form
          method="POST"
          action="/Checkout"
          className="flex flex-col text-lg md:text-xl"
        >
          <div className="flex flex-row justify-between items-center">
            <label className=" mr-6" htmlFor="">
              Name:
            </label>
            <div className="w-4/6 border-solid border  border-stone-800  py-1 px-1 ">
              <input
                className="w-full border-none outline-none"
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row justify-between items-center ">
            <label className="mr-6" htmlFor="">
              Email:
            </label>
            <div className="w-4/6 border-solid border py-1 border-stone-800 px-1">
              <input
                className="w-full outline-none border-none"
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <br />
          <div className="flex flex-row justify-between items-center ">
            <label className="truncate mr-6" htmlFor="">
              Phone No:
            </label>
            <div className="w-4/6 border-solid border py-1 border-stone-800 px-1 ">
              <input
                className="w-full outline-none border-none"
                type="tel"
                value={mobile}
                placeholder="Your Phone Number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>
          </div>

          <br />
          <div className="flex flex-row justify-between items-start  mb-8">
            <label className=" mr-6" htmlFor="">
              Address:
            </label>
            <div className="w-4/6 border-solid border py-1 border-stone-800 px-1 ">
              <textarea
                cols="60"
                rows="5"
                className="w-full outline-none border-none"
                type="text"
                value={address}
                placeholder="Your Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end items-center">
            <StripeCheckout
              stripeKey={process.env.REACT_APP_KEY}
              email={email}
              token={makePayment}
              name={`${name ? name : ""}`}
              amount={totalPrice * 100}
            >
              <button
                onClick={() => setProductFunc()}
                className="bg-green-500 px-80  text-xl font-black py-3 text-white "
              >
                Pay with Card
              </button>
            </StripeCheckout>
          </div>
        </form>
      </div>
      <div className="my-2 md:my-4 border px-8 py-16">
        <h1 className="text-3xl font-black mb-8">Order Summary:</h1>
        {items.map((product, index) => (
          <div
            className="flex flex-row justify-evenly items-start mb-3"
            key={index}
          >
            <div className="text-xl w-3/4 flex flex-row items-start">
              <h1>
                {product.defaultArticle.name}
                <p className="text-sm ml-2 bg-green-400 text-white px-2 rounded inline">
                  x{product.qty}
                </p>
              </h1>
            </div>
            <p className="text-lg ">{product.price.formattedValue}</p>
          </div>
        ))}

        <hr />
        <div className=" flex flex-row items-center justify-between mx-1 text-xl font-black mt-4">
          {productPrices.length !== 0 ? (
            <>
              <h1>Total:</h1>
              <h1>{productPrices.length !== 0 ? `$ ${totalPrice}` : "0.00"}</h1>
            </>
          ) : (
            <p className="text-center text-md">Your Cart is Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};
