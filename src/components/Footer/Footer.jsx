import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-base-100 pt-30 pb-10">
            <div className='footer sm:footer-horizontal w-[95%] lg:container mx-auto'>
                <aside>
                    <h1 className='text-4xl font-bold'>DigiTools</h1>
                    <p className='opacity-80'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </aside>
                <nav>
                    <h6 className="footer-title font-medium text-xl">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Intergations</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-medium text-xl">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-medium text-xl">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-medium text-xl">Social Links</h6>
                    <div className='flex items-center gap-3'>
                        <a className='w-10 h-10 bg-base-100 rounded-full p-2.5' href="">
                            <RiInstagramFill size='1.2rem' color='#101727' />
                        </a>
                        <a className='w-10 h-10 bg-base-100 rounded-full p-2.5' href="">
                            <FaFacebookSquare size='1.2rem' color='#101727' />
                        </a>
                        <a className='w-10 h-10 bg-base-100 rounded-full p-2.5' href="">
                            <BsTwitterX size='1.2rem' color='#101727' />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="footer sm:footer-horizontal items-center w-[95%] lg:container mx-auto mt-20 pt-7 border-t opacity-50">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;