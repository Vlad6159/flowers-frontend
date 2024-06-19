"use client";
import Label from "@/components/Label/Label";
import Input from "@/components/Input/Input";
import classes from "./Profile.module.css";
import MyButton from "@/components/MyButton/MyButton";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "@/const/const";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState({
    surname: user.surname || "",
    name: user.name || "",
  });
  async function editUserData() {
    const response = await axios.post(`${backendUrl}/user/update`, userData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response?.data.message);
  }
  return (
    <div className={classes.profile}>
      <div className={classes.profile__div}>
        <Label forLabel={"surname"}>Фамилия</Label>
        <Input
          type={"text"}
          name={"surname"}
          id={"surname"}
          style={{ marginLeft: "5px" }}
          value={userData.surname}
          onChange={(e) => {
            setUserData((prevState) => ({
              ...prevState,
              surname: e.target.value,
            }));
          }}
        />
      </div>
      <div className={classes.profile__div}>
        <Label style={{ width: "100%", height: "100%" }} forLabel={"name"}>
          Имя
        </Label>
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          style={{ marginLeft: "5px" }}
          value={userData.name}
          onChange={(e) => {
            setUserData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />
      </div>
      <div className={classes.profile__button}>
        <MyButton onClick={editUserData}>Изменить</MyButton>
      </div>
    </div>
  );
};

export default Profile;
