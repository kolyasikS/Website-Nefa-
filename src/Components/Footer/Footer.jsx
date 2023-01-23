import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-7 gap-6 text-[#666666] text-sm 
                border-[#DDDDDD] border-y'>
                    <div className='col-span-3 grid grid-cols-3 relative left-6'>
                        <div className='py-10 flex justify-end items-start pr-16'>
                            <img src={require('../../Assets/imgs/logo/nefa.svg').default} alt="" className='w-20 -mt-2'/>
                        </div>
                        <div className='flex justify-center py-10 pr-24'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit'>
                                <li>
                                    <a href="#1">Cryptocurrency</a>
                                </li>
                                <li>
                                    <a href="1">Exchanges</a>
                                </li>
                                <li>
                                    <a href="1">Watchlist</a>
                                </li>
                                <li>
                                    <a href="1">Portfolio</a>
                                </li>
                                <li>
                                    <a href="1">NFT</a>
                                </li>
                            </nav>
                        </div>
                        <div className='flex justify-center border-[#DDDDDD] border-r pr-10'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit'>
                                <li>
                                    <a href="1">Products</a>
                                </li>
                                <li>
                                    <a href="1">About Us</a>
                                </li>
                                <li>
                                    <a href="1">Careers</a>
                                </li>
                                <li>
                                    <a href="1">Blog</a>
                                </li>
                                <li>
                                    <a href="1">Security</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className='col-span-4 grid grid-cols-2 relative pl-12'>
                        <div className='flex justify-center col-span-1'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit'>
                                <li className='w-fit'>
                                    <a href="1">Help Center</a>
                                </li>
                                <li>
                                    <a href="1">Contact Us</a>
                                </li>
                                <li>
                                    <a href="1">System Status</a>
                                </li>
                                <li>
                                    <a href="1">Area of Avaibility</a>
                                </li>
                                <li>
                                    <a href="1">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className='flex flex-col col-span-1 pl-10 pr-6 space-y-2 pt-10'>
                            <h4 className='font-semibold'>Newsletter</h4>
                            <p>Never miss anything crypto when you're on the go</p>
                            <div className='flex space-x-2'>
                                <input type="text" placeholder='Enter your email' 
                                className='border border-[#AAAAAA] rounded-md py-3 px-2 w-52'/>
                                <button className='bg-blue-gradient text-white py-3 px-4 rounded-md'>
                                    <span aria-hidden="true" role="img" class="material-design-icon arrow-right-icon">
                                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 text-center text-sm text-[#666666]'>
                    <p>© Copyright 2022 NEFA LLC. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;