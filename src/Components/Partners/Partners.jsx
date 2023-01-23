import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PartnersData from '../../Data/Partners/Partners';
import useObserver from '../../Сustom hooks/useObserver';
const Partners = () => {
    const [isTitleHidden, setIsTitleHidden] = useState(true);
    const [isTextHidden, setIsTextHidden] = useState(true);
    const [isImgsHidden, setIsImgsHidden] = useState(true);
    const title = useRef();
    const text = useRef();
    const imgs = useRef();
    useObserver(title, setIsTitleHidden, isTitleHidden, {
        rootMargin: '-25% 0% -25% 0%'
    });
    useObserver(text, setIsTextHidden, isTextHidden, {
        rootMargin: '-30% 0% -30% 0%'
    });
    useObserver(imgs, setIsImgsHidden, isImgsHidden);
    return (
        <section className='my-20 relative flex justify-center mx-5 partner-bg rounded-2xl shadow'>
            <div className='flex flex-col items-center justify-center py-16 space-y-3
            '>
                <div className='space-y-4'>
                    <CSSTransition in={!isTitleHidden} timeout={500} classNames={'partnersText'}>
                        <h1 ref={title} className='text-2xl font-semibold text-center transf-perspective-init'>Trusted Partners Worldwide</h1>
                    </CSSTransition>
                    <CSSTransition in={!isTextHidden} timeout={500} classNames={'partnersText'}>
                        <p ref={text} className='transf-perspective-init'>We're partners with countless major organisations around the globe</p>
                    </CSSTransition>
                </div>
                <CSSTransition in={!isImgsHidden} timeout={500} classNames={'partnersImgs'}>
                    <div className='flex' ref={imgs}>
                        {PartnersData.companies.map((partner, ind) => (
                            <div key={ind}>
                                <img src={partner.src} alt="" />
                            </div>
                        ))}
                    </div>
                </CSSTransition>
            </div>
        </section>
    );
};

export default Partners;