import React from 'react';
import logo from '../../assets/logo.png';

const ProFirstLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl -ml-5 font-extrabold'>Profirst</p>
        </div>
    );
};

export default ProFirstLogo;