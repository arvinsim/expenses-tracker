import { Map } from 'immutable'

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
const initialState = Map({
    currency: 'NZD'
})

const settingsReducer = function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CURRENCY:
            state = state.set('currency', action.currency)
        default:
            return state
    }
}

export default settingsReducer
