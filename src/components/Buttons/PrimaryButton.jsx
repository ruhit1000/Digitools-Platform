import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button 
        className='font-semibold text-base-100 bg-linear py-3 px-4 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full'
        >
            {children}
        </button>
    );
};

export default PrimaryButton;