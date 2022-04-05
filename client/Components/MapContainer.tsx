import React from 'react';
import LocationMap from './LocationMap';
import { Container, Grid } from '@mui/material';
import LocationButton from './LocationButton'
import PinTypeButton from './PinTypeButton'
import { Map, Marker } from "pigeon-maps"


const MapContainer = () => {
  const markers = [<Marker width={50} anchor={[40.7406, -73.9940]} onClick={() => alert('Market clicked')} />, <Marker width={50} anchor={[40.7506, -73.9900]} />, <Marker width={50} anchor={[40.7506, -73.9935]} />];

  return (
    <Container>
      <Grid container direction='row'>
        <LocationButton />
        <PinTypeButton />
      </Grid>
      {/* <LocationMap /> */}
      <Map height={600} defaultCenter={[40.7831, -73.9712]} defaultZoom={11}>
        {markers}
      </Map>
    </Container>
  )
}

export default MapContainer;