import React from 'react';
import LocationMap from './LocationMap';
import { Container, Grid } from '@mui/material';
import LocationButton from './LocationButton'
import PinTypeButton from './PinTypeButton'


const MapContainer = () => {

  return (
    <Container>
      <LocationButton />
      <PinTypeButton />
      <LocationMap />
    </Container>
  )
}

export default MapContainer;