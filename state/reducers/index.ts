import { combineReducers } from 'redux'
import mapReducer from './mapReducer'

const reducers = combineReducers({
  map: mapReducer
})

export default reducers;