import React from 'react';
import style from './Logo.module.css';

import LogoWhite from '../../../assets/logo-white.svg';
import LogoColor from '../../../assets/logo-color.svg';



const logo = () => {
    return (
        <div className={style.Logo}>
            <img src={LogoWhite} className={style.LogoWhite} alt="Logo" />
            <img src={LogoColor} className={style.LogoColor} alt="Logo" />
        </div>

        );
}

export default logo;
