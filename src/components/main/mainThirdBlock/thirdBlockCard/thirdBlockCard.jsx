import React from 'react'
import style from './thirdBlockCard.module.css'
import thirdBlockMainImage from '../../../../images/thirdBlock/thirdBlockMainImage.svg'
import profilePhoto from "../../../../images/secondBlock/profilePhoto.svg";
import icon from "../../../../images/secondBlock/icon.svg";
const ThirdBlockCard = () => {
  return (
    <div className={style.card}>
    <div className={style.profilePhoto}>
      <img src={profilePhoto} alt='ProfilePhoto' />
      <div className={style.icon}>
        <img src={icon} alt='icon' />
      </div>
    </div>
    <div className={style.mainImage}>
      <img src={thirdBlockMainImage} alt="mainImage" />
      <p className={style.title}>SDAFSDFA SD</p>
    <div className={style.footerCard}>
      <p>Ffdsa fasd fasd fasd fFfdsa fasd fasd fasd fFfdsa fasd fasd fasd fasd fasd fFfdsa fasd fasd fasd fasd fasd fFfdsa fasd fasd fasd asd fasd fasd fasd fFfdsa fasd fasd fasd </p>
    </div>
    </div>
    </div>
  )
}

export default ThirdBlockCard