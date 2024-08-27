import React from 'react'
import googleMapReact from 'google-map-react'
import useStyles from './style'
import { useMediaQuery } from '@mui/material'
const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = { lat:0,lng:0}
  return (
    <>
      <googleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >

      </googleMapReact>
    </>
  )
}

export default Map
