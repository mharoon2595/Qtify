import React from 'react'
import style from './Songs.module.css'
import Tabs from './Tabs/Tabs'

const Songs = () => {
  return (
    <div className={style.songsWrapper}>
        <h3>Songs</h3>
        <div className={style.tabWrapper}>
        <Tabs/>
        </div>
        </div>
  )
}

export default Songs