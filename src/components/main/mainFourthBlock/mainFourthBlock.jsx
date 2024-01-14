import React from "react";
import style from "./fourthBlock.module.css";
import holo_1 from "../../../images/fourthBlock/holo_1.svg";
import centralImage_1 from "../../../images/fourthBlock/centralImage_1.svg";
import centralImage_2 from "../../../images/fourthBlock/centralImage_2.svg";
import FourthBlockCard from "./cardBlock/fourthBlockCard";
const MainFourthBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>КАТЕГОРИИ</p>
      </div>
      <div className={style.title}>
        <p>
          Исследуйте множество категорий NFT: Найдите свою уникальную
          страсть
        </p>
      </div>
      <section className={style.textDescription}>
        <h5>
          Погрузитесь в мир разнообразия и креативности с нашими
          многочисленными категориями NFT. Найдите свою страсть в
          уникальных цифровых активах, которые воплощают самые разные
          сферы искусства и развлечений. Откройте для себя новые миры
          и коллекции, которые захватят ваше воображение и вдохновят к
          новым приключениям.
        </h5>
        <div className={style.holo}>
          <img src={holo_1} alt='' />
        </div>
        <div className={style.cardBlockContainer}>
          <div className={style.centralCardBlock}>
            <img src={centralImage_1} alt='' />
            <img src={centralImage_2} alt='' />
          </div>
          <FourthBlockCard />
        </div>
      </section>
    </div>
  );
};

export default MainFourthBlock;
