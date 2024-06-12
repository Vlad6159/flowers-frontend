'use client'
import React from 'react';
import classes from "./Input.module.css";

const Input = ({type,name,placeholder}) => {
    return (
        <input className={classes.input} type={type} name={name} placeholder={placeholder}/>
    );
};

export default Input;