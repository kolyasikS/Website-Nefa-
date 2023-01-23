import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
const NavItem = ({children, isBurgerMenu}) => {
    const [isShowed, setIsShowed] = useState(false);
    return (
        <>
            <li className={'list-none w-full ml-1 text-gray-500 hover:text-gray-900 relative'} 
                onClick={() => setIsShowed(!isShowed)}
            >
                <a href="#a" className={`text-sm h-fit py-2 md:px-4 flex items-center poppins`}>
                    {children}
                </a>
                {isBurgerMenu
                ? <CSSTransition in={isShowed} timeout={300} classNames='menu' unmountOnExit>
                    <div className='absolute text-sm bg-white text-gray-700 py-1 shadow-md rounded-md
                    z-10 '>
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