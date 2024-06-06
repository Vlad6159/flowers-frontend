import React from 'react';
import classes from './NavButton.module.css'

const NavButton = ({className, children, onClick}) => {
    return (
        <div className={className + ' ' + classes.nav__button} onClick={onClick}>
            {children}
        </div>
    );
};

export default NavButton;