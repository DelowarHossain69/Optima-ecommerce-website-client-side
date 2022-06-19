import React from 'react';
import { BallTriangle} from 'react-loader-spinner';

const Loading = () => {
    return (
        <section className='w-full h-screen flex items-center justify-center'>
            <BallTriangle color="#fedc1b" height={80} width={80} />
        </section>
    );
};

export default Loading;