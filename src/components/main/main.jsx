import React from "react";
import style from "./main.module.css";
import background from "../../images/background/background.svg";
import photoMain from "../../images/photoMain.svg";
import firstHolo from "../../images/background/firstHolo.svg"
import secondHolo from "../../images/background/secondHolo.svg";
import thirdHolo from "../../images/background/thirdHolo.svg";
import fourthHolo from "../../images/background/fourthHolo.svg";
import fifthhHolo from "../../images/background/fifthHolo.svg"
import sixthHolo from "../../images/background/sixthHolo.svg";
import seventhHolo from "../../images/background/seventhHolo.svg"
import eighthHolo from "../../images/background/eighthHolo.svg"
import sectionImage_1 from "../../images/sectionImage/sectionImage_1.svg"
import sectionImage_2 from "../../images/sectionImage/sectionImage_2.svg"
import sectionImage_3 from "../../images/sectionImage/sectionImage_3.svg"
import sectionImage_4 from "../../images/sectionImage/sectionImage_4.svg"
import sectionImage_5 from "../../images/sectionImage/sectionImage_5.svg"
import sectionImage_6 from "../../images/sectionImage/sectionImage_6.svg"

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.containerBackground}>
          <img src={background} alt='background' />
        <div className={style.holoBlockfirst}>
          <img className={style.firstHolo} src={firstHolo} alt='holo1' />
        </div>

        <div className={style.holoBlockSecond}>
          <img className={style.secondHolo} src={secondHolo} alt='holo2' />
        </div>

        <div className={style.holoBlockThird}>
          <img className={style.thirdHolo} src={thirdHolo} alt='holo3' />
        </div>
        
        <div className={style.holoBlockFourth}>
          <img className={style.fourthHolo} src={fourthHolo} alt='holo4' />
        </div>
        <div className={style.holoBlockFifth}>
          <img className={style.fifthHolo} src={fifthhHolo} alt='holo5' />
        </div>
        <div className={style.holoBlockSixth}>
          <img className={style.sixthHolo} src={sixthHolo} alt='holo5' />
        </div>

        <div className={style.holoBlockSeventh}>
          <img className={style.seventhHolo} src={seventhHolo} alt='holo5' />
        </div>
        <div className={style.holoBlockEighth}>
          <img className={style.eighthHolo} src={eighthHolo} alt='holo5' />
        </div>

        </div>
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
        <div className={style.photoBlock}>
            <img src={photoMain} alt="PhotoMain" />
        </div>
      </div>
       <div className={style.sectionBlock}>
        <div className={style.section}><img src={sectionImage_1} alt="" /> <span>Arkane</span></div>
        <div className={style.section}><img src={sectionImage_2} alt="" /> <span>Arkane</span></div>
        <div className={style.section}><img src={sectionImage_3} alt="" /> <span>Arkane</span></div>
        <div className={style.section}><img src={sectionImage_4} alt="" /> <span>Arkane</span></div>
        <div className={style.section}><img src={sectionImage_5} alt="" /> <span>Arkane</span></div>
        <div className={style.section}><img src={sectionImage_6} alt="" /> <span>Arkane</span></div>
       </div>
    </main>
  );
};

export default Main;
