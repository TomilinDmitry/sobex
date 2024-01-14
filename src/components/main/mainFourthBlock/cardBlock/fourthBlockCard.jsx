import React from 'react'
import style from './fourthBlockCard.module.css'
import avatarImage_1 from "../../../../images/fourthBlock/card/avatarImage_1.svg";
import avatarImage_2 from "../../../../images/fourthBlock/card/avatarImage_2.svg";
import avatarImage_3 from "../../../../images/fourthBlock/card/avatarImage_3.svg";
import avatarImage_4 from "../../../../images/fourthBlock/card/avatarImage_4.svg";
import cardMainImage_1 from '../../../../images/fourthBlock/card/cardMainImage_1.svg'
import cardMainImage_2 from '../../../../images/fourthBlock/card/cardMainImage_2.svg'
import cardMainImage_3 from '../../../../images/fourthBlock/card/cardMainImage_3.svg'
import cardMainImage_4 from '../../../../images/fourthBlock/card/cardMainImage_4.svg'
import CardFourthBlockElement from './card/card';
const FourthBlockCard = () => {
  return (
    <div>
      <div className={''}>
      <CardFourthBlockElement title='Prime Ape' mainImage={cardMainImage_1} avatar={avatarImage_1} price='0.88' likes='44'/>
      </div>
      <div className={style.secondCard}>
      <CardFourthBlockElement title = 'Mikey’s Head'mainImage={cardMainImage_2} avatar={avatarImage_2} price='5.44' likes='07'/>
      </div>
      <div className={style.thirdCard}>
      <CardFourthBlockElement title='Toivo Nendongo'mainImage={cardMainImage_3} avatar={avatarImage_3} price='500.9' likes='100'/>
      </div>
      <div className={style.fourthCard}>
      <CardFourthBlockElement title='Blueish Man'mainImage={cardMainImage_4} avatar={avatarImage_4} price='0.08' likes='50'/>
      </div>
     
    </div>
  )
}

export default FourthBlockCard