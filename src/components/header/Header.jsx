'use client'

import classes from './Header.module.css'
import MyLink from "@/components/myLink/MyLink";
import MyButton from "@/components/MyButton/MyButton";
import Modal from "@/components/Modal/Modal";
import {useState} from "react";
import NavButton from "@/components/NavButton/NavButton";
import Input from "@/components/Input/Input";
import {InputMask} from "@react-input/mask";
import axios from "axios";
import {metadata} from "@/pages/_app";


const Header = () => {

    const [modalActive, setModalActive] = useState(false);
    const [buttonSubmit, setbuttonSubmit] = useState(true);

    async function createOrUpdateUserVerifyCode() {
        const data = {
            tel: document.querySelector('.input__mask').value
        }
        const response = await axios.post(metadata.url + '/user/code',data)
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__row}>
                <MyLink href='/' className={classes.header__logoText}>
                    <img src='/logo.png' className={classes.header__logoText__logo}/>
                    <p className={classes.header__logoText__text}>Flowers</p>
                </MyLink>
                <div className={classes.header__nav}>
                    <MyLink href='/about' className={classes.header__nav__item}>О нас</MyLink>
                    <MyLink href='/favorite' className={classes.header__nav__item}>
                        <img src="/favorites.png" className={classes.header__nav__item__img} alt="Избранное"/>
                    </MyLink>
                    <MyLink href='/profile/cart' className={classes.header__nav__item}>
                        <img src="/cart.png" className={classes.header__nav__item__img} alt="Корзина"/>
                    </MyLink>
                    <NavButton className={classes.header__nav__item} onClick={() => {setModalActive(true)}}>
                        <img src="/profile.png" className={classes.header__nav__item__img} alt="Профиль"/>
                    </NavButton>
                    <Modal modalActive={modalActive} setModalActive={setModalActive}>
                        <h2 className={'modal__h2'}>Авторизация/Регистрация</h2>
                        <InputMask className={'input__mask'} mask="+7 (___) ___-__-__" name={'tel'} replacement={{ _: /\d/ }} placeholder={'+7 (___) ___-__-__'}/>
                        <MyButton onClick={() => {createOrUpdateUserVerifyCode().then((response) => {
                            setModalActive(false);
                        })}}>
                            {buttonSubmit ? 'Отправить код' : 'Проверить код'}
                        </MyButton>
                    </Modal>
                </div>
            </div>
        </header>
    );
};

export default Header;