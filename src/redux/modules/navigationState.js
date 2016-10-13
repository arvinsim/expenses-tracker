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

const navigationStateReducer = function(currentState = initialState, action) {
    currentState = currentState.toJS()

    switch(action.type) {
        case ROUTE_PUSH:
            currentState = NavigationStateUtils.push(currentState, action.payload.route);
            return Map(currentState)
        case ROUTE_POP:
            if (currentState.index > 0) {
                currentState = NavigationStateUtils.pop(currentState);
            }
            return Map(currentState)
        default:
            return Map(currentState)
    }
}

export default navigationStateReducer