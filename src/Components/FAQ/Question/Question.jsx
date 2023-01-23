import React, { useState } from 'react';
import {CSSTransition}  from 'react-transition-group';
const Question = ({title, text}) => {
    
    const [textIsShowed, setTextIsShowed] = useState(false);
    return (
        <li className='border-b-2 border-gray-200 overflow-hidden pb-0'>
            <button className='cursor-pointer pt-0 pb-4 w-full' onClick={() => setTextIsShowed(!textIsShowed)}>
                <div className='flex justify-between w-full'>
                    <p className='font-semibold'>{title}</p>
                    {textIsShowed 
                    ? <span aria-hidden="true" role="img" class="material-design-icon chevron-up-icon">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"> 
                            </path>
                        </svg>
                    </span>
                    : <span aria-hidden="true" role="img" class="material-design-icon chevron-down-icon">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                            </path>
                        </svg>
                    </span> 
                    } 
                </div>
            </button>
            <CSSTransition in={textIsShowed} timeout={700} classNames='text' unmountOnExit>
                <div className={`transition-all duration-700`}>
                    <div className={`py-2`}>
                        <p className='text-sm text-gray-600 leading-relaxed tracking-wide'>{text}</p>
                    </div>
                </div>
            </CSSTransition>
        </li>
    );
};

export default Question;