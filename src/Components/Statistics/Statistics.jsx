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
        <section className='mb-20 flex items-center sm:mx-auto max-w-screen-xl sm:py-8 rounded-[2.25rem]
        sm:rounded-xl bg-white shadow-lg sm:shadow-md mt-12 pb-16 py-8 mx-2'>
            <div ref={ObservedDIV} className='w-full lg:flex block items-center justify-center lg:space-y-0 space-y-7'>
                <StatTable isHidden={isHidden} title={'🔥 Trending'} members={TradeMembers.slice(0, 4)}/>
                <StatTable isHidden={isHidden} delay={150} title={'🚀 Top Gainers'} members={TradeMembers.slice(4, 8)}/>
                <StatTable isHidden={isHidden} delay={300} title={'💎 Recently Added'} members={TradeMembers.slice(8, 12)}/>
            </div>
        </section>
    );
};

export default Statistics;