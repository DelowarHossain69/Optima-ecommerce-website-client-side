import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-lg rounded p-5 text-center md:text-left cursor-pointer hover:shadow-xl hover:translate-y-[-5px] duration-500 transition-all max-w-xs">
      <div className="flex items-center justify-center">
        <img
          src="https://i.ibb.co/tJH4nsp/xb10-portable-wireles.jpg"
          className=" object-cover"
          alt=""
        />
      </div>
      <div className="flex items-center space-x-1 justify-center md:justify-start">
        <AiFillStar className="text-yellow-500 text-lg" />
        <AiFillStar className="text-yellow-500 text-lg" />
        <AiFillStar className="text-yellow-500 text-lg" />
        <AiOutlineStar className="text-yellow-500 text-lg" />
        <AiOutlineStar className="text-yellow-500 text-lg" />
      </div>
      <h3 className="font-bold text-xl mb-1">Woollen Bomer Boon</h3>
      <h5 className="font-bold text-xl">$ 55</h5>
    </div>
  );
};

export default ProductCard;
