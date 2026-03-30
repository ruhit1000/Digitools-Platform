import React from 'react';
import tick from '../../assets/tick.png';
import PrimaryButton from '../Buttons/PrimaryButton';

const Pricing = () => {
    return (
        <div id='pricing-section' className='py-30 w-[95%] lg:container mx-auto'>
            <div className='text-center space-y-4 mb-10'>
                <h1 className='font-extrabold text-5xl text-brand-primary'>Simple, Transparent Pricing</h1>
                <p className='text-brand-secondary'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-7.5 max-w-300 mx-auto'>
                <div className='p-6 rounded-2xl flex flex-col justify-between text-brand-secondary w-95 h-full bg-[#F9FAFC] border-2 border-[#F2F2F2]'>
                    <div>
                        <h3 className='font-bold text-2xl text-brand-primary mb-1'>Starter</h3>
                        <p>Perfect for getting started</p>
                        <p className='my-6'><span className='font-bold text-brand-primary text-4xl'>$0</span>/month</p>
                        <ul style={{ listStyleImage: `url(${tick})` }} className='list-inside mb-6'>
                            <li> Access to 10 free tools</li>
                            <li>Basic templates</li>
                            <li>Community support</li>
                            <li>1 project per month</li>
                        </ul>
                    </div>
                    <PrimaryButton>Get Started Free</PrimaryButton>
                </div>
                <div className='p-6 rounded-2xl flex flex-col justify-between text-base-100 w-95 h-full bg-linear border-2 border-[#F2F2F2]'>
                    <div className='relative'>
                        <div className="badge badge-warning absolute -top-9 left-26">Most Popular</div>
                        <h3 className='font-bold text-2xl mb-1'>Pro</h3>
                        <p>Best for professionals</p>
                        <p className='my-6'><span className='font-bold text-4xl'>$29</span>/month</p>
                        <ul style={{ listStyleImage: `url(${tick})` }} className='list-inside mb-6'>
                            <li>Access to all premium tools</li>
                            <li>Unlimited templates</li>
                            <li>Priority support</li>
                            <li>Unlimited projects</li>
                            <li>Cloud sync</li>
                            <li>Advanced analytics</li>
                        </ul>
                    </div>
                    <button className='bg-base-100 w-full py-3 rounded-full font-bold text-[#9514fa] cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl'>Start Pro Trial</button>
                </div>
                <div className='p-6 rounded-2xl flex flex-col justify-between text-brand-secondary w-95 h-full bg-[#F9FAFC] border-2 border-[#F2F2F2]'>
                    <div>
                        <h3 className='font-bold text-2xl text-brand-primary mb-1'>Enterprise</h3>
                        <p>For teams and businesses</p>
                        <p className='my-6'><span className='font-bold text-brand-primary text-4xl'>$99</span>/month</p>
                        <ul style={{ listStyleImage: `url(${tick})` }} className='list-inside mb-6'>
                            <li>Everything in Pro</li>
                            <li>Team collaboration</li>
                            <li>Custom integrations</li>
                            <li>Dedicated support</li>
                            <li>SLA guarantee</li>
                            <li>Custom branding</li>
                        </ul>
                    </div>
                    <PrimaryButton>Contact Sales</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Pricing;