import React from 'react'
import style from './card.module.css'
import icon from "../../../../../images/secondBlock/icon.svg";
import threeDots from '../../../../../images/secondBlock/threeDots.svg'
import heart from '../../../../../images/fourthBlock/card/heart.svg'
const CardFourthBlockElement = ({price,likes,avatar,mainImage,title}) => {
  return (
    <div className={style.card}>
    <div className={style.profilePhoto}>
      <img src={avatar} alt='ProfilePhoto' />
      <div className={style.icon}>
        <img src={icon} alt='icon' />
      </div>
      <div className={style.timer}>
        <p>27d 21h 26m 22s</p>
    </div>
    </div>
    
    <div className={style.mainImage}>
      <img src={mainImage} alt="mainImage" />
    <div className={style.footerCard}>
      <p>{title}</p>
      <img src={threeDots} alt="" />
    </div>
    <div className={style.priceBlock}>
    <p className={style.price}>{price} ETH<span>1/20</span></p>
    </div>
    <div className={style.bet}>
        <p>Place a bid</p>
        <div className={style.likes}>
            <img src={heart} alt="" />
            <span>{likes}</span>
        </div>
    </div>
    </div>
    
  </div>
  )
}

export default CardFourthBlockElement