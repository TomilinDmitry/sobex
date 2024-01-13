import React from 'react'
import background from "../../../images/background/background.svg";
import firstHolo from "../../../images/background/firstHolo.svg"
import secondHolo from "../../../images/background/secondHolo.svg";
import thirdHolo from "../../../images/background/thirdHolo.svg";
import fourthHolo from "../../../images/background/fourthHolo.svg";
import fifthhHolo from "../../../images/background/fifthHolo.svg"
import sixthHolo from "../../../images/background/sixthHolo.svg";
import seventhHolo from "../../../images/background/seventhHolo.svg"
import eighthHolo from "../../../images/background/eighthHolo.svg"
import style from './mainPhotoBlock.module.css'
import photoMain from "../../../images/photoMain.svg";


const MainPhotoBlock = () => {
  return (
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
  <div className={style.photoBlock}>
            <img src={photoMain} alt="PhotoMain" />
        </div>
  </div>
  )
}

export default MainPhotoBlock