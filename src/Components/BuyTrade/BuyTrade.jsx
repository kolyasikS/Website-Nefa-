import React, { useRef, useState } from 'react';
import FilledBtn from '../../UI/Buttons/FilledBtn';
import BuyInpOpt from './BuyInpOpt';
import logo from '../../Assets/imgs/buy-and-trade.webp';
import Currencies from '../../Data/Currencies/Currencies';
import useObserver from '../../Сustom hooks/useObserver';
import { CSSTransition } from 'react-transition-group';
const BuyTrade = () => {
    const mainPart = useRef();
    const [isMainPartHidden, setIsMainPartHidden] = useState(true);
    useObserver(mainPart, setIsMainPartHidden, isMainPartHidden);
    console.log('image', isMainPartHidden);
    return (
        <section className='mt-20 w-full pb-2'>
            <div className='lg:flex justify-center space-x-4 max-w-screen-xl w-full mx-auto px-8
            block'>
                <CSSTransition in={!isMainPartHidden} timeout={1000} classNames='tradeMain'>
                    <div className={`lg:w-1/2 mx-auto opacity-0 -translate-x-[120px] px-4`}>
                        <div className='xl:pt-24 lg:px-2 space-y-6'>
                            <h1 className='leading-tight text-4xl font-bold pr-12'>Buy {'&'} trade on the
                                <br className='lg:hidden block'/>
                                original crypto exchange.
                            </h1>
                            <p ref={mainPart} className='text-base word-spacing-1'>Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency</p>
                            <div className='space-y-6 w-full lg:pr-10'>
                                <BuyInpOpt placeholder={'Amount'} defaultTxt={5000} 
                                defaultOption={Currencies[0]} options={Currencies}/>
                                <BuyInpOpt placeholder={'Get'} defaultTxt={0.10901} 
                                defaultOption={Currencies[1]} options={Currencies}/>
                                <FilledBtn className={'w-full py-4 font-semibold'}>Buy Now</FilledBtn>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <div className='lg:w-1/2'>
                    <div>
                        <CSSTransition in={!isMainPartHidden} timeout={1000} classNames='tradeImg'>
                            <img src={logo} alt="" className={`opacity-0 translate-x-[120px]`}/>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyTrade;