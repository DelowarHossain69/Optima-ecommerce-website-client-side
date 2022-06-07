import React from 'react';

const SocialMediaSignin = () => {
    return (
        <div className='flex justify-center'>
            <button className='btn mr-3 bg-[#E34133]'>
                <img src="https://i.ibb.co/5xfQpxz/google.png" className='w-5 mr-2' alt="" />
                Google
            </button>
            <button className='btn bg-[#4064AC]'>
                <img src="https://i.ibb.co/JyFbkD2/facebook.png" className='w-5 mr-1' alt="" />
                Facebook
            </button>
        </div>
    );
};

export default SocialMediaSignin;