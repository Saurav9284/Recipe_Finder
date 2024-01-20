import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Recipes from './Recipes'
import Login from './Login'
import Signup from './Singnup'

const Allroutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/recipe' element={<Recipes/>}/>
  
      </Routes>
    </div>
  )
}

export default Allroutes
