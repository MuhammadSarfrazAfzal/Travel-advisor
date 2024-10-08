import React, { useEffect } from "react"
import {Typography,Grid} from "@mui/material"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { getPlacesData } from "./api"
import { useState } from "react"
function App() {
  
  useEffect(()=>{getPlacesData()},[])
  return (
    <>
      <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
            <List/>
        </Grid>
        <Grid item xs={12} md={8}>
            <Map/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
