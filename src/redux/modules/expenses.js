// Actions
const LOAD_EXPENSES = 'expenses-tracker/expenses/LOAD_EXPENSES'
const EDIT_EXPENSES = 'expenses-tracker/expenses/EDIT_EXPENSES'

// Action Creator
export function loadExpenses() {
    return { type: LOAD_EXPENSES }
}

export function editExpense(id) {
    console.log('The id of the list item is ');
    console.log(id)
    return { type: EDIT_EXPENSES }
}

// Reducer
const initialState = {
    items: []
}

const expensesReducer = function(state = initialState, action) {
    switch(action.type) {
        case LOAD_EXPENSES:
            return state
        default:
            return state
    }
}

export default expensesReducer
