import { combineReducers } from 'redux'
import settingsReducer from './settings'
import expensesReducer from './expenses'

const rootReducer = combineReducers({
    settings: settingsReducer,
    expenses: expensesReducer
});

export default rootReducer