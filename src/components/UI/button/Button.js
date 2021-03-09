import React from 'react';
import  style from './Button.module.css';


const button = (props) => {
    return (
        <a href="#" className={style.Button} style={{backgroundColor:props.backgroundColor}}>Contact US</a>
    );
}

export default button;
