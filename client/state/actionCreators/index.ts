import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/actions';

export const submitPin = (newPin: any) => ({
	type: ActionType.submitPin,
	payload: newPin,
});

export const pinsFetched = (pins: any) => ({
	type: ActionType.pinsFetched,
	payload: pins,
});

export const updateCity = (cityIndex: number) => ({
	type: ActionType.changeCity,
	payload: cityIndex,
});

export const updatePinType = (pinIndex: number) => ({
	type: ActionType.updatePinType,
	payload: pinIndex,
});

export const togglePin = () => ({
	type: ActionType.togglePin,
});

export const addPin = (coordinates: any) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.addPin,
			payload: coordinates,
		});
	};
};

export const movePin = (coordinates: any) => ({
	type: ActionType.movePin,
	payload: coordinates,
});
