import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full px-8'>
            <div className='max-w-screen-xl mx-auto xl:pl-0 md:pl-10'>
                <div className='grid xl:grid-cols-7 xl:gap-6 xl:grid-rows-none
                md:grid-rows-2
                text-[#666666] text-sm border-[#DDDDDD] border-y'>
                    <div className='grid xl:col-span-3 xl:grid-cols-3 xl:left-6
                        md:grid-cols-2 md:row-span-1 
                        w-full relative'>
                        <div className='xl:flex sm:hidden sm:py-10 justify-end items-start pr-16 sm:mt-0 mt-4'>
                            <img src={require('../../Assets/imgs/logo/nefa.svg').default} alt="" className='sm:w-20 w-24 sm:-mt-2'/>
                        </div>
                        <div className='flex xl:justify-center justify-start md:py-10 py-6 sm:py-12 xl:pr-24 xl:pl-0 md:px-6
                        md:w-full sm:w-1/2'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit xl:pl-0 sm:pl-12'>
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
                        <div className='flex xl:justify-center md:py-0 py-6 sm:py-12 justify-start border-[#DDDDDD] md:border-r pr-10
                        md:w-full sm:w-1/2 border-t'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit xl:pl-0 sm:pl-12'>
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
                    <div className='grid xl:col-span-4 xl:grid-cols-2 xl:pl-12
                    md:grid-cols-2 md:row-span-1 md:w-full sm:w-1/2
                    relative md:border-t border-[#DDDDDD]'>
                        <div className='flex xl:justify-center justify-start col-span-1 xl:pl-0 md:px-6
                        sm:border-b md:border-b-0 py-6 sm:py-12 md:py-0 sm:border-none border-t border-[#DDDDDD]'>
                            <nav className='list-none space-y-5 flex flex-col justify-center w-fit xl:pl-0 sm:pl-12
                            '>
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
                        <div className='flex flex-col col-span-1 xl:pl-10 space-y-4
                            md:pt-10 py-6 sm:py-12 md:px-6 sm:px-10'>
                            <h4 className='font-semibold'>Newsletter</h4>
                            <p>Never miss anything crypto when <br className='sm:hidden'/> you're on the go</p>
                            <div className='flex space-x-2'>
                                <input type="text" placeholder='Enter your email' 
                                className='border border-[#AAAAAA] rounded-md py-3 px-2 xl:w-52 w-full'/>
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
                <div className='py-8 sm:py-5 text-center text-sm text-[#666666]'>
                    <p>© Copyright 2022 NEFA LLC. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;