import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react'; // Import useSwiper from 'swiper/react'
import { ReactComponent as LeftArrow} from '../../assets/NavLeft.svg'
import styles from './CarouselLeft.module.css'

const CarouselLeftNav = () => {
  const swiper = useSwiper(); // Get the swiper instance from useSwiper
  const [isBeginning, setIsBeginning] = useState(false); // Default to true or initial state

  // useEffect(() => {
  //   if (swiper) {
  //     // Bind the 'sliderChange' event
  //     swiper.on('sliderChange', function () {
  //       setIsBeginning( swiper.isBeginning);
  //       console.log('isbeginning-->', isBeginning)
  //     });
  //   }
  // }, [swiper]);


  useEffect(()=>{
   
    console.log('isBeginning-->', isBeginning)
  },[isBeginning])

  const slidePrev = () => {
    if (swiper) {
      
      swiper.slidePrev();
      swiper.on('sliderChange', function () {
        setIsBeginning( swiper.isBeginning);
      }
      )
    }
  };

  if(!isBeginning){
  return (
    <div className={styles.left}>
      { ( 
        <LeftArrow onClick={slidePrev} />
      )}
    </div>
  );
 }

};

export default CarouselLeftNav;
