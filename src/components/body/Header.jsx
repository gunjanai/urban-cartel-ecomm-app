import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("header log", cartItems);
  return (
    <div className="p-4 h-[4rem] w-[100vw] shadow-lg bg-black text-black flex items-center justify-between">
      <div className="flex justify-center items-center">
        <img src="/logo.png" className="w-12" />
        <span className="text-white font-bold text-xl ml-4">Urban Cartel</span>
      </div>
      {/* <HeaderItem itemName={"Home"} active={true} /> */}
      <Link to="/cart">
        <div className="flex">
          <img src="/cart.png" className="w-10" />
          <div className="flex flex-col items-center">
            <span className="text-white">{cartItems.length}</span>
            <span className="text-white">Cart</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
