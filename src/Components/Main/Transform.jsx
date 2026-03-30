import React from 'react';

const Transform = () => {
    return (
        <div className="bg-linear-to-r from-blue-700 to-purple-500 py-20 text-center text-white">

            <div className="max-w-9/12 mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-4">
                   Ready to Transform Your Workflow?
                </h2>
                <p className="text-sm md:text-base text-white/80 mb-8">
                    JJoin thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                </p>
                <div className="flex justify-center gap-4 mb-4">
                    <button className="btn rounded-full bg-white text-purple-600 border-none hover:bg-gray-100">
                        Explore Products
                    </button>
                    <button className="btn btn-outline border-white text-white rounded-full hover:bg-white hover:text-purple-600">
                        View Pricing
                    </button>
                </div>
                <p className="text-xs text-white/70">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>

        </div>
    );
};

export default Transform;