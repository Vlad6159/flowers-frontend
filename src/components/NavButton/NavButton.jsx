import React from 'react';
import classes from './NavButton.module.css'

const NavButton = ({className, children, onClick,style}) => {
    return (
        <div className={className + ' ' + classes.nav__button} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default NavButton;