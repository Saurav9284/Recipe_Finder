import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


const Signup = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
         Create your account
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Nmane'
            type='Name'
          />
          <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
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

export default Signup