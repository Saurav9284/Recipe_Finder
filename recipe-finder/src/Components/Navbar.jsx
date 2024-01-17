import React from 'react'
import {Menu,MenuItem,Input,MenuMenu} from 'semantic-ui-react'
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const home = () =>{
    navigate('/')
  }

  const contact = () =>{
    navigate('/contact')
  }

  const recipe = () =>{
    navigate('/recipe')
  }

  return (
    <div className='navbar'>
      <Menu borderless fixed='top' style={{ backgroundColor: 'rgb(28, 6, 6)'}}>
         <Menu.Item>
            <img src={logo} alt='logo' style={{width:50, cursor:'pointer'}} onClick={home}/>
         </Menu.Item>
        <MenuItem
          name='Home'
          className='navbarmenu'
          onClick={home}
        />
        <MenuItem
          name='Recipes'
          className='navbarmenu'
          onClick={recipe}
        />

        <MenuMenu position='right'>
          <MenuItem>
            <Input icon='search' placeholder='Search...' />
          </MenuItem>
        </MenuMenu>
        
        <MenuItem
            name='Contact'
            className='navbarmenu'
            onClick={contact}
          />
        <MenuItem
            name='Logout'
            className='navbarmenu'
          />
      </Menu>
    </div>
  )
}

export default Navbar
