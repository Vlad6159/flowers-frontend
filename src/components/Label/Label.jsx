import React from 'react';
import classes from './Label.module.css'

const Label = ({children,forLabel}) => {
    return (
        <label className={classes.label} htmlFor={forLabel}>
            {children}
        </label>
    );
};

export default Label;