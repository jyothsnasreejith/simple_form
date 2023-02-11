import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const CounterApp = () => {

    var [numBer,setnumBer]=useState(0);

const incrementValue = () =>
{
 setnumBer(numBer+1);
}

const decrementValue = () =>
{
 setnumBer(numBer-1);
}

  return (
    <div>
        <Typography variant='h4'>
{numBer}
        </Typography>
        <Button variant='contained' color='success' onClick={incrementValue}>+</Button>
        <Button variant='contained' color='error' onClick={decrementValue}>-</Button>
    </div>
  )
}

export default CounterApp
