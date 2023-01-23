import React, { useMemo, useState } from 'react';
import Option from './Option/Option';

const BuyOptions = ({options, setCurrency, isHidden}) => {
    const [isFading, setIsFading] = useState(false);
    const style = useMemo(() => {
        if (isHidden) {
            let style = `opacity-0 absolute right-8 top-[66px] 
                z-10 list-none mt-2 rounded-lg border border-sky-600 bg-white space-y-0
                transition duration-300 -translate-y-3`;
                setTimeout(() => setIsFading(true), 300)
            return style;    
        } else {
            let style = `opacity-0 absolute right-8 top-[66px] 
                z-10 list-none mt-2 rounded-lg border border-sky-600 bg-white space-y-0
                transition duration-300 -translate-y-3 anim-fadeUp`;
                setIsFading(false);
            return style;
        }
    }, [isHidden]);
    return (
        <ul className={`${style} ${isFading ? 'invisible' : ''}`}>
                {options.slice(0, 2).map((option, ind) => 
                    <Option key={ind} {...option} setCurrency={setCurrency}/>
                )}
        </ul>
    );
};

export default BuyOptions;