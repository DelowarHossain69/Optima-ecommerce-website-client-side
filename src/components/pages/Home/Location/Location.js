import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
    return (
        <section className='px-5 py-8 rounded bg-yellow-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-12 gap-5 gap-y-12 md:gap-y-5 text-center'>
            <div className='flex items-center text-black justify-center flex-col'>
                <FontAwesomeIcon icon={faLocationDot} className='text-4xl' />
                <div className=' leading-5'>
                    <h2 className='text-xl font-semibold'>Saver, Dhaka</h2>
                    <h4>Contact Info!</h4>
                </div>
            </div>

            <div className='flex items-center text-black justify-center flex-col'>
                <FontAwesomeIcon icon={faEnvelope} className='text-4xl mr-2' />
                <div className=' leading-5'>
                    <h2 className='text-xl font-semibold'>Support@gmail.com</h2>
                    <h4>Email address!</h4>
                </div>
            </div>

            <div className='flex items-center text-black justify-center flex-col'>
                <FontAwesomeIcon icon={faClock} className='text-4xl mr-2' />
                <div className=' leading-5'>
                    <h2 className='text-xl font-semibold'>Contact us 24 hrs a day</h2>
                    <h4>Dedicated support</h4>
                </div>
            </div>

            <div className='flex items-center text-black justify-center flex-col'>
                <FontAwesomeIcon icon={faPhoneVolume} className='text-4xl mr-2' />
                <div className=' leading-5'>
                    <h2 className='text-xl font-semibold'>+01709827894</h2>
                    <h4>Free support line!</h4>
                </div>
            </div>
        </section>
    );
};

export default Location;