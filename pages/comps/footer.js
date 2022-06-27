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
                    <div className='github'>
                    <UilGithubAlt size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://www.linkedin.com/in/phil-akagu-jones-090861187/'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='linkedin'>
                    <UilLinkedinAlt size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://www.facebook.com/profile.php?id=100007860738511'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='facebook'>
                    <UilFacebookF size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://twitter.com/philbburner'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='twitter'>
                    <UilTwitter size='1rem'/> 
                    </div>
            </a>
        </div>
        <div className={styles.copy}>
            © Phil Akagu-Jones 2022
        </div>
    </div>
  )
}

export default Footer;