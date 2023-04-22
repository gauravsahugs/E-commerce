import React from "react";
import ProductsCard from "./ProductsCard";

function Products({ products }) {
  return (
    <div className="py-10 px-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shop Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          MiniBazaar has been recognised as one of the most desirable E-commerce
          in India, citing Products qualtiy, Customer satisfaction, Croduct
          diversity , Skills training and opportunities for growth as key
          differentiators.
        </p>
      </div>
      <div
        className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10
      "
      >
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
