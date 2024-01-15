import React from "react";
import style from "./productCard.module.css";
import icon from "../../images/secondBlock/icon.svg";
import NftInfoElement from "./nftInfoElement/nftInfoElement";
const ProductCard = () => {
  return (
    <div className={style.container}>
      <div className={style.mainImage}></div>
      <div className={style.informationBlock}>
        <div className={style.countdown}>
          <p>
            Staking ends in <span>2d 23h 59m 58s</span>
          </p>
        </div>
        <div className={style.companyName}>
          <span className={style.circle}></span>
          <p>Rent Luxury Cars Dubai</p>
          <img src={icon} alt='' />
        </div>
        <div className={style.rent}>
          <p>Rent</p>
          <p>100 USDT</p>
        </div>
        <div className={style.typeBlock}>
          <div className={style.type}>
            <p className={style.titleType}>Type</p>
            <p className={style.typeClass}>Rent Luxury Cars</p>
          </div>
          <div className={style.button}>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={style.description}>
          Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent
          Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent
          Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent Rent
        </div>
        <div className={style.creatorsAndOwner}>
          <span className={style.circleAvatar}>
            <img src={icon} alt='' />
          </span>
          <div className={style.postAndNameBlock}>
            <p className={style.post}>Creator</p>
            <p className={style.name}>Carsmaker</p>
          </div>
          <span className={style.circleAvatar}>
            {" "}
            <img src={icon} alt='' />
          </span>
          <div className={style.postAndNameBlock}>
            <p className={style.post}>Owner</p>
            <p className={style.name}>MikaelShum</p>
          </div>
        </div>
        <div className={style.nftInfo}>
            <p>NFT info</p>
            <NftInfoElement/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
