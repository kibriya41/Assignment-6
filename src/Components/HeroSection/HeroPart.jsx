import React from 'react';
import BannerImg from '../../assets/products/banner.png'
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";


const HeroPart = () => {
    return (
        <div className='max-w-9/12 m-auto flex justify-between items-center my-20'>
            <div className='items-start flex flex-col gap-4 '>
                <div className='flex justify-center items-center gap-2 text-purple-600 font-light bg-purple-100 max-w-80 text-lg rounded-full px-4 py-2'> <FaRegDotCircle />
                    New: AI-Powered Tools Available</div>
                <h2 className='text-7xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-lg text-[#627382]'>Access premium AI tools, design     assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products

                </p>
                <div className='items-start'>
                    <button className='btn bg-linear-to-r from-purple-600 to-purple-500 mr-4 rounded-full'>Explore Products</button>

                    <button className='btn border-2 border-purple-600 text-purple-600 px-6 py-4 rounded-full font-bold hover:bg-purple-600/10 transition-colors'><CiPlay1 />
                        Watch Demo</button>
                </div>
            </div>
            <div>

                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default HeroPart;