import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './read'

const BookApp = () => {
  
  var [books, setbooks] = useForm({title:"", author:"" , price:0})

  return (
    <div>
      
        <TextField variant='standard' name='title' value={books.title} onChange={setbooks} label="book name"></TextField>
        <br></br>
        <br></br>
        <TextField variant='standard' name='author' value={books.author} onChange={setbooks}  label="author"></TextField>
        <br></br>
        <br></br>
        <TextField variant='standard' name='price' value={books.price} onChange={setbooks}  label="price"></TextField>
        <br></br>
        <br></br>
        <Button variant='contained'>submit</Button>
       <Typography>{books}</Typography>
      
    </div>
  )
}

export default BookApp
