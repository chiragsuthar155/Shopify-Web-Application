import React from "react";
import ProductCard from "../components/ProductCard";
import { useGetSportsWearQuery } from "../redux/services/hmServices";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import Loader from "../assets/Loading.gif";
export const Sportswear = () => {
  const dispatch = useDispatch();
  const { data: sportsData, isFetching: isFetchingSportsData } =
    useGetSportsWearQuery();

  function handleAdd(product) {
    // here product is the payload
    dispatch(add(product));
  }
  if (isFetchingSportsData)
    return (
      <div className="flex flex-row items-center justify-center">
        <img
          className="w-full ml-0 md:ml-64 md:w-1/2"
          src={Loader}
          alt="Loading Gif"
        />
      </div>
    );
  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap justify-center  md:gap-10  py-8  ml-0 lg:ml-72">
        {sportsData.results.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-start pt-0 pb-7 bg-white items-center w-68 mx-1 border cursor-pointer hover:scale-105 rounded-xl transition transform duration-900"
          >
            <Link
              className="flex flex-col justify-center items-center"
              to={`/clothes-details/${item.articles[0].code}`}
            >
              <img
                className="w-64 transition-all"
                src={item.images[0].baseUrl}
                onMouseOver={(e) => {
                  e.target.setAttribute(
                    "src",
                    item.defaultArticle.normalPicture[0].baseUrl
                  );
                }}
                onMouseLeave={(e) => {
                  e.target.setAttribute("src", item.images[0].baseUrl);
                }}
              />
              <h1 className="text-center font-semibold text-lg  px-2 my-3 ">
                {item.name}
              </h1>
              {/* <p className="text-sm">{item.description.slice(0, 190)}...</p> */}
              <p className="text-lg text-center">
                Price: {item.price.formattedValue}
              </p>
            </Link>
            <button
              onClick={() => handleAdd(item)}
              className="w-32 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-2 rounded-full"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
