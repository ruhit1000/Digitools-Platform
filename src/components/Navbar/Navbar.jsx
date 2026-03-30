import React from 'react';
import { IoIosLogIn } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import PrimaryButton from '../Buttons/PrimaryButton';

const Navbar = ({ cart }) => {
    return (
        <header className="sticky top-0 z-50 navbar bg-base-100 shadow-sm font-semibold text-brand-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                        <li className='sm:hidden'><a>Login <IoIosLogIn size='1.3rem' /></a></li>
                    </ul>
                </div>
                <a className="text-3xl lg:ml-5 bg-linear bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 opacity-80">
                    <li><a href='#products-section'>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a href='#pricing-section'>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <div className='relative'>
                    {
                        cart.length > 0 && <div className='absolute right-4 bg-linear py-0.5 px-1 rounded-full z-5'>
                            <p className='text-xs text-base-100'>{cart.length}</p>
                        </div>
                    }
                    <button className='btn btn-ghost z-10'><IoCartOutline size='1.5rem' /></button>
                </div>
                <button className='btn btn-ghost hidden sm:flex'>Login <IoIosLogIn size='1.5rem' /></button>
                <div className='w-31'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </header>
    );
};

export default Navbar;