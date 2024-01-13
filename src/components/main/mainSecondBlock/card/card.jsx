import React from "react";
import style from "./card.module.css";
import profilePhoto from "../../../../images/secondBlock/profilePhoto.svg";
import icon from "../../../../images/secondBlock/icon.svg";
import mainImage from '../../../../images/secondBlock/mainImage.svg'
import threeDots from '../../../../images/secondBlock/threeDots.svg'

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.profilePhoto}>
        <img src={profilePhoto} alt='ProfilePhoto' />
        <div className={style.icon}>
          <img src={icon} alt='icon' />
        </div>
      </div>
      <div className={style.mainImage}>
        <img src={mainImage} alt="mainImage" />
      <div className={style.footerCard}>
        <p>asdSADASDSAda</p>
        <img src={threeDots} alt="" />
      </div>
      <p className={style.price}>1111 USDT <span>0/1</span></p>
      </div>
      
    </div>
  );
};

export default Card;
