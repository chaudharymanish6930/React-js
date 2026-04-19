import React from 'react'
import styles from './Header.module.css'
import buttonStyles from '../button/Button.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h2>Github Analyzer</h2>
        <button className={buttonStyles.btn}>Login</button>
    </div>
  )
}

export default header