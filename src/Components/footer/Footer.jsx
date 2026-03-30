import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (

        <footer class="bg-[#0a192f] text-white py-20">

            <div class="max-w-9/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-12">

                <div class="md:col-span-2">
                    <h2 class="text-3xl font-bold mb-4">DigiTools</h2>
                    <p class="text-gray-400 text-sm leading-6 max-w-sm">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 class="font-semibold mb-4">Product</h3>
                    <ul class="space-y-3 text-sm text-gray-400">
                        <li><a href="#" class="hover:text-white transition">Features</a></li>
                        <li><a href="#" class="hover:text-white transition">Pricing</a></li>
                        <li><a href="#" class="hover:text-white transition">Templates</a></li>
                        <li><a href="#" class="hover:text-white transition">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold mb-4">Company</h3>
                    <ul class="space-y-3 text-sm text-gray-400">
                        <li><a href="#" class="hover:text-white transition">About</a></li>
                        <li><a href="#" class="hover:text-white transition">Blog</a></li>
                        <li><a href="#" class="hover:text-white transition">Careers</a></li>
                        <li><a href="#" class="hover:text-white transition">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold mb-4">Resources</h3>
                    <ul class="space-y-3 text-sm text-gray-400 mb-6">
                        <li><a href="#" class="hover:text-white transition">Documentation</a></li>
                        <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                        <li><a href="#" class="hover:text-white transition">Community</a></li>
                        <li><a href="#" class="hover:text-white transition">Contact</a></li>
                    </ul>

                </div>
                <div>
                    <p class="font-semibold mb-3">Social Links</p>
                    <div class="flex gap-3">
                        <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black">
                            <AiFillInstagram />

                        </button>
                        <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black">
                           <FaFacebookSquare />
                        </button>
                        <button class="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black">
                            <FaXTwitter />
                        </button>
                    </div>
                </div>

            </div>

            <div class="max-w-9/12 mx-auto px-6 mt-16 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">

                <p class="text-sm text-gray-500 mb-4 md:mb-0">
                    © 2026 Digitools. All rights reserved.
                </p>

                <div class="flex gap-6 text-sm text-gray-400">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Terms of Service</a>
                    <a href="#" class="hover:text-white transition">Cookies</a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;