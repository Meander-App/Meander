import React from 'react';
import { Grid } from '@mui/material'
import { CssBaseline } from '@mui/material';
import MapContainer from './Components/MapContainer';
import CardContainer from './Components/CardContainer';

declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}

const App = () => {
  return (
    <CssBaseline>
      <Grid container direction='row'>
        <MapContainer />
        <CardContainer />
      </Grid>
    </CssBaseline>
  )
  
}

export default App;