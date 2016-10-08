import { Map, List } from 'immutable'
import { NavigationExperimental } from 'react-native'
const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental

// Navigation States Constants
export const ROUTE_EXPENSES_SHOW = 'expenses-tracker/navigation/ROUTE_EXPENSES_SHOW'
export const ROUTE_EXPENSES_ADD = 'expenses-tracker/navigation/ROUTE_EXPENSES_ADD'

// Actions
const ROUTE_PUSH = 'expenses-tracker/navigation/ROUTE_PUSH'
const ROUTE_POP = 'expenses-tracker/navigation/ROUTE_POP'

// Action Reducers
export function routePush(route) {
    return {
        type: ROUTE_PUSH,
        payload: {
            route: { key: route }
        }
    }
}

export function routePop() {
    return { type: ROUTE_POP }
}

// Reducers
const initialState = Map({
    index: 0,
    routes: [{key: ROUTE_EXPENSES_SHOW}]
})

const navigationStateReducer = function(state = initialState, action) {
    state = state.toJS()

    switch(action.type) {
        case ROUTE_PUSH:
            state = NavigationStateUtils.push(state, action.payload.route);
            return Map(state)
        case ROUTE_POP:
            state = NavigationStateUtils.pop(state);
            return Map(state)
        default:
            return Map(state)
    }
}

export default navigationStateReducer