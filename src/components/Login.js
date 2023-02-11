import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
    <TextField variant='standard' label='Email'></TextField>
    <br></br>
    <TextField variant='standard' type={'password'} label='Password'></TextField>
   <br></br>
   <br></br>
   <Button variant='contained'>login</Button>
   
  
    </div>
  )
}

export default Login
