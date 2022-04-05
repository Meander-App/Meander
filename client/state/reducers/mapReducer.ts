import { ActionType } from '../action-types';
import { Action } from '../actions/actions'

const initialState = {
  currentCity: '',
  resultsList: [], 
  inputForm: {
    pinType: '',
    name: '',
    notes: '',
  },
  newPin: {
    show: false,
    lat: null,
    long: null
  }
};


//currently have initial state set to any type
// revise once we know more about state contents
const mapReducer = (state: any = initialState, action: Action) => {
  let resultsList

  switch (action.type){
    //add different cases
    case ActionType.changeCity:
      return {
        ...state,
        currentCity: action.payload
      };
      case ActionType.showPin:
        const [ lat, long ] = action.payload  
        const pin = {
          show: true,
          lat: lat,
          long: long
        }
        return {
          state,
          newPin: pin,
        };
      case ActionType.addPin:
        const location = action.payload;
        resultsList = state.resultsList.slice();
        resultsList.push(location)
        return {
          state,
          resultsList
        };
    default:
      return state;
  }
}

export default mapReducer;