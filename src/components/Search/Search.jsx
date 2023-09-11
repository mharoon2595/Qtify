import React from 'react'
import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/Search-icon.svg'

const Search = () => {
  return (
    <div>
        <form className={styles.wrapper}>
            <input placeholder='Search an album of your choice' className={styles.searchBar}/>
            <div>
                <button className={styles.searchBtn}  type='submit'>
                    <SearchIcon/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Search