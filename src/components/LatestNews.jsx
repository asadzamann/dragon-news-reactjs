import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 w-10/12 mx-auto'>
            <p className='text-white bg-secondary p-3 w-[110px] text-center'>Latest</p>
            <Marquee pauseOnClick={true}>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, soluta..</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;