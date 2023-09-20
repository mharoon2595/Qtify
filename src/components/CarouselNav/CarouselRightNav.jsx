import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow} from '../../assets/NavRight.svg'
import styles from './CarouselRight.module.css'

const CarouselRightNav = () => {
    const swiper=useSwiper();
    const [isEnd, setIsEnd] = useState(false);
    const [repeat, setRepeat] = useState()

    useEffect(()=>{
  
      if(swiper){

        swiper.on("sliderChange",function(){
            setIsEnd(swiper.isEnd);
            console.log("event fired")
        }
        )
        return () => {
          swiper.off('sliderChange'); // Unbind the event
        };

      }
    }, [swiper])

    useEffect(()=>{

    console.log('isEnd---->', isEnd);
    },[repeat])

  
    const slideNext = () => {

        
        swiper.slideNext();
        swiper.on('sliderChange', function () {
          setIsEnd(swiper.isEnd);
          
        }
        )
        setRepeat(swiper.isEnd)
    };


if(!isEnd){
  return (
    <div className={styles.right}>
        {<RightArrow onClick={slideNext} />}
    </div>
  )
}
}

export default CarouselRightNav