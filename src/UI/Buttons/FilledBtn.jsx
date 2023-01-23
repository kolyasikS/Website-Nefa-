import React from 'react';

const FilledBtn = ({children, className, refBtn}) => {
    return (
        <button ref={refBtn} className={`text-sm text-white rounded-full 
        bg-gradient-to-r from-[#468ef9] to-[#0c66ee] 
        poppins transition duration-300 
        hover:shadow-md hover:shadow-[#0c66ee]/50 ${className || ''}`}>
            {children}
        </button>
    );
};

export default FilledBtn;