import React from 'react';

const CartProduct = ({ product, handleRemove }) => {
    return (
        <div className='p-5 bg-slate-100 rounded-3xl flex gap-4'>
            <div className='border bg-base-100 border-base-300 rounded-full flex justify-center items-center w-15 h-15'>
                <img src={product.icon} alt="" />
            </div>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h5 className='font-semibold text-xl text-brand-primary mb-1'>{product.name}</h5>
                    <p className='font-medium text-brand-secondary'>${product.price}</p>
                </div>
                <button onClick={() => handleRemove(product)} className='btn btn-ghost text-red-500'>Remove</button>
            </div>
        </div>
    );
};

export default CartProduct;