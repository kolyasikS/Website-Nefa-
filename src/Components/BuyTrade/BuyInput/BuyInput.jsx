import React from 'react';

const BuyInput = ({placeholder, defaultTxt = ''}) => {
    return (
        <div className='px-5 py-3 text-sky-600 font-semibold text-sm rounded-xl border border-sky-600
            xl:w-[335px] flex items-center'>
            <span className='py-3 pr-5 border-r border-sky-600'>{placeholder}</span>
            <input type="text" defaultValue={defaultTxt}
            className='py-2 pr-3 text-gray-700 text-lg w-full text-right focus:outline-none'/>
        </div>
    );
};

export default BuyInput;