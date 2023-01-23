import React from 'react';

const Option = ({title, img}) => {
    return (
        <li className='flex justify-center items-center text-sm 
        border-b border-gray-400 py-3 last:border-b-0'>
            <div className='flex items-center text-sm space-x-1 justify-start pl-5 pr-[75px] 
            '>
                <img src={img} alt="" className='w-6 mr-2'/>
                <p>{title}</p>
            </div>
        </li>
    );
};

export default Option;