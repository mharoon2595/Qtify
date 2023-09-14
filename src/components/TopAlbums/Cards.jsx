import React from 'react'
import styles from './Cards.module.css'
import axios from 'axios'

const Cards = ({cardData}) => {
    console.log("from Cards-->", cardData)

  

  const cardStyle={
    width:'100%',
    height:'175px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    backgroundImage: `url(${cardData.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className={styles.fullCard}>
        <div className={styles.cardStructure}>
        <div style={cardStyle}>
        <button className={styles.cardBtn}>{cardData.follows} Follows</button>
        </div>
        </div>
        <div>
          {cardData.title}
        </div>
    </div>
  )
}

export default Cards