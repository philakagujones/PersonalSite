import React from 'react'
import styles from '../../styles/Footer.module.css'

import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.icons}>
            <a  href={'https://github.com/philakagujones'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className={styles.github}>
                    <UilGithubAlt size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://www.linkedin.com/in/phil-akagu-jones-090861187/'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className={styles.linkedin}>
                    <UilLinkedinAlt size='1rem'/> 
                    </div>
            </a>
            {/* <a  href={'https://www.facebook.com/profile.php?id=100007860738511'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className={styles.facebook}>
                    <UilFacebookF size='1rem'/> 
                    </div>
            </a> */}
            <a  href={'https://twitter.com/philakagujones'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className={styles.twitter}>
                    <UilTwitter size='1rem'/> 
                    </div>
            </a>
        </div>
        <div className={styles.copy}>
            © 2024
        </div>
    </div>
  )
}

export default Footer;