import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ratings}) => {
    const count = ratings || 0;

    return (
        <div className='flex space-x-1'>
            {
                [...Array(count)]?.map(rating => <AiFillStar className="text-yellow-500 text-lg" />)
            }
            {
                [...Array(5 - count)]?.map(rating => <AiOutlineStar className='text-gray-500 text-lg' />)
            }
        </div>
    );
};

export default Ratings;