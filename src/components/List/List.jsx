import React from 'react'
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@mui/material'
import useStyles from './style'
import { useState } from 'react'
const List = () => {
  const classes = useStyles()
  const [type,setType]=useState('Restaurants')
  const [ratings,setRating]=useState('')
  return (
    <div className={classes.container}>
      <Typography variant='h5'>Resturants,Hotels and Attractions arround you</Typography>
      <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
    </div>
  )
}

export default List
