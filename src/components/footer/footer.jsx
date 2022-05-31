import React from 'react'
import './footer.css'

import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'

import { themeContext } from '../../mode'
import { useContext } from 'react'

function Footer() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
        <div className="icons">
            <a  href={'https://github.com/philakagujones'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='github'>
                    <UilGithubAlt style={darkMode? {color: 'white'} : {color : 'black'}} size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://www.linkedin.com/in/phil-akagu-jones-090861187/'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='linkedin'>
                    <UilLinkedinAlt style={darkMode? {color: 'white'} : {color : 'black'}} size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://www.facebook.com/profile.php?id=100007860738511'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='facebook'>
                    <UilFacebookF style={darkMode? {color: 'white'} : {color : 'black'}} size='1rem'/> 
                    </div>
            </a>
            <a  href={'https://twitter.com/philbburner'} 
                target={'_blank'}
                rel={'noopener noreferrer'}>
                    <div className='twitter'>
                    <UilTwitter style={darkMode? {color: 'white'} : {color : 'black'}} size='1rem'/> 
                    </div>
            </a>
        </div>
        <div className="copy">
            © Phil Akagu-Jones 2022
        </div>
    </div>
  )
}

export default Footer;