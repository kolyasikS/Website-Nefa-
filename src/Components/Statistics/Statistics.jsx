import React, { useRef, useState } from 'react';
import StatTable from './Table/StatTable';
import TradeMembers from '../../Data/Statistics/TradeMembers';
import useObserver from '../../Сustom hooks/useObserver';
import useShowing from '../../Сustom hooks/useShowing';
const Statistics = () => {
    const [isHidden, setIsHidden] = useState(true);
    const ObservedDIV = useRef();
    useObserver(ObservedDIV, setIsHidden, isHidden, {
        rootMargin: '-25% 0% -25% 0%'
    });
    return (
        <section className='mb-20 flex items-center mx-auto max-w-screen-xl py-8 rounded-[2.25rem]
        sm:rounded-xl bg-white shadow-lg sm:shadow-md mt-12'>
            <div ref={ObservedDIV} className='w-full flex items-center justify-center'>
                <StatTable isHidden={isHidden} title={'🔥 Trending'} members={TradeMembers.slice(0, 4)}/>
                <StatTable isHidden={isHidden} delay={150} title={'🚀 Top Gainers'} members={TradeMembers.slice(4, 8)}/>
                <StatTable isHidden={isHidden} delay={300} title={'💎 Recently Added'} members={TradeMembers.slice(8, 12)}/>
            </div>
        </section>
    );
};

export default Statistics;