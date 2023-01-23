import React from 'react';

const GetStarted = () => {
    return (
        <section className='w-full my-24'>
            <div className='tools-bg shadow mx-10 py-16 rounded-2xl'>
                <h1 className='text-center text-4xl font-bold'>Get started in just a few minutes</h1>
                <div className='flex relative pt-10'>
                    <div className='w-1/3 mx-auto px-12'>
                        <img src={require('../../Assets/imgs/getting-started/sign-up.png')} alt="" className='mx-auto'/>
                        <h2 className='font-bold text-lg text-center'>Sign Up</h2>
                        <p className='text-sm text-center'>Sign up for your free NEFA Wallet on web, 
                            iOS or Android and follow our easy process 
                            to set up your profile
                        </p>
                    </div>
                    <div className='w-1/3 mx-auto px-14'>
                        <img src={require('../../Assets/imgs/getting-started/fund.png')} alt="" className='mx-auto'/>
                        <h2 className='font-bold text-lg text-center'>Fund</h2>
                        <p className='text-sm text-center'>Choose your preferred payment method such as 
                            bank transfer or credit card to top up your 
                            NEFA Wallet
                        </p>
                    </div>
                    <div className='w-1/3 mx-auto px-14'>
                        <img src={require('../../Assets/imgs/getting-started/buy-crypto.png')} alt="" className='mx-auto'/>
                        <h2 className='font-bold text-lg text-center'>Buy Crypto</h2>
                        <p className='text-sm text-center'>Buy Bitcoin or Ethereum, then securely store 
                            it in your Wallet or send it on easily to 
                            your friends anywhere
                        </p>
                    </div>
                    <img src={require('../../Assets/imgs/getting-started/arrow.png')} alt="" 
                        className='absolute left-[25rem] top-[10.5rem]' width={160}/>
                    <img src={require('../../Assets/imgs/getting-started/arrow.png')} alt="" 
                        className='absolute top-[10.5rem] right-[24rem]'/>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;