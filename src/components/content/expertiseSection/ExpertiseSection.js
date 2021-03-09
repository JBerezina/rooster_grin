import React from 'react';
import styles from './ExpertiseSection.module.css';
import Link from '../../UI/link/Link';
import ExpLogoHolder from '../../UI/expLogoHolder/ExpLogoHolder';
/*import ExpertLogo from '../../../assets/home-expertise.svg';*/
import LabLogo from '../../../assets/home-lab.svg';
import HygieneLogo from '../../../assets/home-hygiene.svg';
import RetentionLogo from '../../../assets/home-retention.svg';


const expertiseSection  = () => {
    return (
        <div className={styles.ExpertiseSection}>
            <div className={styles.TextExpertiseSection}>
                <div className={styles.ExpertiseText}>
                    <h4 className={styles.ExpHeading}>Lorem Ipsum Dolor Sit Amet</h4>
                    <p className={styles.ExpP}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </p>
                    <Link> > Read more </Link>

                </div>
            </div>

            <div className={styles.ItemsExpertiseSection}>

                <div className={styles.ExpertiseLogoWrapper}>

                    <div className={styles.FirstLineExpertiseLogos}>

                        <ExpLogoHolder logoImage="url(./images/home-expertise.svg)">
                            <p>Imd dhgf</p>
                        </ExpLogoHolder>

                        <ExpLogoHolder logoImage="url(./images/home-hygiene.svg)">
                            <p>Kg slkhk</p>
                        </ExpLogoHolder>

                    </div>

                    <div className={styles.SecondLineExpertiseLogos}>

                        <ExpLogoHolder logoImage="url(./images/home-lab.svg)">
                            <p>Imd dhgf</p>
                        </ExpLogoHolder>

                        <ExpLogoHolder logoImage="url(./images/home-retention.svg)">
                            <p>Kg slkhk</p>
                        </ExpLogoHolder>
                    </div>


                </div>

                       </div>

        </div>

    );
}

export default expertiseSection;
