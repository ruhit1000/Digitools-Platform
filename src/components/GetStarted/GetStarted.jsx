import React from 'react';
import user from '../../assets/user.png'
import products from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-30'>
            <div className='text-center w-[95%] lg:container mx-auto'>
                <h2 className='font-extrabold text-5xl text-brand-primary mb-4'>Get Started In 3 Steps</h2>
                <p className='text-brand-secondary mb-10'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 max-w-300 mx-auto'>
                    <div className='p-5 rounded-2xl w-95 h-95 bg-base-100 border-[#F1F1F1] border-2 hover:shadow transition-all duration-300'>
                        <div className='bg-linear rounded-full w-10 h-10 text-base-100 flex items-center justify-center ml-auto mb-7'>
                            <p className='text-sm'>01</p>
                        </div>
                        <div className='w-25 h-25 rounded-full bg-[#9614fa23] mx-auto flex justify-center items-center mb-4'>
                            <img src={user} alt="" />
                        </div>
                        <h4 className='font-bold text-2xl text-brand-primary mb-4'>Create Account</h4>
                        <p className='text-brand-secondary'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='p-5 rounded-2xl w-95 h-95 bg-base-100 border-[#F1F1F1] border-2 hover:shadow transition-all duration-300'>
                        <div className='bg-linear rounded-full w-10 h-10 text-base-100 flex items-center justify-center ml-auto mb-7'>
                            <p className='text-sm'>02</p>
                        </div>
                        <div className='w-25 h-25 rounded-full bg-[#9614fa23] mx-auto flex justify-center items-center mb-4'>
                            <img src={products} alt="" />
                        </div>
                        <h4 className='font-bold text-2xl text-brand-primary mb-4'>Choose Products</h4>
                        <p className='text-brand-secondary'>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>
                    <div className='p-5 rounded-2xl w-95 h-95 bg-base-100 border-[#F1F1F1] border-2 hover:shadow transition-all duration-300'>
                        <div className='bg-linear rounded-full w-10 h-10 text-base-100 flex items-center justify-center ml-auto mb-7'>
                            <p className='text-sm'>03</p>
                        </div>
                        <div className='w-25 h-25 rounded-full bg-[#9614fa23] mx-auto flex justify-center items-center mb-4'>
                            <img src={rocket} alt="" />
                        </div>
                        <h4 className='font-bold text-2xl text-brand-primary mb-4'>Start Creating</h4>
                        <p className='text-brand-secondary'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;