import React from 'react'
import Header from '../Components/Header'
import { Button } from 'semantic-ui-react'
import Midcontent from '../Components/Home/Midcontent'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const recipes = () => {
    navigate('/recipes')
  }
  return (
    <div>
      <div className='Header'>
      <Header title="checkout our recipes" bgClass='bgimage'>
         <Button 
           content="SEARCH RECIPES"
           color='primary'
           onClick={recipes}
         />
      </Header>
      </div>
      <div className='midcontent'>
         <Midcontent/>
      </div>
      
    </div>
  )
}

export default Home

