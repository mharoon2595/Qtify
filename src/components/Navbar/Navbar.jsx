import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import Search from '../Search/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
      <Logo/>
      <Search/>
      <Button/>
    </nav>
  )
}

export default Navbar
