import React from 'react';
import Slider from './Slider/Slider';
import Display from './Display/Display';
import BestSell from './BestSell/BestSell';
import Collection from '../../shared/Collection/Collection';
import Location from './Location/Location';

const Home = () => {
    return (
        <div>
            <Slider />
            <Display />
            <BestSell />
            <Collection />
            <Location />
        </div>
    );
};

export default Home;