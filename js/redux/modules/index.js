import { combineReducers } from 'redux'
import expensesReducer from './expenses'

const rootReducer = combineReducers({
    expenses: expensesReducer
});

export default rootReducer