import React from 'react';

const Security = () => {
    return (
        <section className='w-full'>
            <div className='max-w-screen-xl px-5 pt-16 grid grid-cols-12 gap-x-6 mx-auto'>
                <div className='col-span-6'>
                    <img src={require('../../Assets/imgs/industry-leading-security.webp')} alt=""/>
                </div>
                <div className='space-y-6 pt-16 px-8 col-span-5'>
                    <div className='space-y-6'>
                        <h1 className='font-semibold text-4xl'>Industry-leading security from day one</h1>
                        <ul className='pr-3 space-y-4'>
                            <li className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]">
                                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <p>Safety, security and compliance</p>
                                </div>
                                <p className='text-sm text-gray-700'>NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.</p>
                            </li>
                            <li className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]"><svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg></span>
                                    <p>Hardware security keys</p>
                                </div>
                                <p className='text-sm text-gray-700'>With NEFA you can secure your account with a hardware security key via WebAuthn.</p>
                            </li>
                            <li className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <span aria-hidden="true" role="img" class="material-design-icon check-circle-icon text-[#0c66ee]"><svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg></span>
                                    <p>SOC Certifications</p>
                                </div>
                                <p className='text-sm text-gray-700'>NEFA is&nbsp; 
                                    <span className='underline'>SOC 1 Type 2</span> 
                                    &nbsp;and&nbsp;
                                    <span className='underline'>SOC 2 Type 2</span>  
                                    &nbsp;compliant. We are the world’s first cryptocurrency exchange and custodian 
                                    to complete these exams.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;