import React from 'react';
import { Provider } from 'react-redux';
import { Grid } from '@mui/material'
import { CssBaseline } from '@mui/material';
import MapContainer from './Components/MapContainer';
import CardContainer from './Components/CardContainer';
import Dashboard from './Components/Dashboard';
import store from './state/store'
declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}

const App = () => {
  return (
    <Provider store = {store}>
      <CssBaseline>
          <Grid container direction='row'>
            <Dashboard />
          </Grid>
        </CssBaseline>
    </Provider>
  );
}

export default App;