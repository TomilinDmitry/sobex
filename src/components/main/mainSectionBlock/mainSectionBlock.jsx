import React from 'react'
import style from './mainSection.module.css'
import sectionImage_1 from "../../../images/sectionImage/sectionImage_1.svg"
import sectionImage_2 from "../../../images/sectionImage/sectionImage_2.svg"
import sectionImage_3 from "../../../images/sectionImage/sectionImage_3.svg"
import sectionImage_4 from "../../../images/sectionImage/sectionImage_4.svg"
import sectionImage_5 from "../../../images/sectionImage/sectionImage_5.svg"
import sectionImage_6 from "../../../images/sectionImage/sectionImage_6.svg"
const MainSectionBlock = () => {
  return (
    <div className={style.sectionBlock}>
    <div className={style.section}><img src={sectionImage_1} alt="" /> <span>Arkane</span></div>
    <div className={style.section}><img src={sectionImage_2} alt="" /> <span>Arkane</span></div>
    <div className={style.section}><img src={sectionImage_3} alt="" /> <span>Arkane</span></div>
    <div className={style.section}><img src={sectionImage_4} alt="" /> <span>Arkane</span></div>
    <div className={style.section}><img src={sectionImage_5} alt="" /> <span>Arkane</span></div>
    <div className={style.section}><img src={sectionImage_6} alt="" /> <span>Arkane</span></div>
   </div>
  )
}

export default MainSectionBlock