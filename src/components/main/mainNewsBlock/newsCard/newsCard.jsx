import React from 'react'
import style from './newsCard.module.css'
import newsMainImage from '../../../../images/newsBlock/newsMainImage.svg'
const NewsCard = () => {
  return (
    <div className={style.card}>
        <img src={newsMainImage} alt="mainImage" />
    <div className={style.information}>
      <p className={style.date}>MAY 27,2023</p>
      <p className={style.title}>Big News Boi</p>
      <p className={style.description}>How do you do this thing? That’s how! Look at this video...</p>
    </div>
    </div>
  )
}

export default NewsCard