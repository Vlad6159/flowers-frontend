'use client'
import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({onClick,children}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;