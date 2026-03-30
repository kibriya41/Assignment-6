import React from 'react';
import { FaPlus } from "react-icons/fa";

const Reviw = () => {
    return (

        <div className=' bg-linear-to-r from-purple-600 to-purple-500'>
            <div className='max-w-9/12 mx-auto flex justify-between py-14 text-center'>
                <div className='text-white'>
                    <h1 className='flex items-center text-6xl font-extrabold'>50K<FaPlus size={30} />
                    </h1>
                    <p className='text-2xl mt-3'>Active Users</p>
                </div>
                <div className='text-white '>
                    <h1 className='flex items-center text-6xl font-extrabold'>200<FaPlus size={30} />
                    </h1>
                    <p className='text-2xl mt-3'>Premium Tools</p>
                </div>
                <div className='text-white '>
                    <h1 className='flex items-center text-6xl font-extrabold'>4.9
                    </h1>
                    <p className='text-2xl mt-3'>Rating</p>
                </div>
            </div>
        </div>

    );
};

export default Reviw;