import React from 'react';
import TranspBtn from '../../UI/Buttons/TranspBtn';

const Tools = () => {
    return (
        <section className='tools-bg flex justify-center items-center my-36 mx-4 rounded-3xl shadow max-w-full
        '>
            <div className='grid grid-cols-12 gap-x-6 mx-auto max-w-screen-xl pt-20 pb-16 sm:px-2'>
                <div className='col-span-12 lg:col-span-6 px-6'>
                    <h1 className='text-4xl font-semibold'>Advanced Trading <span className='text-header-gradient'>Tools</span></h1>
                    <div className='space-y-7 mt-7'>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Professional Access, Non-stop Availability</h2>
                            <p className='xl:text-base text-sm tracking-wide'>We provide premium access to crypto trading for 
                                both individuals and institutions through high 
                                liquidity, reliable order execution and constant uptime.</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>A Range of Powerful Apis</h2>
                            <p className='xl:text-base text-sm tracking-wide'>Set up your own trading interface or deploy your algorithmic 
                                strategy with our high-performance FIX and HTTP APIs. 
                                Connect to our WebSocket for real-time data streaming.</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Customer Support</h2>
                            <p className='xl:text-base text-sm tracking-wide'>Premium 24/7 support available to all customers 
                                worldwide by phone or email. Dedicated account 
                                managers for partners.</p>
                        </div>
                    </div>
                    <div className='mt-7 sm:flex block space-y-2 sm:space-y-0'>
                        <TranspBtn className={`px-11 py-5 sm:max-w-fit w-full`}>Get Started</TranspBtn>
                        <TranspBtn className={`py-5 px-9 border-none underline sm:max-w-fit w-full`}>Learn More</TranspBtn>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 w-full sm:mt-20 xl:mt-0'>
                    <img src={require('../../Assets/imgs/advanced-trading-tools.webp')} alt="" className='w-full'/>
                </div>
            </div>
        </section>
    );
};

export default Tools;