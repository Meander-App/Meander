import { ActionType } from '../action-types/index';

interface submitPinAction {
	type: ActionType.submitPin;
	payload: any;
}

interface pinsFetchedAction {
	type: ActionType.pinsFetched;
	payload: any;
}
//an example of an action for a reducer to change the center of the map location
interface changeCityAction {
	type: ActionType.changeCity;
	payload: string;
}

interface updatePinTypeAction {
	type: ActionType.updatePinType;
	payload: string;
}

interface togglePinAction {
	type: ActionType.togglePin;
	//pinLocation payload set to any for now
	payload?: any;
}

interface addPinAction {
	type: ActionType.addPin;
	//pinLocation payload set to any for now
	payload: any;
}
interface movePinAction {
	type: ActionType.movePin;
	//pinLocation payload set to any for now
	payload: any;
}

export type Action =
	| changeCityAction
	| updatePinTypeAction
	| togglePinAction
	| addPinAction
	| movePinAction
	| pinsFetchedAction
	| submitPinAction;
