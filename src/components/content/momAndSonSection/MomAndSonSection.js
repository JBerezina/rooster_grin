import React from 'react';
import style from './MomAndSonSection.module.css';
import MomAndSonImage from "../../../assets/banner-1.jpg";
import Button from '../../UI/button/Button';



const momAndSonSection  = () => {
    return (
        <div className={style.MomSection}>
            <img src={MomAndSonImage} alt ="Mom and sun" />
            <div className={style.MomAndSonTitle}>
                <h3 className={style.MomH}>Lorem Ipsum</h3>
                <Button backgroundColor="orange">Button</Button>
            </div>
        </div>

    );
}

export default momAndSonSection;
