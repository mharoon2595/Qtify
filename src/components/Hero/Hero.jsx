import React from 'react'
import style from './Hero.module.css'
import {ReactComponent as Headphones} from '../../assets/vibrating-headphone 1.svg'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div>
        <h1><strong>100 Thousand Songs, ad-free</strong></h1>
        <h1><strong>Over thousands of podcast episodes</strong></h1>
        </div>
        <Headphones/>
    </div>
  )
}

export default Hero