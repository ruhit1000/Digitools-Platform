import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear'>
            <div className='w-[95%] lg:container mx-auto my-6 py-15 text-base-100 grid grid-cols-2 sm:grid-cols-3 gap-5 text-center'>
                <div>
                    <h1 className='font-extrabold text-6xl mb-3'>50K+</h1>
                    <p className='font-medium text-2xl opacity-80'>Active Users</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-6xl mb-3'>200+</h1>
                    <p className='font-medium text-2xl opacity-80'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-6xl mb-3'>4.9</h1>
                    <p className='font-medium text-2xl opacity-80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;