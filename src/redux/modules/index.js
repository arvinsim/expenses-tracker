import { combineReducers } from 'redux'

import settingsReducer from './settings'
import expensesReducer from './expenses'
import navigationStateReducer from './navigationState'

const rootReducer = combineReducers({
    settings: settingsReducer,
    expenses: expensesReducer,
    navigationState: navigationStateReducer
});

export default rootReducer