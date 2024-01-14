import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Recipes from './Recipes'
import Contact from './Contact'

const Allroutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/recipe' element={<Recipes/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
