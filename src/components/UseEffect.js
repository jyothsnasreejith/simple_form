import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const UseEffect = () => {
var [pageName,setpageName]=useState("Home");
const homeName=() => {
    setpageName("Home Page");
}
const galleryName=() => {
    setpageName("Gallery Page");
}
const contactName=() => {
    setpageName("Contact Page");
}

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={homeName}>Home</Button>
      <Button variant='contained' color='primary'  onClick={galleryName}>Gallery</Button>
      <Button variant='contained' color='success'  onClick={contactName}>Contact</Button>
      <Typography variant='h4'>Welcome to {pageName}</Typography>
    </div>
  )
}

export default UseEffect
