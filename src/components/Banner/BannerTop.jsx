import React from 'react';
import bannerImg from '../../assets/banner.png'
import PrimaryButton from '../Buttons/PrimaryButton';
import OutlineButton from '../Buttons/OutlineButton';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='py-15 flex flex-col lg:flex-row gap-15 items-center w-[95%] lg:container mx-auto'>
            {/* Banner Left */}
            <div>
                <div className='bg-[#E1E7FF] w-73.5 py-2 px-4 rounded-4xl flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-full bg-[#9614fa26] flex items-center justify-center'>
                        <div className='w-3 h-3 rounded-full bg-[#9614fa61] flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-[#9614fa]'>

                            </div>
                        </div>
                    </div>
                    <p className='font-medium text-[#9514fa]'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='font-extrabold mt-4 text-4xl sm:text-5xl lg:text-7xl text-brand-primary'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-lg/normal text-brand-secondary mt-4'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. <br /> Explore Products</p>
                <div className='mt-8 flex gap-4 items-center'>
                    <div className='w-41.25'>
                        <PrimaryButton>Explore Products</PrimaryButton>
                    </div>
                    <OutlineButton><IoPlayOutline size='1.2rem' color='#4f39f6' /> Watch Demo</OutlineButton>
                </div>
            </div>
            {/* Banner Right */}
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;