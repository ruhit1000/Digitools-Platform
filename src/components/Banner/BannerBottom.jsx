import React from 'react';

const BannerBottom = () => {
    return (
        <div className='py-30 text-center bg-linear text-base-100'>
            <h1 className='font-extrabold text-4xl mb-4'>Ready to Transform Your Workflow?</h1>
            <p className='opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className='mt-10 mb-3'>
                <button
                className='bg-base-100 py-3 px-4 rounded-3xl text-[#9514FA] font-semibold'
                >
                    Explore Products
                </button>
                <button
                className='py-3 px-4 rounded-3xl font-semibold border border-base-100 ml-4'
                >
                    View Pricing
                </button>
            </div>
            <p className='opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default BannerBottom;