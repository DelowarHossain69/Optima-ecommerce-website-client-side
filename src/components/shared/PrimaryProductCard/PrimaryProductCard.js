import React from "react";

import Ratings from "./../Ratings/Ratings";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { img, price, name, ratings, totalSells, _id } = product;
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded p-5 text-center md:text-left cursor-pointer hover:shadow-xl hover:translate-y-[-5px] duration-500 transition-all max-w-xs" onClick={(()=> navigate(`/productDetails/${_id}`))}>

      <div className="flex items-center justify-center">
        <img src={img} className=" object-cover" alt="product" />
      </div>
      <div className="flex items-center space-x-1 justify-center md:justify-start">
        <Ratings ratings={ratings}></Ratings>
        <p>({totalSells})</p>
      </div>
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <h5 className="font-bold text-xl">$ {price}</h5>
    </div>
  );
};

export default ProductCard;
