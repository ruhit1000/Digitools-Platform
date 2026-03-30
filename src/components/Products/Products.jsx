import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ productsPromise }) => {
    const productsRes = use(productsPromise);
    const products = productsRes.data;

    const [selectedTab, setSelectedTab] = useState('products')

    const handleTabSwitch = (tabName) => {
        setSelectedTab(tabName)
    }


    return (
        <div className='py-30 w-[95%] lg:container mx-auto'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold text-brand-primary mb-4'>Premium Digital Tools</h1>
                <p className='text-brand-secondary'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className='relative flex mt-4 bg-slate-200 p-1 w-64 mx-auto rounded-3xl'>

                    <div
                        className={`absolute top-1 bottom-1 w-[calc(50%-6px)] bg-linear rounded-3xl transition-transform duration-300 ease-out
        ${selectedTab === 'products' ? 'translate-x-0' : 'translate-x-full ml-2'}`}
                    ></div>

                    <button
                        onClick={() => handleTabSwitch('products')}
                        className={`relative z-10 flex-1 py-3 text-center rounded-3xl cursor-pointer transition-colors duration-300 font-semibold
            ${selectedTab === 'products' ? 'text-base-100' : 'bg-linear bg-clip-text text-transparent hover:scale-105'}`}
                    >
                        Products
                    </button>

                    <button
                        onClick={() => handleTabSwitch('cart')}
                        className={`relative z-10 flex-1 py-3 text-center rounded-3xl cursor-pointer transition-colors duration-300 font-semibold
            ${selectedTab === 'cart' ? 'text-base-100' : 'bg-linear bg-clip-text text-transparent hover:scale-105'}`}
                    >
                        Cart(2)
                    </button>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5 max-w-300 mx-auto place-items-center'>
                {
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;