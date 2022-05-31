import React from 'react'
import Toggle from '../toggle/toggle';
import './navbar.css'

import { themeContext } from '../../mode'
import { useContext } from 'react'

function Navbar() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='navwrapper'>
      <div className="navleft">
          <div className="navname hoveranimation">phil akagu-jones</div>
          <Toggle />
      </div>
      <div className="navright">
          <div className="navlist">
              <ul>
                <a href={'mailto:philakagujones@gmail.com'}>
                  <li className='hoveranimation' style={darkMode? {color: 'white'} : {color : 'black'}}>contact</li>
                </a>  
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
