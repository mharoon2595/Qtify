import React, { useState } from 'react'
import axios from'axios'
import { useEffect, useRef} from 'react'
import { config } from '../../App'
import styles from './Albums.module.css'
import Cards from '../Card/Cards'
import TopAlbumsJSON from '../../TopAlbumsJSON.json'
import NewAlbumsJSON from'../../NewAlbumsJSON.json'
import { Swiper} from 'swiper/react'
import { SwiperSlide, useSwiper } from 'swiper/react'
import { register } from 'swiper/element/bundle';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import CarouselLeftNav from '../CarouselNav/CarouselLeftNav'
import CarouselRightNav from '../CarouselNav/CarouselRightNav'
import { ReactComponent as LeftArrow} from '../../assets/NavLeft.svg'
// import SwiperCore, { Navigation } from 'swiper/core';


const Controls = ({data}) =>{
      
  const swiper=useSwiper();

  useEffect(()=>{
   if(swiper){
    // console.log(swiper)
    swiper.slideTo(0,null);
   }
  },[data])

  return (<></>)

}

const TopAlbums = () => {

  const [fetchTopAlbums, setFetchTopAlbums]= useState([]);
  const [fetchNewAlbums, setFetchNewAlbums]=useState([]);
  const [toggleShow1, setToggleShow1]=useState(true)
  const [toggleShow2, setToggleShow2]=useState(true)

  useEffect(()=>{
    setFetchTopAlbums(TopAlbumsJSON);
    setFetchNewAlbums(NewAlbumsJSON);
  },[])

  

  useEffect(()=>{
    console.log("fetchTopAlbums-->", fetchTopAlbums)
  
  },[fetchTopAlbums])  

  useEffect(()=>{
    console.log("fetchNewAlbums-->", fetchNewAlbums)
  
  },[fetchNewAlbums])


  return (
    <div className={styles.topAlbumsList}>

      <div className={styles.titleWrapper}>
      <h3 className={styles.TopAlbums}>Top Albums</h3>
      {toggleShow1
      ?<h3 className={styles.toggle} onClick={()=>{
        setToggleShow1(!toggleShow1);
      }}>Show all</h3>
      :<h3 className={styles.toggle} onClick={()=>{
        setToggleShow1(!toggleShow1);
      }}>Collapse</h3>
      }
     </div>
    {toggleShow1?
    <Swiper
    modules={[Navigation]}
    spaceBetween='40px'
    slidesPerView={7}
    allowTouchMove
    style={{padding:'20px'}}
     >
      <Controls data={fetchTopAlbums} />
      <CarouselLeftNav />
      <CarouselRightNav />
      
      {fetchTopAlbums.map((items)=>(
        // console.log("Hello world");
       
       <SwiperSlide key={items.id}><Cards cardData={items} image={items.image}/></SwiperSlide >
       
      ))}
      </Swiper>
      :<div className={styles.flexWrapper}>
          {fetchTopAlbums.map((items)=>(
            <Cards  key={items.id} cardData={items} image={items.image}/>
          ))}
      </div>
     }

     <div className={styles.titleWrapper}>
      <h3 className={styles.TopAlbums}>New Albums</h3>
      {toggleShow2
      ?<h3 className={styles.toggle} onClick={()=>{
        setToggleShow2(!toggleShow2);
      }}>Show all</h3>
      :<h3 className={styles.toggle} onClick={()=>{
        setToggleShow2(!toggleShow2);
      }}>Collapse</h3>
      }
     </div>
    {toggleShow2?
    <Swiper
    modules={[Navigation]}
    spaceBetween='40px'
    slidesPerView={7}
    allowTouchMove
    style={{padding:'20px'}}
     >
      <Controls data={fetchNewAlbums} />
      <CarouselLeftNav />
      <CarouselRightNav />
      
      {fetchNewAlbums.map((items)=>(
        // console.log("Hello world");
       
       <SwiperSlide key={items.id}><Cards cardData={items} image={items.image}/></SwiperSlide >
       
      ))}
      </Swiper>
      :<div className={styles.flexWrapper}>
          {fetchNewAlbums.map((items)=>(
            <Cards  key={items.id} cardData={items} image={items.image}/>
          ))}
      </div>
     }
    </div> 
  )
}

export default TopAlbums