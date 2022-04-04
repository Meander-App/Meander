
//an example of an action for a reducer to change the center of the map location
interface changeCityAction {
  type: 'changeCity'
  payload: string
};

interface pinLocationAction {
  type: 'pinLocation'
  //pinLocation payload set to any for now
  payload: any
};

export type Action = changeCityAction | pinLocationAction;
