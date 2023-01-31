import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
const NavItem = ({children, isBurgerMenu}) => {
    const [isShowed, setIsShowed] = useState(false);
    return (
        <>
            <li className={'list-none w-full lg:ml-1 text-gray-500 hover:text-gray-900 relative'} 
                onClick={() => setIsShowed(!isShowed)}
            >
                <a href="#a" className={`text-sm h-fit lg:py-2 pt-3 md:px-4 flex items-center poppins`}>
                    {children}
                    {isBurgerMenu
                    ? isShowed 
                    ? <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg">
                        <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                        </path>
                    </svg>
                    : <span style={{display: 'inline-block'}}>
                            <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
                    </span>
                    : null
                    }
                </a>
                {isBurgerMenu
                ? <CSSTransition in={isShowed} timeout={300} classNames='menu' unmountOnExit>
                    <div className='lg:absolute text-sm lg:bg-white text-gray-700 py-1 lg:shadow-md rounded-md
                    z-10 lg:pl-0 pl-2'>
                        <nav className=''>
                            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Exchange</li>
                            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Wallet</li>
                            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Explorer</li>
                            <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>Charts</li>
                        </nav>
                    </div>    
                </CSSTransition>
                : null
                }   
                
            </li>
        </>
    );
};

export default NavItem;