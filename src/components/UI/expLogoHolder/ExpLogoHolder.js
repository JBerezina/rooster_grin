import React from 'react';
import styles from './ExpLogoHolder.module.css';

const expLogoHolder  = (props) => {
    return (
        <div className={styles.LogoExpHolder}>
            <div className={styles.Circle}>
                <div className={styles.ExpLogoImage} style={{backgroundImage:props.logoImage}}></div>
            </div>
            <p className={styles.Caption} >{props.children}</p>
        </div>
    );
}

export default expLogoHolder;
