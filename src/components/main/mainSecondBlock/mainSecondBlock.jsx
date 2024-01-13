import React from "react";
import style from "./secondBlock.module.css";
import Card from "./card/card";
import holo_1 from '../../../images/secondBlock/holo_1.svg'
import holo_2 from '../../../images/secondBlock/holo_2.svg'
import leftArrow from '../../../images/secondBlock/leftArrow.svg'
import rightArrow from '../../../images/secondBlock/rightArrow.svg'
const MainSecondBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>NFT</p>
      </div>
      <div className={style.title}>
        <p>
          Искусство и инновация в каждом NFT: Обнаружьте уникальные
          цифровые активы
        </p>
      </div>
      <section className={style.textDescription}>
        <h5>
          Добро пожаловать в увлекательный мир невзаимозаменяемых
          токенов (NFT), где искусство и инновация сливаются в каждой
          уникальной коллекции. Откройте для себя захватывающие
          цифровые активы, созданные талантливыми художниками и
          передовыми проектами. На нашей платформе вы сможете
          покупать, владеть и продавать NFT, становясь частью
          революции цифрового искусства. Погрузитесь в новые миры и
          выразите свою индивидуальность с помощью уникальных цифровых
          активов.
        </h5>
      </section>
    
      <div className={style.cardBlock}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <div className={style.holo_1}>
        <img src={holo_1} alt="" />
      </div>
      <div className={style.holo_2}>
        <img src={holo_2} alt="" />
      </div>
      </div>
      <div className={style.arrows}>
        <div className={style.leftArrow}><img src={leftArrow} alt="" /></div>
        <div className={style.rightArrow}><img src={rightArrow} alt="" /></div>
      </div>
    </div>
  );
};

export default MainSecondBlock;
