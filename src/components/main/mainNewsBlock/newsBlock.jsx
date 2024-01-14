import React from 'react'
import style from './newsBlock.module.css'
import NewsCard from './newsCard/newsCard'
const NewsBlock = () => {
  return (
    <div className={style.container}>
    <div className={style.text}>
      <p>НОВОСТИ</p>
    </div>
    <div className={style.title}>
      <p>
      Будьте в курсе последних новостей:
Информация о тенденциях
      </p>
    </div>
    <section className={style.textDescription}>
      <h5>
      Не упустите ни одной важной новости из мира NFT. Мы предлагаем вам
самую свежую информацию о последних тенденциях
      </h5>
    </section>
  
    <div className={style.cardBlock}>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
  </div>
  )
}

export default NewsBlock