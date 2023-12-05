import React from "react";
import styles from "../styles/pages/MessagePage.module.css";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";

export const MessagePage = () => {
  return (
    <>
      <Header location="Direct Message" />
      <div className={styles.wrapper}>
        <div className={styles.container}></div>
      </div>
      <BottomNavbar />
    </>
  );
};
