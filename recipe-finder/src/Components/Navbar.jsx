import React from 'react'
import {Menu} from 'semantic-ui-react'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <Menu borderless fixed='top'>
        <Menu.Item>
            <img src={logo} alt='logo' style={{width:70, cursor:'pointer'}}/>
        </Menu.Item>
        <Menu.Item name='Home' style={{cursor:'pointer'}}/>
        <Menu.Item name='Recipes' style={{cursor:'pointer'}}/>
      </Menu>
    </div>
  )
}

export default Navbar
