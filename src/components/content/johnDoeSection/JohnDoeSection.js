import React from 'react';
import style from './JohnDoeSection.module.css';
import Stars from '../../../assets/stars.png';
import Carousel from '../carousel/Carousel';

const johnDoeSection  = () => {
    return (
        <div className={style.JohnDoeSection}>
            <div className={style.StarSection}>
                <div className={style.TitleAndStars}>
                    <h4 className={style.JohnH}>LOREM IPSUM DOLOR SIT AMET</h4>
                    <img src={Stars} alt="star rating" />
                </div>

            </div>
            <div className={style.CarouselSection}>
                <div className={style.CarouselWrapper}>
                    <Carousel />

                </div>

            </div>
        </div>

    );
}

export default johnDoeSection;

