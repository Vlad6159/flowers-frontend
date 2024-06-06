import React from 'react';
import classes from "*.module.css";

const Input = ({type,name,placeholder}) => {
    return (
        <input className={classes} type={type} name={name} placeholder={placeholder}/>
    );
};

export default Input;