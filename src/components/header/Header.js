import React from 'react';
import style from './Header.module.css';
import Banner from '../../assets/hero.jpg';

import Button from '../UI/button/Button';
import ToolBar from '../header/toolBar/ToolBar';


const header = () => {
    return (
        <div className={style.Banner}>
            <img src={Banner} className={style.HeroImg} alt="Banner" />
            <ToolBar />
            <div className={style.Heading}>
                <h1>Welcome to</h1>
                <h2 className={style.RoosterGrinH}>Rooster Grin</h2>
                <Button />
            </div>




        </div>

    );
}

export default header;
