import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import LocationMap from './LocationMap';
import { Container, Grid, Button } from '@mui/material';
import LocationButton from './LocationButton'
import PinTypeButton from './PinTypeButton'
import { Map, Marker, Draggable } from "pigeon-maps"
import { movePin, togglePin, updatePinType } from './../state/actionCreators/index'
import MapForm from './MapForm';
import FoodTruck from '../assets/FoodTruck.svg';
import Giveaway from '../assets/Giveaway.svg'
import Popup from '../assets/Popup.svg'
import StreetArtist from '../assets/StreetArtist.svg'

const MapContainer = () => {
  const dispatch = useDispatch();
  const pin = useSelector((state: any) => state.map.newPin);
  const center = useSelector((state: any) => state.map.currentCenter);
  const currentPin = useSelector((state: any) => state.map.inputForm.pinType)

  console.log(currentPin);

  const markers = [<Marker width={50} anchor={center} onClick={() => alert('Market clicked')} />, <Marker width={50} anchor={[40.7506, -73.9900]} />, <Marker width={50} anchor={[40.7506, -73.9935]} />];
  //const [anchor, setAnchor] = useState([50.879, 4.6997]);
  
  // useEffect(() => {
  //   switch(currentPin){
  //     case 'FoodTruck':
  //       return const image = <img src='https://www.svgrepo.com/show/322373/food-truck.svg' width={50} height={45} alt="FoodTruck!" />;
  //     case 'StreetArtist':   
  //       return const image = <img src={StreetArtist} width={50} height={45} alt="StreetArtist!" />;
  //     case 'Giveaway':    
  //       return const image = <img src={Giveaway} width={50} height={45} alt="Giveaway!" />;
  //     case 'Popup':    
  //       return const image = <img src={Popup} width={50} height={45} alt="Popup!" />;
  //     default:
  //       return const image = <img src='https://www.svgrepo.com/show/322373/food-truck.svg' width={50} height={45} alt="FoodTruck!" />;
  //   }
  // }, [currentPin]);

  return (
    <Container id='mapContainer'>
      <Grid container direction='row'>
        <LocationButton />
        <Button onClick={() => {dispatch(togglePin())}}>
          Add New Pin
        </Button>
        {pin.show && <MapForm />}
      </Grid>
      {/* <LocationMap /> */}
      <Map height={600} center={center} defaultZoom={11}>
        {markers}

      {pin.show && 
        <Draggable offset={[0, 0]} anchor={pin.anchor} onDragEnd={(newAnchor) => dispatch(movePin(newAnchor))} >
          {currentPin === 'FoodTruck' ? <img src='https://www.svgrepo.com/show/322373/food-truck.svg' width={50} height={45} alt="FoodTruck!" /> : ''}
          {currentPin === 'StreetArtist' ? <img src='https://www.svgrepo.com/show/84889/artist-brush.svg' width={50} height={45} alt="StreetArtist!" /> : ''}
          {currentPin === 'Giveaway' ? <img src='https://www.svgrepo.com/show/323051/present.svg' width={50} height={45} alt="Giveaway!" /> : ''}
          {currentPin === 'Popup' ? <img src='https://www.svgrepo.com/show/1200/tent.svg' width={50} height={45} alt="Popup!" /> : ''}
        </Draggable>
      }

      </Map>
    </Container>
  )
}

export default MapContainer;