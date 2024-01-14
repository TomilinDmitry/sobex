import React from "react";
import style from "./footer.module.css";
import logo from "../../images/footer/logo.svg";
import instagram from '../../images/footer/instagram.svg'
import youtube from '../../images/footer/youtube.svg'
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logoColumn}>
        <img src={logo} alt='' />
        <p className={style.rights}>
          Assetmaker Inc., all rights received
        </p>
      </div>
      <div className={style.category}>
        <p>MarketPlace</p>
        <ul className={style.list}>
          <li>Explore NFT</li>
          <li>Explore Collections</li>
        </ul>
      </div>
      <div className={style.category}>
        <p>Overview</p>
        <ul className={style.list}>
          <li>About Company</li>
          <li>News</li>
        </ul>
      </div>
      <div className={style.profile}>
        <p>MarketPlace</p>
        <ul className={style.list}>
          <li>Your profile</li>
          <li>History</li>
          <li>Partner program</li>
        </ul>
      </div>
      <div className={style.social}>
        <p>Get the latest updates</p>
        <div className={style.socialImage}>
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
