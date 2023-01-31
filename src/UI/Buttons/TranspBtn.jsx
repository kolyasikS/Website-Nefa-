import React from 'react';

const TranspBtn = ({children, className}) => {
    return (
        <button className={`text-sm poppins rounded-full border-solid 
        border text-[#468ef9] border-[#0c66ee] flex items-center justify-center
        transition duration-300 hover:shadow-md hover:shadow-[#0c66ee]/50 ${className || ''}`}>
            {children}
        </button>
    );
};

export default TranspBtn;