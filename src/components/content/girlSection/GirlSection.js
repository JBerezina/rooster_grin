import React from 'react';
import style from './GirlSection.module.css';
import girlImage from "../../../assets/banner-2.jpg";
import Button from '../../UI/button/Button';



const girlSection  = () => {
    return (
        <div className={style.GirlSection}>
            <img src={girlImage} alt ="Banner with a girl" />
            <div className={style.GirlTitle}>
                <h3 className={style.GirlH}>Lorem Ipsum</h3>
                <p className={style.GirlP}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                </p>
                <Button backgroundColor="orange">Button</Button>
            </div>
        </div>

    );
}

export default girlSection;
