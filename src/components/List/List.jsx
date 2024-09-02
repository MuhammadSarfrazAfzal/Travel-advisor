import React from 'react'
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@mui/material'
import useStyles from './style'
import { useState } from 'react'
import PlaceDetails from '../Placeholder/PlaceDetails'
const List = () => {
  const classes = useStyles()
  const [type,setType]=useState('Restaurants')
  const [rating,setRating]=useState('All')
  const places =[
    {name:'Sarfraz'},
    {name:'Afzal'},
    {name:'Bisma'},
    {name:'Afzaal'},
    {name:'Sarfraz'},
    {name:'Afzal'},
    {name:'Bisma'},
    {name:'Afzaal'}
  ]
  return (
    <div className={classes.container}>
      <Typography variant='h5'>Resturants,Hotels & Attractions arround you</Typography>
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
          <Grid container spacing={3} className={classes.list}>
             {places?.map((place,i)=>(
                <Grid item xs={12} key={i}>
                    <PlaceDetails place={place}/>
                </Grid>
             ))}
          </Grid>
    </div>
  )
}

export default List
