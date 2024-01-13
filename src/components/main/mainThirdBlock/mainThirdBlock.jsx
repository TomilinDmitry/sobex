import React from "react";
import style from "./thirdBlock.module.css";
import ThirdBlockCard from "./thirdBlockCard/thirdBlockCard";
const MainThirdBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>КОЛЛЕКЦИЯ</p>
      </div>
      <div className={style.title}>
        <p>Исследуйте захватывающие коллекции NFT</p>
      </div>
      <section className={style.textDescription}>
        <h5>
          Откройте увлекательный мир невзаимозаменяемых токенов (NFT)
          и погрузитесь в уникальные коллекции, созданные нашими
          талантливыми художниками и инновационными проектами. Каждая
          коллекция представляет собой уникальные цифровые активы,
          доступные для приобретения и собственности на нашем
          маркетплейсе. Обнаружьте невероятные произведения и станьте
          частью истории NFT.
        </h5>
      </section>
      <div className={style.cardBlock}>
      <ThirdBlockCard/>
      <ThirdBlockCard/>
      <ThirdBlockCard/>
      <ThirdBlockCard/>
      </div>
    </div>
  );
};

export default MainThirdBlock;
