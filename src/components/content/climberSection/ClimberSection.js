import React from 'react';
import style from './ClimberSection.module.css';
import ClimbersImg from '../../../assets/img-1.jpg';
import Link from '../../UI/link/Link';



const climberSection  = () => {
    return (
        <div className={style.Section}>
            <div className={style.TextSection}>
                <div className={style.Text}>
                    <h3 className={style.ClimH}>Lorem Ipsum</h3>
                    <p className={style.ClimP}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    </p>
                    <Link> > Read more </Link>

                </div>
            </div>
            <div className={style.ImageSection} >
                <img src={ClimbersImg} alt="Climbers" />

            </div>
        </div>

    );
}

export default climberSection;
