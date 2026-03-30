import React from 'react';
import tick from '../../assets/tick.png'
import PrimaryButton from '../Buttons/PrimaryButton';

const ProductCard = ({ product }) => {
    return (
        <div className='border-2 max-w-95 border-base-300 p-6 rounded-2xl flex flex-col justify-between'>
            <div className='relative'>
                <div className={`badge absolute -right-2 -top-3
                ${product.tagType === 'best-seller' && 'badge-warning'}
                ${product.tagType === 'popular' && 'badge-primary'}
                ${product.tagType === 'new' && 'badge-success'}
                    `}>
                        {product.tag}
                    </div>
                <div className='w-15 h-15 p-3 flex items-center justify-center border border-base-300 rounded-full mb-4'>
                    <img src={product.icon} alt="" />
                </div>
                <h4 className='font-bold text-2xl text-brand-primary mb-4'>{product.name}</h4>
                <p className='text-brand-secondary'>{product.description}</p>
                <p className='text-brand-secondary my-4'><span className='font-bold text-2xl text-brand-primary'>${product.price}</span>/{product.period}</p>
                <ul style={{ listStyleImage: `url(${tick})` }} className='text-brand-secondary list-inside mb-4'>
                    <li>Unlimited AI generations</li>
                    <li>50+ writing templates</li>
                    <li>Grammar checker</li>
                </ul>
            </div>
            <PrimaryButton>Buy Now</PrimaryButton>
        </div>
    );
};

export default ProductCard;