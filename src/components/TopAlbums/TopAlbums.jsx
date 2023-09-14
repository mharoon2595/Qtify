import React, { useState } from 'react'
import axios from'axios'
import { useEffect} from 'react'
import { config } from '../../App'
import styles from './TopAlbums.module.css'
import Cards from './Cards'
import TopAlbumsJSON from '../../TopAlbumsJSON.json'


const TopAlbums = () => {
    const [fetchTopAlbums, setFetchTopAlbums]= useState([])

useEffect(()=>{

       setFetchTopAlbums(TopAlbumsJSON)

  },[])

  useEffect(()=>{
    console.log("fetchTopAlbums-->", fetchTopAlbums)
  },[fetchTopAlbums])  


  return (
    <div className={styles.topAlbumsList}>
      <h3>Top Albums</h3>
      <div className={styles.cardDeck}>
      {fetchTopAlbums.map((items)=>(
        // console.log("Hello world");
       <Cards cardData={items}/>
      ))}
      </div>
      </div>
  )
}

export default TopAlbums