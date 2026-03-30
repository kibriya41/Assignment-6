import React from 'react';
import { CiShoppingCart } from "react-icons/ci"

const Navbar = () => {
    return (
        <div className='flex justify-between text-center items-center my-6 max-w-9/12 mx-auto'>
            <h3 className='text-4xl font-bold bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent ...'>DigiTools</h3>
            <ul className='flex justify-around gap-8'>
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>


            <div className='flex gap-4 items-center'>
                <CiShoppingCart size={30} />
                <button className='btn'>Login</button>
                <button className=' btn text-white bg-linear-to-r from-blue-800 to-purple-500 rounded-full'>Get Started</button>

            </div>
        </div>
    );
};

export default Navbar;