import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBase = () => {
    var [pName,setName]= useState("Meera");
  const changeName= () => {
    setName("Tiya");
  }  


  return (
    <div>
        <Typography variant='h4'>
Welcome {pName }
        </Typography>
        <Button variant='contained' color='primary' onClick={changeName}>Click</Button>
      
    </div>
  )
}

export default StateBase
