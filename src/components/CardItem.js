import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function CardItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazaar.productData);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl font-semibold">
          Shopping Cart Items
        </h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img className="w-32 h-32 object-cover" src={item.image} alt="" />
            </div>
            <h2 className="w-52 font-bodyFont font-semibold">{item.title}</h2>
            <p className="w-10 font-bold font-titleFont">${item.price}</p>
            <div className="flex gap-4">
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm font-bodyFont font-semibold">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-norm
                 text-lg flex items-center justify-center px-2 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-norm
                 text-lg flex items-center justify-center px-2 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <h2 className="w-10 font-bold font-titleFont">
              ${item.quantity * item.price}
            </h2>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty")
        }
        className="bg-red-500 font-semibold text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300
          "
      >
        Reset Cart
      </button>

      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowNarrowLeft />
          </span>
          go Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default CardItem;
