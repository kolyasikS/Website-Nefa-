import React, { useEffect, useRef, useState } from 'react';
import useObserver from '../../Сustom hooks/useObserver';

const FadeImg = ({src, alt, className}) => {
    const img = useRef();
    const [isHidden, setIsHidden] = useState(true);
    useObserver(img, setIsHidden, isHidden);
    return (
        <img ref={img} src={src} alt={alt} className={`${className} ${isHidden ? '' : 'anim-fadeUp'}`}/>
    );
};

export default FadeImg;