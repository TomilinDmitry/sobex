import React from "react";
import style from "./explore.module.css";
import banner from "../../images/explore/banner.svg";
import iconInput from "..//../images/explore/iconInput.svg";
import downIcon from "../../images/header/downIcon.svg";
import arrowLeft from "../../images/explore/arrowLeft.svg";
import arrowRight from "../../images/explore/arrowRight.svg";
import Card from "../main/mainSecondBlock/card/card";
import leftArrow from "../../images/secondBlock/leftArrow.svg";
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <img src={banner} alt='' />
        <p className={style.bannerText}>Explore</p>
        <button className={style.buttonCollection}>
        <Link to ='/productCard'> Check this collection, <span>Monkis</span></Link>
        </button>
      </div>
      <div className={style.inputAndSelectBlock}>
        <div className={style.searchInput}>
          <input
            type='search'
            placeholder='Search item here...'
            id='SearchInput'
          />
          <label
            className={style.purpleBlockforIcon}
            htmlFor='SearchInput'>
            <img src={iconInput} alt='icon' />
          </label>
        </div>
        <div className={style.typesAndCollection}>
          <div className={style.types}>
            <p className={style.title}>Types</p>
            <div className={style.select}>
              <p>Select Type</p>
              <img src={downIcon} alt='downIcon' />
            </div>
          </div>
          <div className={style.collection}>
            <p className={style.title}>Collection</p>
            <div className={style.selectCollection}>
              <p>Select Collection</p>
              <img src={downIcon} alt='downIcon' />
            </div>
          </div>
        </div>
      </div>
      <div className={style.page}>
        <img src={arrowLeft} alt='arrowLeft' />
        <p className={style.pageNumber}> 1 </p>
        <img src={arrowRight} alt='arrowRight' />
      </div>
      <div className={style.cardBlock}>
        <div className={style.arrowForCard}>
          <img className={style.arrowLeftTop} src={leftArrow} alt='topArrow' />
          <img className={style.arrowLeftBottom} src={leftArrow} alt='bottomArrow' />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Explore;
