import React from 'react'
import Header from '../Components/Header'
import { Button } from 'semantic-ui-react'
import Midcontent from '../Components/Home/Midcontent'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const recipes = () => {
    navigate('/recipe')
  }
  return (
    <div>
      <Header title="our recipes" bgClass='bgimage'>
         <Button 
           content="SEARCH RECIPES"
           color='primary'
           onClick={recipes}
         />
      </Header>
    </div>
  )
}

export default Home

{/* <Card>
            <Image src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" wrapped ui={false} />
            <CardContent>
              <CardHeader>Pizza's</CardHeader>
              <CardMeta>Veg/Non-veg</CardMeta>
              <CardDescription>
              A flat, open-faced baked pie of Italian origin
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <a>
                <Icon name="user" />
                1001 Reviews
              </a>
            </CardContent>
          </Card> */}