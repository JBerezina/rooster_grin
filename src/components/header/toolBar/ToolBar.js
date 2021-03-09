import React from 'react';
import style from './ToolBar.module.css';
import Logo from '../logo/Logo';


const toolBar = () => {
    return (
        <div className={style.ToolBar}>
            <Logo />
        </div>
    );
}

export default toolBar;
