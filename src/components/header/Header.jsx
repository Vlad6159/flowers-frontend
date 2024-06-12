"use client";

import classes from "./Header.module.css";
import MyLink from "@/components/myLink/MyLink";
import MyButton from "@/components/MyButton/MyButton";
import Modal from "@/components/Modal/Modal";
import { useContext, useState } from "react";
import NavButton from "@/components/NavButton/NavButton";
import Input from "@/components/Input/Input";
import { InputMask } from "@react-input/mask";
import axios from "axios";
import Label from "@/components/Label/Label";
import ModalDiv from "@/components/ModalDiv/ModalDiv";
import { useRouter } from "next/navigation";
import Cart from "@/components/Cart/Cart";
import Favorite from "@/components/Favorite/Favorite";
import Context from "@/context/Context";
import { backendUrl } from "@/const/const";

const Header = () => {
  const router = useRouter();
  const { userAuth, setUserAuth } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [buttonSubmit, setButtonSubmit] = useState(true);
  const [modalCode, setModalCode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  async function createOrUpdateUserVerifyCode() {
    try {
      const data = {
        tel: document.querySelector(".input__mask").value,
      };
      console.log("Отправка данных на сервер:", data);
      console.log("URL:", backendUrl + "/user/code");

      const response = await axios.post(backendUrl + "/user/code", data);
      console.log("Ответ от сервера:", response);
      setButtonSubmit(false);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      } else {
        console.error("Error:", error);
      }
      throw error; // Перекидываем ошибку, чтобы можно было обработать её в вызывающей функции
    }
  }
  async function checkCode() {
    const data = {
      tel: document.querySelector(".input__mask").value,
      code: document.querySelector('[name="code"]').value,
    };

    try {
      const response = await axios.post(backendUrl + "/user/code/check", data);
      console.log("Response data:", response.data);
      return response;
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code:",
          error.response.status,
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      throw error;
    }
  }
  return (
    <header className={classes.header}>
      <div className={classes.header__row}>
        <MyLink href="/" className={classes.header__logoText}>
          <img src="/logo.png" className={classes.header__logoText__logo} />
          <p className={classes.header__logoText__text}>Радуга цветов</p>
        </MyLink>
        <div className={classes.header__nav}>
          <div style={{ marginLeft: "20px" }}>
            <NavButton
              className={classes.header__nav__item}
              style={{ marginLeft: "0px" }}
              onClick={
                showFavorite
                  ? () => setShowFavorite(false)
                  : () => {
                      setShowCart(false);
                      setShowFavorite(true);
                    }
              }
            >
              <img
                src="/favorites.png"
                className={classes.header__nav__item__img}
                alt="Избранное"
              />
            </NavButton>
            {showFavorite ? <Favorite /> : ""}
          </div>
          <div style={{ marginLeft: "20px" }}>
            <NavButton
              className={classes.header__nav__item}
              style={{ marginLeft: "0px" }}
              onClick={
                showCart
                  ? () => setShowCart(false)
                  : () => {
                      setShowFavorite(false);
                      setShowCart(true);
                    }
              }
            >
              <img
                src="/cart.png"
                className={classes.header__nav__item__img}
                alt="Корзина"
              />
            </NavButton>
            {showCart ? <Cart /> : ""}
          </div>
          <div>
            <NavButton
              className={classes.header__nav__item}
              onClick={
                userAuth
                  ? () => {
                      router.push("/profile");
                    }
                  : () => {
                      setModalActive(true);
                    }
              }
            >
              <img
                src="/profile.png"
                className={classes.header__nav__item__img}
                alt="Профиль"
              />
            </NavButton>
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
              <h2 className={"modal__h2"}>Авторизация/Регистрация</h2>
              <ModalDiv>
                <Label forLabel={"tel"}>Телефон</Label>
                <InputMask
                  className={"input__mask"}
                  id={"tel"}
                  mask="+7 (___) ___-__-__"
                  name={"tel"}
                  replacement={{ _: /\d/ }}
                  placeholder={"+7 (___) ___-__-__"}
                />
              </ModalDiv>
              {modalCode ? (
                <ModalDiv>
                  <Label forLabel={"code"}>Код</Label>
                  <Input id={"code"} name={"code"} />
                  <span
                    style={{ cursor: "pointer", fontSize: "14px" }}
                    onClick={() => {
                      createOrUpdateUserVerifyCode();
                    }}
                  >
                    Отправить код заново
                  </span>
                </ModalDiv>
              ) : (
                ""
              )}

              <MyButton
                onClick={() => {
                  modalCode
                    ? checkCode().then((response) => {
                        localStorage.setItem("token", response.data.token);
                        setUserAuth(true);
                        setModalActive(false);
                      })
                    : createOrUpdateUserVerifyCode().then((response) => {
                        setButtonSubmit(false);
                        setModalCode(true);
                      });
                }}
              >
                {buttonSubmit ? "Отправить код" : "Проверить код"}
              </MyButton>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
