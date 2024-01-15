import React from "react";
import style from "./nftInfoElement.module.css";
const NftInfoElement = () => {
  return (
    <div>
      <div className={style.element}>
        <p className={style.elementText}>Daily Staking</p>
        <p>0.15 USDT</p>
      </div>
      <div className={style.element}>
        <p className={style.elementText}>Marketing Levels</p>
        <p>2</p>
      </div>
      <div className={style.element}>
        <p className={style.elementText}>When staking starts</p>
        <p className={style.gradient}>After everything is sold</p>
      </div>
      <div className={style.element}>
        <p className={style.elementText}>Daily Staking</p>
        <p>
          12 month <span className={style.grayText}>365days</span>
        </p>
      </div>
      <div className={style.element}>
        <p className={style.elementText}>Staking Period</p>
        <p className={style.gradient}>Sell</p>
      </div>
      <div className={style.marketing}>
        <p>Marketing</p>
        <div className={style.marketingElement}>
          <p className={style.elementText}>Marketing Level</p>
          <p className={style.rightText}>
            1 <span className={style.lvl}>lvl</span> <span className={style.grayText}>10%</span>
          </p>
        </div>
        <div className={style.marketingElement}>
          <p className={style.elementText}>Marketing Level</p>
          <p className={style.rightText}>
            2 <span className={style.lvl}>lvl</span> <span className={style.grayText}>10%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftInfoElement;
