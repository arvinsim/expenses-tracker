// Actions
const LOAD_EXPENSES = 'expenses-tracker/expenses/LOAD_EXPENSES'

// Action Creator
export function loadExpenses() {
    return { type: LOAD_EXPENSES }
}

// Reducer
const initialState = {}

const expensesReducer = function(state = initialState, action) {
    switch(action.type) {
        case LOAD_EXPENSES:
            return state
        default:
            return state
    }
}

export default expensesReducer
