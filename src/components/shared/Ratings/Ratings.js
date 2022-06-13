import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ratings}) => {
    return (
        <div className='flex space-x-1'>
            {
                [...Array(ratings)]?.map(rating => <AiFillStar className="text-yellow-500 text-lg" />)
            }
            {
                [...Array(5 - ratings)]?.map(rating => <AiOutlineStar className='text-gray-500' />)
            }
        </div>
    );
};

export default Ratings;