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
        <div className='flex justify-between mx-auto px-14 relative max-w-screen-xl w-full'>
            <div className='w-1/2 pr-6 pt-10'>
                <p className='text-sky-600 font-bold mb-4 
                    anim-opacity'>SIGN UP TODAY</p>
                <h1 className='break-words font-bold sm:text-5xl xl:text-6xl leading-tight
                    relative right-16 anim-translate-from-left'>
                    The World's <span className='text-header-gradient'>Fastest Growing</span> Crypto Web App</h1>
                <p className='paragraph my-6 opacity-0 relative bottom-20 anim-translate-from-top'>
                    Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
                </p>
                <FadeImg src={starImg} alt="" className='absolute left-[29rem] top-[6.7rem] w-8
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={blueCircleImg} alt="" className='absolute left-[46rem] top-[3rem] w-6
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={purpleCircleImg} alt="" className='absolute left-[0rem] bottom-[5rem] w-6
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <FadeImg src={orangeCircleImg} alt="" className='absolute right-[7rem] bottom-[14rem] w-6
                opacity-0 transition duration-700 translate-y-32' delay={300}/>
                <div className='flex space-x-4'>
                    <FilledBtn refBtn={btns} className={`py-4 px-8 xl:px-8 opacity-0 relative top-20 ${hiddenBtns ? '' : 'anim-translate-from-bottom'}`}>Get Started</FilledBtn>
                    <TranspBtn className={`py-4 px-8 xl:px-6 opacity-0 relative top-20 
                    ${hiddenBtns ? '' : 'anim-translate-from-bottom'}`}>Download App
                        <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
                    </TranspBtn>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={herologo} alt="" />
            </div>
        </div>
    );
};

export default Main;