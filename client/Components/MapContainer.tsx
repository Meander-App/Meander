import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LocationMap from './LocationMap';
import { Container, Grid, Button } from '@mui/material';
import LocationButton from './LocationButton'
import PinTypeButton from './PinTypeButton'
import { Map, Marker, Draggable } from "pigeon-maps"
import { movePin, togglePin } from './../state/actionCreators/index'


const MapContainer = () => {
  const dispatch = useDispatch();
  const pin = useSelector((state: any) => state.map.newPin);
  const center = useSelector((state: any) => state.map.currentCenter);

  console.log(pin);

  const markers = [<Marker width={50} anchor={center} onClick={() => alert('Market clicked')} />, <Marker width={50} anchor={[40.7506, -73.9900]} />, <Marker width={50} anchor={[40.7506, -73.9935]} />];
  //const [anchor, setAnchor] = useState([50.879, 4.6997]);

  return (
    <Container>
      <Grid container direction='row'>
        <LocationButton />
        <PinTypeButton />
        <Button onClick={() => {dispatch(togglePin())}}>Add New Pin</Button>
      </Grid>
      {/* <LocationMap /> */}
      <Map height={600} center={center} defaultZoom={11}>
        {markers}

      {pin.show && 
        <Draggable offset={[0, 0]} anchor={pin.anchor} onDragEnd={(newAnchor) => dispatch(movePin(newAnchor))} >
          <img src="pigeon.svg" width={100} height={95} alt="Pigeon!" />
        </Draggable>
      }

      </Map>
    </Container>
  )
}

export default MapContainer;