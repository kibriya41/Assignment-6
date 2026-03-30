import React from 'react';
import Check from "../../assets/products/Check.png"
import WhiteCheck from "../../assets/products/Check-2.png"
import { FaDollarSign } from "react-icons/fa";

const Pricing = () => {
    return (
        <div className='max-w-9/12 m-auto text-center'>
            <h3 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h3>
            <p className='text-sm font-light text-[#627382] mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                <div className='flex flex-col items-start gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-6 relative'>
                    <h5 className='text-2xl font-bold'>Starter</h5>
                    <p className='text-sm font-light text-[#627382]'>Perfect for getting started</p>
                    <h5 className='flex items-center text-5xl font-extrabold'><FaDollarSign size={40} />0 <span className='text-xl font-light'>/Month</span></h5>
                    <ul>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Access to 10 free tools</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Basic templates</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Community support</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />1 project per month</li>
                    </ul>
                    <button className='btn text-white bg-linear-to-r from-blue-700 to-purple-500 mr-4 rounded-full py-5 w-11/12 mx-auto'>Get Started Free</button>
                </div>

                <div className='flex flex-col items-start gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-6 bg-linear-to-r from-blue-700 to-purple-500 text-white relative'>
                    
                    <h5  className='text-2xl font-bold'>Pro</h5>
                    <p className='text-sm font-light'>Best for professionals</p>
                    <h5 className='flex items-center text-5xl font-extrabold'><FaDollarSign size={40} />29 <span className='text-xl font-light'>/Month</span></h5>
                    <ul>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Access to all premium tools</li>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Unlimited templates</li>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Priority support</li>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Unlimited projects</li>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Cloud sync</li>
                        <li className='flex gap-2 text-lg font-light text-white'><img src={WhiteCheck} alt="" />Advanced analytics</li>
                    </ul>
                    <button className='btn mr-4 rounded-full py-5 w-11/12 mx-auto text-purple-500'>Start Pro Trial</button>
                    <p className='text-sm font-light text-[#BB4D00] bg-[#FEF3C6] px-3 rounded-full absolute -top-3 left-45'>Most Popular</p>
                </div>

                <div className='flex flex-col items-start gap-4 border-2 border-gray-200 rounded-xl transition-all duration-[0.4s] hover:shadow-[0_20px_50px_rgba(148,68,251,0.2)] hover:-translate-y-2 p-6 relative'>
                    <h5 className='text-2xl font-bold' >Enterprise</h5>
                    <p className='text-sm font-light text-[#627382]'>For teams and businesses</p>
                    <h5 className='flex items-center text-5xl font-extrabold'><FaDollarSign size={40} />99 <span className='text-xl font-light'>/Month</span></h5>
                    <ul>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Everything in Pro</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Team collaboration</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Custom integrations</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Dedicated support</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />SLA guarantee</li>
                        <li className='flex gap-2 text-lg font-light text-[#627382]'><img src={Check} alt="" />Custom branding</li>
                    </ul>
                    <button className='btn text-white bg-linear-to-r from-blue-700 to-purple-500 mr-4 rounded-full py-5 w-11/12 mx-auto'>Get Started Free</button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;