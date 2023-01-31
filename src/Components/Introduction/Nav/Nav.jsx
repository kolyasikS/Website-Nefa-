import React, { useEffect, useState } from 'react';
import NavItem from './NavItem/NavItem';
import TranspBtn from '../../../UI/Buttons/TranspBtn.jsx';
import FilledBtn from '../../../UI/Buttons/FilledBtn.jsx';
import logo from '../../../Assets/imgs/nefa-logo.svg';
const Nav = () => {
    const [burgerMenuMODE, setBurgerMenuMODE] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const resizeScreen = () => {
        if (window.innerWidth < 1024) {
            setBurgerMenuMODE(true);
        } else {
            setBurgerMenuMODE(false);
        }
    };

    useEffect(() => {
        resizeScreen();
        window.addEventListener('resize', resizeScreen);
    }, []);

    return (
        <div className={`${burgerMenuMODE ? 'block' : 'flex'} items-center justify-between px-8 py-4 mx-auto max-w-screen-xl w-full`}>
            <div className={`${burgerMenuMODE ? 'block' : 'flex'} items-center max-w-screen-xl ${burgerMenuMODE ? 'w-full' : ''}`}>
                <div className='flex justify-between w-full'>
                    <div className='py-6 w-full'>
                        <img src={logo} alt="" className='w-24 xl:w-26'/>
                    </div>
                    <button className='lg:hidden' onClick={() => setHiddenMenu(prev => !prev)}>
                        <span aria-hidden="true" role="img" class="material-design-icon segment-icon">
                            {hiddenMenu 
                            ? <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                <path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9">
                                </path>
                            </svg>
                            : <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                                </path>
                            </svg>}
                        </span>
                    </button>
                </div>
                <nav className={`${burgerMenuMODE ? hiddenMenu ? 'hidden' : 'block' : 'flex'} items-center h-fit xl:ml-8 md:ml-2 md:space-x-0 space-x-1
                pb-6 lg:pb-0`}>
                    <NavItem>Cryptocurrency</NavItem>
                    <NavItem>Exchanges</NavItem>
                    <NavItem>Watchlist</NavItem>
                    <NavItem>NFT</NavItem>
                    <NavItem>Portfolio</NavItem>
                    <NavItem isBurgerMenu={true}>Products</NavItem>
                </nav>
            </div>
            <div className={`${burgerMenuMODE ? hiddenMenu ? 'hidden' : 'flex' : 'flex'} space-x-3`}>
                <TranspBtn className={'py-3 px-8 xl:px-10'}>Login</TranspBtn>
                <FilledBtn className={'py-3 px-8 xl:px-10'}>Sign Up</FilledBtn>
            </div>
        </div>
    );
};

export default Nav;