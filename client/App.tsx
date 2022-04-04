import React from 'react';
import LocationMap from './Components/LocationMap';
import MapContainer from './Components/MapContainer';
import CardContainer from './Components/CardContainer';

declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}


const App = () => {
  return (
    <div>
      App
      <LocationMap></LocationMap>
    </div>

  )
  
}

export default App;