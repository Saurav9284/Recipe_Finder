import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import {auth} from "../Firebase/firebase"
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

function Signup () {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const singnup = (e) => {
     e.preventDefault();
     if(!email||!password){
      alert('Fill all details')
     }
     createUserWithEmailAndPassword(auth , email , password)
     .then((userCredential)=>{
      toast({
        title: 'Signup Successfull.',
        position: 'top',
          description: "We've created account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      console.log(userCredential);
      localStorage.setItem("email",email);
      navigate('/login')
     })
     .catch((error)=>{
      toast({
        title: 'User alresdy exist.',
        position: 'top',
          status: 'warning',
          duration: 9000,
          isClosable: true,
      })
      console.log(error);
     })
  }
 

  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
         Create your account
      </Header>
    <Form size='large' onSubmit={singnup}>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Nmane'
            type='Name'
          />
          <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
          />
          <Button color='green' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='./login' className='link'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default Signup