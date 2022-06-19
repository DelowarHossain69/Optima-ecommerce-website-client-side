import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddToCardItem = ({product, deleteItem}) => {
    const {name,  totalAmount, orderQuantity, img, _id} = product;
    const navigate = useNavigate();
   

    return (
        <div className='shadow-lg rounded mb-3  grid grid-cols-1 lg:grid-cols-3 items-center justify-items-start p-4'>
            <div className='flex flex-col items-center'>
                 <img src={img} alt="product" className=' w-24 h-24 rounded' />
                 <h2>{name}</h2>
            </div>

            <div className='space-y-2 w-full text-center'>
                <h4>Quantity : {orderQuantity} piece</h4>
                <h4>Price : ${totalAmount}</h4>
            </div>

            <div className='space-x-2 text-right w-full'>
                <button className='w-12 h-12 bg-primary  border border-transparent hover:bg-transparent hover:border-black  rounded-full p-2 text-lg font-bold duration-300' onClick={()=> navigate(`/paymentDetails`)}>Pay</button>
                <button className='w-12 h-12 bg-[#fb5200] text-white hover:text-black border border-transparent hover:bg-transparent hover:border-black  rounded-full p-2 text-lg font-bold duration-300' onClick={()=> deleteItem(_id)}>
                    <FontAwesomeIcon icon={faTrash} className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default AddToCardItem;