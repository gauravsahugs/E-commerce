import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  console.log(productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1.5px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <Container>
        <div className="max-w-screen-xl h-full mx-auto py-5 flex items-center justify-between">
          <div>
            <Link to="/">
              <h1 className="font-extrabold text-4xl">MiniBazaar</h1>
            </Link>
          </div>
          <div className="flex-row flex gap-6 items-center">
            <ul className="flex-row flex gap-8 items-center">
              <Link to="/">
                <li
                  className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                >
                  Home
                </li>
              </Link>
              <Link to="/">
                <li
                  className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                >
                  Shop
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="text-base text-ba font-bold
             hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                >
                  About
                </li>
              </Link>
            </ul>
            <Link to="/cart">
              <div className="relative">
                <ShoppingCartIcon />
                <span className="absolute w-7 h-7 items-center justify-center bottom-3 left-3 text-sm flex bg-red-500 text-cyan-50 rounded-3xl">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <Avatar src={userInfo?.image} />
            </Link>
            {userInfo && (
              <h3
                className="text-base font-titleFont font-semibold underline underline-offset-2
          "
              >
                {userInfo.name}
              </h3>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
