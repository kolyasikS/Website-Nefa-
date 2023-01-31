import React, { useRef, useState } from 'react';
import FilledBtn from '../../../UI/Buttons/FilledBtn';
import TranspBtn from '../../../UI/Buttons/TranspBtn';
import starImg from '../../../Assets/imgs/pattern/star.png';
import blueCircleImg from '../../../Assets/imgs/pattern/ellipse-2.png';
import purpleCircleImg from '../../../Assets/imgs/pattern/ellipse-1.png';
import orangeCircleImg from '../../../Assets/imgs/pattern/ellipse-3.png';
import herologo from '../../../Assets/imgs/hero-image.webp';
import FadeImg from '../../FadingImgs/FadeImg';
import useObserver from '../../../Сustom hooks/useObserver';
const Main = () => {
    const btns = useRef();
    const [hiddenBtns, setHiddenBtns] = useState(true);
    useObserver(btns, setHiddenBtns, hiddenBtns);
    return (
        <div className='lg:flex justify-between mx-auto sm:px-14 px-10 relative max-w-screen-xl w-full'>
            <div className='lg:w-1/2 lg:pr-6 sm:pr-10 pt-10'>
                <p className='text-sky-600 font-bold mb-4 
                    anim-opacity text-center sm:text-left'>SIGN UP TODAY</p>
                <h1 className='break-words font-bold sm:text-5xl xl:text-6xl leading-tight
                    relative right-16 anim-translate-from-left lg:pr-14
                    text-4xl text-center sm:text-left sm:px-0 px-10'>
                    The World's <span className='text-header-gradient'>Fastest Growing</span> Crypto Web App</h1>
                <p className='hidden sm:block paragraph my-6 opacity-0 relative bottom-20 anim-translate-from-top'>
                    Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
                </p>
                <FadeImg src={starImg} alt="" className='hidden md:absolute 
                lg:left-[29rem] lg:top-[6.7rem] 
                left-[54rem] top-[6rem] 
                w-8 opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={blueCircleImg} alt="" className='hidden md:absolute 
                lg:left-[46rem] lg:top-[3rem] 
                left-[36rem] top-[2rem]
                w-6 opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={purpleCircleImg} alt="" className='hidden md:absolute left-[0rem] bottom-[5rem] w-6
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={orangeCircleImg} alt="" className='hidden md:absolute right-[7rem] bottom-[14rem] w-6
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <div className='block sm:flex sm:space-x-4'>
                    <FilledBtn refBtn={btns} className={`w-full sm:max-w-fit py-4 px-8 xl:px-8 opacity-0 relative top-20 ${hiddenBtns ? '' : 'anim-translate-from-bottom'} 
                    sm:mt-0 mt-3`}>Get Started</FilledBtn>
                    <TranspBtn className={`w-full sm:max-w-fit text-center py-4 px-6 opacity-0 relative top-20 
                    ${hiddenBtns ? '' : 'anim-translate-from-bottom'} 
                    sm:mt-0 mt-3`}>Download App
                        <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
                    </TranspBtn>
                </div>
            </div>
            <div className='lg:w-1/2 hidden sm:block'>
                <img src={herologo} alt="" />
            </div>
        </div>
    );
};

export default Main;