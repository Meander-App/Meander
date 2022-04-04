import { ActionType } from '../action-types/index'
//an example of an action for a reducer to change the center of the map location
interface changeCityAction {
  type: ActionType.changeCity
  payload: string
};

interface pinLocationAction {
  type: ActionType.pinLocation
  //pinLocation payload set to any for now
  payload: any
};

export type Action = changeCityAction | pinLocationAction;
