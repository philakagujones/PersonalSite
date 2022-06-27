import React from 'react'
import Toggle from './toggle';
import styles from '../../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navwrapper}>
      <div className={styles.navleft}>
          <div className={styles["navname"] + styles["hoveranimation"]}>phil akagu-jones</div>
          <Toggle />
      </div>
      <div className={styles.navright}>
          <div className={styles.navlist}>
              <ul>
                <a href={'mailto:philakagujones@gmail.com'}>
                  <li className={styles.hoveranimation}>contact</li>
                </a>  
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar;