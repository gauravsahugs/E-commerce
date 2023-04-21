import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1.5px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-base font-extrabold">MiniBazaar</h1>
          </Link>
        </div>
        <div className="flex-row flex gap-8 items-center">
          <ul className="flex-row flex gap-8 items-center">
            <li
              className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </li>
            <li
              className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              {" "}
              Shop
            </li>{" "}
            <li
              className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>{" "}
            <li
              className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Blog
            </li>
          </ul>
          <ShoppingBasketIcon />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
