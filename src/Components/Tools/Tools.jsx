import React from 'react';
import TranspBtn from '../../UI/Buttons/TranspBtn';

const Tools = () => {
    return (
        <section className='flex justify-center items-center my-36 px-4'>
            <div className='tools-bg flex justify-center items-center pt-20 pb-16 space-x-5 rounded-3xl shadow'>
                <div className='w-[45%] pl-28'>
                    <h1 className='text-4xl font-semibold'>Advanced Trading <span className='text-header-gradient'>Tools</span></h1>
                    <div className='space-y-7 mt-7'>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Professional Access, Non-stop Availability</h2>
                            <p>We provide premium access to crypto trading for 
                                both individuals and institutions through high 
                                liquidity, reliable order execution and constant uptime.</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>A Range of Powerful Apis</h2>
                            <p>Set up your own trading interface or deploy your algorithmic 
                                strategy with our high-performance FIX and HTTP APIs. 
                                Connect to our WebSocket for real-time data streaming.</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Customer Support</h2>
                            <p>Premium 24/7 support available to all customers 
                                worldwide by phone or email. Dedicated account 
                                managers for partners.</p>
                        </div>
                    </div>
                    <div className='mt-7 flex'>
                        <TranspBtn className={`px-11 py-5`}>Get Started</TranspBtn>
                        <TranspBtn className={`py-5 px-9 border-none underline`}>Learn More</TranspBtn>
                    </div>
                </div>
                <div className='w-1/2 flex pl-8'>
                    <img src={require('../../Assets/imgs/advanced-trading-tools.webp')} alt="" className='w-[86%]'/>
                </div>
            </div>
        </section>
    );
};

export default Tools;