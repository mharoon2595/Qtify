import React from 'react'
import styles from "./Button.module.css"

const Button = ({children}) => {
  return (
    <button className={styles.btn} type='submit'>Give feedback</button>
  )
}

export default Button