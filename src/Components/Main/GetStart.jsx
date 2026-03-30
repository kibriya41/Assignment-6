import React from 'react';
import User from '../../assets/products/user.png'
import Package from "../../assets/products/package.png"
import Rocker from "../../assets/products/rocket.png"

const GetStart = () => {
    return (
        <div className='bg-[#F9FAFC] py-32'>
            <div className='max-w-9/12 m-auto text-center'>
                <h3 className='text-5xl font-extrabold'>Get Started in 3 Steps</h3>
                <p className='text-lg font-light text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    <div className='flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-4 relative'>
                        <img src={User} alt="" />
                        <h4 className='text-2xl font-bold'>Create Account</h4>
                        <p className='text-lg font-light text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        <p className='bg-purple-700 px-2 py-1 rounded-full absolute right-11 text-white'>01</p>
                    </div>

                    <div className='flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-5 relative'>
                        <img src={Package} alt="" />
                        <h4 className='text-2xl font-bold'>Choose Products</h4>
                        <p className='text-lg font-light text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                        <p className='bg-purple-700 px-2 py-1 rounded-full absolute right-11 text-white'>02 </p>
                    </div>
                    <div className='flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-5 relative'>
                        <img src={Rocker} alt="" />
                        <h4 className='text-2xl font-bold'>Start Creating</h4>
                        <p className='text-lg font-light text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
                        <p className='bg-purple-700 px-2 py-1 rounded-full absolute right-11 text-white'>03</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStart;