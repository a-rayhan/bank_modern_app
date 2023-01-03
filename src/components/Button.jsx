import React from 'react';

const Button = ({ styles }) => (
    <button type='button' className={`px-6 py-4 bg-blue-gradient rounded-[10px] text-primary font-poppins font-medium text-[18px] outline-none ${styles}`}>
        Get Started
    </button>
);

export default Button;