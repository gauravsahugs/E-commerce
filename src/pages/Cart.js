import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Cart() {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CardItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-bold">Cart Items Total Amount</h2>
            <p className="flex items-center gap-4 text-base font-semibold">
              SubTotal
              <span className="font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>

            <p className="flex items-start gap-4 text-base font-semibold">
              Shipping
              <span className="">Shipping to your Heavenly address</span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6 ">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                name="MiniBazaar Shopping"
                description={`Your Payment amout is $${totalAmt}`}
                panelLabel="Pay Now"
                label={"Pay now for Confirm Order"}
                amount={totalAmt * 100}
                stripeKey="pk_test_51MzM79SE9QwhX6SQ1ey86Cy3aTUOgG7OVReLfohNkqFmgiXha9EC5CyuspQ9Y8eMyxDGjmkmP0wEeRMrdElG2rsA00SG1O4xlT"
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
