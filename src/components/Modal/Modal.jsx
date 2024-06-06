import React from 'react';
import  classes from './Modal.module.css'

const Modal = ({modalActive,setModalActive,children}) => {
    return (
        <div className={` ${classes.modal} ${modalActive ? classes.active : ''}`} onClick={()=>setModalActive(false)}>
            <div className={classes.modal__content} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default Modal;