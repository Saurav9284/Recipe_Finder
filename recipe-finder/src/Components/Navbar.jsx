import React from 'react'
import {Menu} from 'semantic-ui-react'
import logo from '../Assets/logo.png'
// import { logo } from '../Constants/constants'
const Navbar = () => {
  return (
    <div>
      <Menu borderless fixed='top'>
        <Menu.Item>
            <img src={logo} alt='logo' style={{width:50, cursor:'pointer'}}/>
        </Menu.Item>
        <Menu.Item name='Home' className='navbarmenu' />
        <Menu.Item name='Recipes' className='navbarmenu' />
      </Menu>
    </div>
  )
}

export default Navbar
