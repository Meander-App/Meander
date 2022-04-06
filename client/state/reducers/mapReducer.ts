import { ActionType } from '../action-types';
import { Action } from '../actions/actions';

const initialState = {
	currentCity: '',
	currentCenter: [40.7831, -73.9712],
	resultsList: [],
	inputForm: {
		pinType: 'FoodTruck',
		name: '',
		notes: '',
	},
	newPin: {
		show: false,
		anchor: [40.7831, -73.9712],
	},
	locationDetails: {
		names: ['Select a Location', 'New York', 'Los Angeles', 'Boston', 'Miami'],
		coordinates: [
			[40.7831, -73.9712],
			[40.7831, -73.9712],
			[34.052235, -118.243683],
			[42.35866, -71.05674],
			[25.775084, -80.1947],
		],
	},
	pinList: [
		'Select a Pin Type',
		'Food Truck',
		'Street Artist',
		'Pop-Up',
		'Giveaway',
	],
};

//currently have initial state set to any type
// revise once we know more about state contents
const mapReducer = (state: any = initialState, action: Action) => {
	let resultsList;
	let updatedPin;
	let pinType;
	let updatedForm;
	console.log(state);
	switch (action.type) {
		//add different cases
		case ActionType.submitPin:
			return {
				...state,
				resultsList: [action.payload, ...state.resultsList],
			};
		case ActionType.pinsFetched:
			return {
				...state,
				resultsList: action.payload,
			};
		case ActionType.changeCity:
			return {
				...state,
				currentCity: state.locationDetails.names[action.payload],
				currentCenter: state.locationDetails.coordinates[action.payload],
			};
		case ActionType.updatePinType:
			updatedForm = {...state.inputForm};
			updatedForm.pinType = state.pinList[action.payload];
			return {
				...state,
				inputForm: updatedForm,
			};
		case ActionType.togglePin:
			updatedPin = { ...state.newPin };

			updatedPin.show = !state.newPin.show;
			updatedPin.anchor = state.currentCenter;

			return {
				...state,
				newPin: updatedPin,
			};
		case ActionType.movePin:
			updatedPin = { ...state.newPin };
			updatedPin.anchor = action.payload;

			return {
				...state,
				newPin: updatedPin,
			};
		case ActionType.addPin:
			const location = action.payload;
			resultsList = state.resultsList.slice();
			resultsList.push(location);
			return {
				...state,
				resultsList,
			};

		case ActionType.updateField:
			updatedForm = {...state.inputForm};
			updatedForm[action.payload.fieldName] = action.payload.newValue;
			return {
				...state,
				inputForm: updatedForm
			}
		default:
			return state;
	}
};

export default mapReducer;
