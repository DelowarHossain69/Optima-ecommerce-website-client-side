import React from "react";
import Ratings from "../../shared/Ratings/Ratings";
import ReviewImage from "./ReviewImage";

const ReviewCard = ({comment}) => {
    const {name, profileImg, text} = comment;
  return (
    <div className="my-6">
      <div className="flex items-center">
        <img
          src={profileImg}
          alt="customer"
          className=" w-14 h-14 rounded-full border-2 border-primary"
        />

        <div className="ml-3 space-y-2">
          <h3>{name.slice(0,2)}****{name.slice(name.length -2)}</h3>
          <h3 className="text-sm text-green-500 flex items-center my-1">
            
            <img
              src="https://i.ibb.co/xMXPtPj/check-mark.png"
              alt="verified"
              className="w-5"
            />
            Verified Purchase
          </h3>
          <Ratings ratings={2} />
        </div>
      </div>

      <p className="my-2">{text}</p>

      <div className="flex mt-5">
        <ReviewImage />
      </div>
    </div>
  );
};

export default ReviewCard;
