import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../redux/services/hmServices";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import Loader from "../assets/Loading.gif";
export default function Product() {
  const { clothCode } = useParams();
  const [activeImg, setActiveImg] = useState("");
  const { data: productData, isFetching: isFetchingProductData } =
    useGetProductDetailsQuery({ clothCode });
  const dispatch = useDispatch();

  if (isFetchingProductData)
    return (
      <>
        <div className="flex flex-row items-center justify-center">
          <img
            className="w-full ml-0 md:ml-64 md:w-1/2"
            src={Loader}
            alt="Loading Gif"
          />
        </div>
      </>
    );

  console.log(
    "Product Data",
    productData,
    productData.product.articlesList.find((item) => item.inStore)
  );

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className=" flex flex-col justify-center gap-3 ml-16 pt-0 flex-wrap bg-white ">
        <div className="flex flex-row justify-center items-start gap-20">
          <div className="my-0">
            <h1 className="text-4xl font-bold my-3">
              {
                productData.product.articlesList.find((item) => item.inStore)
                  .name
              }
            </h1>
            <h1 className="text-4xl font-bold">
              $
              {
                productData.product.articlesList.find((item) => item.inStore)
                  .whitePrice.price
              }
            </h1>
            <div>
              <p className="text-lg mt-4 border-b-2">Product Info</p>
              <p className="w-96 text-lg mt-4 ">
                {
                  productData.product.articlesList.find((item) => item.inStore)
                    .description
                }
              </p>
              <p className="text-lg mt-4 border-b-2">View More</p>
              <div className="flex flex-row gap-3 mt-4 flex-wrap w-96">
                {productData.product.articlesList
                  .find((item) => item.inStore)
                  .galleryDetails.map((item) => (
                    <img
                      className="w-16 cursor-pointer hover:scale-125 transition-transform"
                      src={item.baseUrl}
                      onMouseEnter={(e) => {
                        const imgSrc = e.target.src;
                        setActiveImg(imgSrc);
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <img
            className="w-5/6 md:w-1/4 md:h-1/4 border-l-2 border-r-2 "
            src={
              activeImg
                ? activeImg
                : productData.product.articlesList.find((item) => item.inStore)
                    .galleryDetails[1].baseUrl
            }
            alt=""
          />
        </div>
        <div className="my-8">
          <div className="flex flex-row justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-xl font-bold my-3 mr-10">Choose Size</h1>
                <h1 className="text-gray-500 ml-10">Size Guide</h1>
              </div>
              <div className="flex flex-row max-w-xs gap-2 my-4 flex-wrap">
                {productData.product.articlesList
                  .find((item) => item.inStore)
                  .variantsList.map((item) => (
                    <h1
                      className=" rounded-full h-10  w-10 flex flex-row justify-center font-medium border-2 text-md p-2 cursor-pointer hover:bg-yellow-400 transition-colors"
                      onClick={(e) => {
                        e.target.classList.add("bg-yellow-200");
                        e.target.classList.add("text-gray-50");
                      }}
                    >
                      {item.size.name}
                    </h1>
                  ))}
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold ">Choose Color</h1>
              <div>
                {
                  <p
                    className="p-4 rounded-full cursor-pointer"
                    style={{
                      backgroundColor: productData.product.articlesList.find(
                        (item) => item.inStore
                      ).color.rgbColor,
                    }}
                  ></p>
                }
              </div>
              <h1 className="text-xl font-bold ">Material Type</h1>
              <div>
                {productData.product.articlesList
                  .find((item) => item.inStore)
                  .compositions[0].materials.map((item) => (
                    <p className="text-lg mt-4">
                      {item.name} {item.percentage}%
                    </p>
                  ))}
              </div>
            </div> */}
            <button
              onClick={() =>
                handleAdd(
                  productData.product.articlesList.find((item) => item.inStore)
                )
              }
              className="w-52 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-3 rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
