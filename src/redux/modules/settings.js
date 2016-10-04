// Actions
const CHANGE_CURRENCY = 'expenses-tracker/settings/CHANGE_CURRENCY'

// Action Creator
export function changeCurrency(currency) {
    return {
        type: CHANGE_CURRENCY,
        currency: currency
    }
}

// Reducer
const initialState = {
    currency: 'NZD'
}

const settingsReducer = function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CURRENCY:
            state.currency = action.currency
            return Object.assign({}, state)
        default:
            return state
    }
}

export default settingsReducer
