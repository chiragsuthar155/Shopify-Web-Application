import React from "react";
import "./index.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Sportswear } from "./pages/Sportswear";
import { BeautyProducts } from "./pages/BeautyProducts";
import { HomeAppliances } from "./pages/HomeAppliances";
import { BabyProducts } from "./pages/BabyProducts";
import { Checkout } from "./pages/Checkout";
export default function App() {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothes-details/:clothCode" element={<Product />} />
            <Route path="/sportswear" element={<Sportswear />} />
            <Route path="/beauty_products" element={<BeautyProducts />} />
            <Route path="/home_appliances" element={<HomeAppliances />} />
            <Route path="/kids_products" element={<BabyProducts />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
