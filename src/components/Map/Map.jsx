import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper,Typography,useMediaQuery} from '@mui/material';
// import { LocationOnOutlinedIcon } from '@mui/icons-material/LocationOnOutlined';
// import Rating from '@mui/material';
import useStyles from './style'
const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = { lat:32.93354000,lng:73.72071800}
  return (
    <>
      <div className={classes.mapContainer}>
      <GoogleMapReact
        className={classes.googleMap}
        bootstrapURLKeys={{key:'AIzaSyBffvMVFtkref1GuH4uZuVVVa1Ro8r6D9c'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
      </div>
    </>
  )
}

export default Map
