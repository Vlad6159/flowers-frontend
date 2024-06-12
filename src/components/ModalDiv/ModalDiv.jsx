'use client'
import React from 'react';
import classes from './Modal.module.css'

const ModalDiv = ({children}) => {
    return (
        <div className={classes.modal__div}>
            {children}
        </div>
    );
};

export default ModalDiv;