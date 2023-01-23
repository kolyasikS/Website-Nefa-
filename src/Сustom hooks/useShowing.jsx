import React, { useEffect, useState } from 'react';

const useShowing = (delay) => {
    const [isShowed, setIsShowed] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowed(true), delay);
    });
    return isShowed;
};

export default useShowing;