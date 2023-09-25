import React from 'react'
import styles from './Cards.module.css'
import Tooltip from '@mui/material/Tooltip';

const Cards = ({cardData, fromTabs }) => {
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

  if(cardData.songs){
  return (
    <Tooltip title={`${cardData.songs.length} songs`} arrow placement="top">
    <div className={styles.fullCard}>
        <div className={styles.cardStructure}>
        <div style={cardStyle}>
        {fromTabs
        ?<button className={styles.cardBtn}>{cardData.likes} likes</button>
        :<button className={styles.cardBtn}>{cardData.follows} Follows</button>
        }
        </div>
        </div>
        <div>
          {cardData.title}
        </div>
    </div>
    </Tooltip>
  )
}
else{
  return (
    <div className={styles.fullCard}>
        <div className={styles.cardStructure}>
        <div style={cardStyle}>
        {fromTabs
        ?<button className={styles.cardBtn}>{cardData.likes} likes</button>
        :<button className={styles.cardBtn}>{cardData.follows} Follows</button>
        }
        </div>
        </div>
        <div>
          {cardData.title}
        </div>
    </div>
  )
}
}

export default Cards