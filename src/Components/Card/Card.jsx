import React from 'react';
import TranspBtn from '../../UI/Buttons/TranspBtn';

const Card = () => {
    return (
        <section className=''>
            <div className='w-full lg:flex block px-5 justify-center pt-16'>
                <div className='lg:w-1/2 w-full'>
                    <img src={require('../../Assets/imgs/nefa-cc.webp')} alt="" className='width-[655px]'/>
                </div>
                <div className='lg:w-1/3 flex flex-col justify-center space-y-6 pt-16 lg:ml-20 px-4 sm:px-8 lg:px-0'>
                    <h1 className='font-semibold text-4xl pr-2'>Introducing the <span className='text-header-gradient'>NEFA</span> Credit Card</h1>
                    <p>Subject to cardholder and rewards terms which will be available at application.</p>
                    <ul className='space-y-2'>
                        <li>
                            <div className='flex items-center space-x-2'>
                                <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]"><svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg></span>
                                <p>Up to 3% back on purchases</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center space-x-2'>
                                <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]"><svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg></span>
                                <p>Earn rewards in bitcoin or any crypto on NEFA</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center space-x-2'>
                                <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]"><svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg></span>
                                <p>No annual fee</p>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <TranspBtn className={'w-full sm:max-w-fit py-4 px-14 text-base text-center'}>Join the waitlist</TranspBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;