import React from "react";
import style from "./main.module.css";

import MainPhotoBlock from "./mainPhotoBlock/mainPhotoBlock";
import MainSectionBlock from "./mainSectionBlock/mainSectionBlock";
import MainSecondBlock from "./mainSecondBlock/mainSecondBlock";
import MainThirdBlock from "./mainThirdBlock/mainThirdBlock";
import MainFourthBlock from "./mainFourthBlock/mainFourthBlock";
import NewsBlock from "./mainNewsBlock/newsBlock";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <MainPhotoBlock />
        <section className={style.titleBlock}>
          <p className={style.title}>
            Explore, collect, and sell extraordinary{" "}
            <span className={style.gradient}>NFTs</span>
          </p>
          <p className={style.textUnderTitle}>
            Welcome to the future, you can buy and sell awesome
            artworks form here. The world largest digital marketplace
            for non-fungible tokens.
          </p>
        </section>
        <div className={style.buttonBlock}>
          <button className={style.button}>Explore</button>
        </div>
      </div>
      <MainSectionBlock />
      <MainSecondBlock/>
      <MainThirdBlock/>
      <MainFourthBlock/>
      <NewsBlock/>
    </main>
  );
};

export default Main;
