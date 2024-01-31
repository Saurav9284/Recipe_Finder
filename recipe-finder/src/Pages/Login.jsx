import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth} from '../Firebase/firebase'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { useToast } from '@chakra-ui/react'


function Login () {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const login = (e) => {
     e.preventDefault();
     if(!email||!password){
      alert('Fill all details')
     }
      signInWithEmailAndPassword(auth , email , password)
     .then((userCredential)=>{
      toast({
        title: 'Login Successfull.',
        position: 'top',
          description: "You've loged in to your account.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      console.log(userCredential);
      localStorage.setItem("email",email);
      navigate('/');
     })
     .catch((error)=>{
      toast({
        title: 'Invalid Credentials.',
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
         Log-in to your account
      </Header>
      <Form size='large' onSubmit={login}>
        <Segment stacked>
          <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' value={email} onChange={(e)=>setEmail(e.target.value)} />
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
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='./signup' className='link'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default Login