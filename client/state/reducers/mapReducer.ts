import { ActionType } from '../action-types';
import { Action } from '../actions/actions'

const initialState = {
  currentCity: '',
  currentCenter: [40.7831, -73.9712], 
  currentPinType: 'Food Truck',
  resultsList: [], 
  inputForm: {
    pinType: '',
    name: '',
    notes: '',
  },
  newPin: {
    show: false,
    anchor: [40.7831, -73.9712]
  },
  locationDetails: {
    names: ['Select a Location', 'New York', 'Los Angeles', 'Boston', 'Miami'],
    coordinates: [[40.7831, -73.9712], [40.7831, -73.9712], [34.052235, -118.243683], [42.35866, -71.05674], [25.775084, -80.1947]]
  },
  pinList: [
    'Select a Pin Type',
    'Food Truck', 
    'Street Artist', 
    'Pop-Up', 
    'Giveaway'
  ]

};

//currently have initial state set to any type
// revise once we know more about state contents
const mapReducer = (state: any = initialState, action: Action) => {
  let resultsList;
  let updatedPin;
  let pinType;
  console.log(state);
  switch (action.type){
    //add different cases

    case ActionType.changeCity:
      return {
        ...state,
        currentCity: state.locationDetails.names[action.payload],
        currentCenter: state.locationDetails.coordinates[action.payload]
      };
    case ActionType.updatePinType:
      pinType = {...state.currentPinType};
      pinType = action.payload;
      return {
        ...state,
        currentPinType: pinType,
      };
    case ActionType.togglePin:
      updatedPin = {...state.newPin};

      updatedPin.show = !state.newPin.show;
      updatedPin.anchor = state.currentCenter;

      return {
        ...state,
        newPin: updatedPin
    };
    case ActionType.movePin:
      updatedPin = {...state.newPin};
      updatedPin.anchor = action.payload;

      return {
        ...state,
        newPin: updatedPin
      };


    case ActionType.addPin:
      const location = action.payload;
      resultsList = state.resultsList.slice();
      resultsList.push(location)
      return {
        ...state,
        resultsList
      };
    default:
      return state;
  }

}

export default mapReducer;