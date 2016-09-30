import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import expensesReducers from '../redux/modules/index'
import ExpensesApp from './ExpensesApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(expensesReducers)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ExpensesApp />
            </Provider>
        );
    }
}
