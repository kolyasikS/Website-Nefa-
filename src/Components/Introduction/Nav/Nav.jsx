import React from 'react';
import NavItem from './NavItem/NavItem';
import TranspBtn from '../../../UI/Buttons/TranspBtn.jsx';
import FilledBtn from '../../../UI/Buttons/FilledBtn.jsx';
import logo from '../../../Assets/imgs/nefa-logo.svg';
const Nav = () => {
    return (
        <div className='flex items-center justify-between px-8 py-4 mx-auto max-w-screen-xl w-full'>
            <div className='flex items-center max-w-screen-xl'>
                <div className='py-6'>
                    <img src={logo} alt="" className='w-24 xl:w-28'/>
                </div>
                <nav className='flex items-center h-fit xl:ml-8 md:ml-4 space-x-1'>
                    <NavItem>Cryptocurrency</NavItem>
                    <NavItem>Exchanges</NavItem>
                    <NavItem>Watchlist</NavItem>
                    <NavItem>NFT</NavItem>
                    <NavItem>Portfolio</NavItem>
                    <NavItem isBurgerMenu={true}>Products<span style={{display: 'inline-block'}}>
                            <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
                        </span>

                    </NavItem>
                </nav>
            </div>
            <div className='flex space-x-3'>
                <TranspBtn className={'py-3 px-8 xl:px-10'}>Login</TranspBtn>
                <FilledBtn className={'py-3 px-8 xl:px-10'}>Sign Up</FilledBtn>
            </div>
        </div>
    );
};

export default Nav;