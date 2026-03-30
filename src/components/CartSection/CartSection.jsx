import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import CartProduct from './CartProduct';

const CartSection = ({ cart, total, handleRemove }) => {
    return (
        <div className='p-10 max-w-300 mx-auto border border-base-300 rounded-2xl'>
            <h4 className='font-bold text-2xl text-brand-primary'>Your Cart</h4>
            {
                cart.length ? (
                    <div className='my-10 space-y-4'>
                        {
                            cart.map((product) => <CartProduct key={product.id} handleRemove={handleRemove} product={product} />)
                        }
                    </div>
                ) : (
                    <div className='text-center text-brand-secondary my-15 space-y-5'>
                        <h3 className='font-bold text-2xl'>Cart is empty</h3>
                        <p className='font-semibold text-lg'>Add product to your cart</p>
                    </div>
                )
            }
            <div className='flex justify-between items-center py-3 px-5'>
                <p className='text-brand-secondary'>Total:</p>
                <h4 className='font-bold text-2xl text-brand-primary'>${total}</h4>
            </div>
            <PrimaryButton>Proceed to Checkout</PrimaryButton>
        </div>
    );
};

export default CartSection;