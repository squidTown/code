import React, { useEffect, useState } from "react";
import styles from "../styles/components/MyPageContainer.module.css";
import containers from "../styles/pages/Container.module.css";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import MyPageItem from "./MyPageItem";
import { UserInfo } from "../App";
import { getCookie, removeCookie } from "../utils/cookie";

const MyPageContainer = (props: { id: any }) => {
  const navigate = useNavigate();
  const list = [
    "등록한 학원",
    "후기관리",
    "좋아요",
    "문의하기",
    "공지사항",
    "약관 읽어보기",
    "목록1",
    "목록2",
    "목록3",
  ];
  const [information, setInformation] = useState<UserInfo>();

  const clickLogOut = () => {
    removeCookie("jwt")
    window.location.href = "/login"
  };

  const clickAlter = () => {
    navigate(`/alteruser/${props.id}`);
  };
  const token = getCookie("jwt")

  useEffect(() => {
    axios("http://localhost:3001/api/user/mypage", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
          console.log(token)

          setInformation(res.data.data);
      })
      .catch((err) => {
        console.log(token)

        window.location.href = "/login";
      });
  }, []);

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.userContainer}>
              <div className={styles.user}>
                <span className={styles.name}>{information?.name}</span>
                <span className={styles.email}>{information?.email}</span>
              </div>
              <Button
                size="middle"
                txt="회원정보수정"
                clickEvent={clickAlter}
                type="empty"
              />
            </div>
            <div className={styles.list}>
              {list.map((element) => (
                <MyPageItem key={`item${element}`} txt={element} />
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button
                size="big"
                txt="로그아웃"
                clickEvent={clickLogOut}
                type="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageContainer;
