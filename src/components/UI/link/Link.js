import React from 'react';
import styles from './Link.module.css';


const link  = (props) => {
    return (
        <a href ="#" className={styles.Link}>{props.children}</a>
    );
}

export default link;
