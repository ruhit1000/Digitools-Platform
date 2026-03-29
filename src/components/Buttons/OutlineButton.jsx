import React from 'react';


const OutlineButton = ({ children }) => {
    return (
        <button className="bg-linear p-0.5 rounded-3xl cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
            <div className="bg-white flex gap-1 items-center justify-center py-2.5 px-3.5 rounded-[22px] h-full w-full">
                <span className="font-semibold bg-linear bg-clip-text text-transparent flex items-center gap-1">
                    {children}
                </span>
            </div>
        </button>
    );
};

export default OutlineButton;