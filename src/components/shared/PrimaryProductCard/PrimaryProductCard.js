import React from "react";

import Ratings from './../Ratings/Ratings';

const ProductCard = ({product}) => {

  const {img, price, name, ratings,} = product;

  return (
    <div className="bg-white shadow-lg rounded p-5 text-center md:text-left cursor-pointer hover:shadow-xl hover:translate-y-[-5px] duration-500 transition-all max-w-xs">
      <div className="flex items-center justify-center">
        <img
          src={img}
          className=" object-cover"
          alt="product"
        />
      </div>
      <div className="flex items-center space-x-1 justify-center md:justify-start">
        <Ratings ratings={ratings}></Ratings>
      </div>
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <h5 className="font-bold text-xl">$ {price}</h5>
    </div>
  );
};

export default ProductCard;
