import React from 'react';
import swimming from '../assets/swimming.png';
import clsPic from '../assets/class.png';
import playground from '../assets/playground.png'
const Qzone = () => {
    return (
        <div className='mt-5 bg-base-200 p-4'>
            <h3 className='font-bold'>Q-Zone</h3>
            <div className='flex-col cols-1'>
                <img src={swimming} alt="" />
                <img src={clsPic} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;