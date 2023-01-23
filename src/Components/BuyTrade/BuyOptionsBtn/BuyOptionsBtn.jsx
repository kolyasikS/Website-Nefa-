import React from 'react';

const BuyOptionsBtn = ({currency, fadeUp}) => {

    return (
        <div className='flex justify-center items-center text-sm rounded-xl border border-sky-600'>
            <button className='flex items-center py-[22px] text-sm space-x-1 justify-center w-full px-10'
            onClick={() => fadeUp(false)}>
                <img src={currency.img} alt="" className='w-6 mr-1'/>
                {currency.title}
                <span>
                    <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
                </span>
            </button>
        </div>
    );
};

export default BuyOptionsBtn;