import React from 'react';
import { Map, Marker } from "pigeon-maps"


declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}



const LocationMap = () => {
  const markers = [<Marker width={50} anchor={[40.7406, -73.9940]} onClick={() => alert('Market clicked')} />, <Marker width={50} anchor={[40.7506, -73.9900]} />, <Marker width={50} anchor={[40.7506, -73.9935]} />];
  
  return (
    <div>
      <Map height={500} width={1000} defaultCenter={[40.7831, -73.9712]} defaultZoom={11}>
        {markers}
      </Map>
    </div>
  )
  
}

export default LocationMap;