import React from 'react'
import Header from '../Components/Header'
import { Button } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>
      <Header title="our recipes" bgClass='bgimage'>
         <Button
           content="SEARCH RECIPES"
           color='primary'
         />
      </Header>
    </div>
  )
}

export default Home
