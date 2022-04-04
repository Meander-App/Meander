import { ActionType } from '../action-types';
import { Action } from '../actions/actions'

const initialState = {
  currentCity: ''
};


//currently have initial state set to any type
// revise once we know more about state contents
const mapReducer = (state: any = initialState, action: Action) => {
  switch (action.type){
    //add different cases
    case ActionType.changeCity:
      return {
        ...state,
        currentCity
      }
      case ActionType.pinLocation:
        return 
    default:
      return state;
  }
}

export default mapReducer;