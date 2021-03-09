import React from 'react';
import style from './Footer.module.css';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';


const footer  = () => {
    return (
        <div className={style.Footer}>
            <span className={style.FollowUs}>Follow Us:</span>
            <div className={style.SocialWrapper}>

                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />

            </div>

        </div>
    );
}

export default footer;
