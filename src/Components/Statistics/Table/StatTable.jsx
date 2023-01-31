import React, { useEffect, useState } from 'react';
import StatMember from './Member/StatMember';
import { CSSTransition } from 'react-transition-group';
const StatTable = ({logo, title, members, delay=4, isHidden}) => {
    const [isShowed, setIsShowed] = useState(false);
    useEffect(() => {
        if (isHidden) {
            setIsShowed(false);
        } else {
            setTimeout(() => {
                setIsShowed(true);
            }, delay);
        }
    }, [isHidden]);
    return (
        <CSSTransition in={isShowed} timeout={500} classNames='table' >
            <div className={`px-8 pl-6 xl:border-r border-gray-200 last:border-0 w-full 
            lg:w-1/3 overflow-hidden opacity-0 translate-y-[120px]`}>
                <div className='flex justify-between font-semibold lg:pl-2 pl-0'>
                    <div>
                        <img src={logo} alt=""/>
                        <h3>{title}</h3>
                    </div>
                    <button className='py-1 pl-2 pr-3 rounded-md hover:bg-sky-500/10 transition duration-400'>
                        <a href="#more" className='flex items-end text-sky-500 font-semibold text-sm'>More&nbsp;&nbsp;<span className='inline-block leading-tight'>{'>'}</span></a>
                    </button>
                </div>
                <div className='-mb-1 overflow-x-auto'>
                    <div className='pt-6 overflow-hidden min-w-full inline-block'>
                        <table className='table-auto min-w-full'>
                            <thead>
                                <tr className='text-left text-gray-500 text-sm'>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th className='pl-4 hidden sm:block'>Chart</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {members.map((member, id) =>
                                    <StatMember key={id} {...member}/>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default StatTable;