import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions/actions';

export async function getLocalPins(dispatch: any, getState: any) {
	try {
		const response = await axios.get('http://localhost:3000/pins/NYC');
		const pins = response.data.reverse();
		dispatch({ type: ActionType.pinsFetched, payload: pins });
	} catch (e) {
		console.log(e);
	}
}

export async function submitPin(dispatch: any, getState: any) {
	// get state
	const stateBefore = getState();
	// destructure what we need
	const { pinType, name, notes } = stateBefore.map.inputForm;
	const [latitude, longitude] = stateBefore.map.newPin.anchor;
	const market = 'NYC';
	console.log(
		'Here are the parameters: ',
		pinType,
		name,
		notes,
		latitude,
		longitude
	);
	try {
		// make an axios post request
		const response = await axios.post('http://localhost:3000/pins', {
			name,
			market,
			type: pinType,
			notes,
			latitude,
			longitude,
		});
		const newPin = response.data;
		dispatch({ type: ActionType.submitPin, payload: newPin });
	} catch (e) {
		console.log(e);
	}
	// dispatch newPin action with response
}

export async function removePin(dispatch: any, getState: any) {
	try {
		const response = await axios.get('http://localhost:3000/pins/NYC');
		const pins = response.data.reverse();
		dispatch({ type: ActionType.pinsFetched, payload: pins });
	} catch (e) {
		console.log(e);
	}