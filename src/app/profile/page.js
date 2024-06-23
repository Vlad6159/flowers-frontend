"use client";
import H1 from "@/components/H1/H1";
import Profile from "@/components/Profile/Profile";
import SideLinks from "@/components/SideLinks/SideLinks";
import { backendUrl } from "@/const/const";
import { useEffect, useState } from "react";

const Index = () => {
  const [thisUser, setThisUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`${backendUrl}/user`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      const { user } = await response.json();
      setThisUser(user);
    };
    fetchUser();
  }, []);
  if (!thisUser) {
    return (
        <>
          <H1>Профиль</H1>
          <SideLinks></SideLinks>
          <div>Loading...</div>
        </>
    );
  }
  return (
    <>
      <H1>Профиль</H1>
      <SideLinks></SideLinks>
      <Profile user={thisUser} />
    </>
  );
};

export default Index;
