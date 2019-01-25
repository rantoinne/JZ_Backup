import { combineReducers } from 'redux';
import visitorsReducer from './VisitorsReducer';
import profileReducer from './ProfileReducer';
import phoneBookReducer from './PhoneBookReducer';

const rootReducer = combineReducers({
	visitorsReducer: visitorsReducer,
	profileReducer: profileReducer,
	phoneBookReducer: phoneBookReducer
})

export default rootReducer
