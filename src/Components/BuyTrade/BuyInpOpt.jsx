import React, { useState } from 'react';
import BuyInput from './BuyInput/BuyInput';
import BuyOptions from './BuyOptionsBtn/BuyOptions';
import BuyOptionsBtn from './BuyOptionsBtn/BuyOptionsBtn';
import Option from './BuyOptionsBtn/Option/Option';

const BuyInpOpt = ({placeholder, defaultTxt, options, defaultOption}) => {
    const [currency, setCurrency] = useState(defaultOption);
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className='flex items-center space-x-4 relative'>
            <BuyInput placeholder={placeholder} defaultTxt={defaultTxt}/>
            <BuyOptionsBtn currency={currency} fadeUp={() => setIsHidden(!isHidden)}/>
            <BuyOptions options={options} setCurrency={setCurrency} isHidden={isHidden}/>
        </div>
    );
};

export default BuyInpOpt;