import React from "react";
import styles from "../styles/components/Main.module.css";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Banner = (props: { banner: string; path: string }) => {
  const navigate = useNavigate();
  const clickBanner = () => {
    navigate(`/${props.path}`);
  };

  return (
    <div
      className={cx([`${props.banner}`].join(" "))}
      onClick={clickBanner}
    ></div>
  );
};

export default Banner;
