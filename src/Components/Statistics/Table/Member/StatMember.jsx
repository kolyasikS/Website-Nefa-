import React from 'react';

const StatMember = ({title, price, chart}) => {
    return (
        <tr className='border-gray-200 border-b h-fit'>
            <td className='py-4 whitespace-nowrap'>
                <div className='flex items-center space-x-2 mr-7'>
                    <img src={title.icon} alt=""/>
                    <p>{title.name}</p>
                </div>
            </td>
            <td className='whitespace-nowrap'>
                <div className='py-4 flex items-center'>
                    {price.symbol}
                    <p>${price.number}</p>
                </div>
            </td>
            <td className='whitespace-nowrap hidden sm:block'>
                <div className='w-28 h-12 mx-2'>
                    <img src={chart} alt="" className=''/>
                </div>
            </td>
        </tr>
    );
};

export default StatMember;