/*
import { Expenses } from './js/components/Expenses/index.js'
import { ExpensesAdd } from './js/components/ExpensesAdd/index.js'

class ExpensesManager extends Component {
    renderScene(route, navigator) {
        if (route.index === 0) {
            // Home
            return (
                <Expenses
                    onAddExpense={() => {
                        const nextIndex = 1
                        navigator.push({
                            index: nextIndex
                        })
                    }}

                    />
            )
        } else if (route.index === 1) {
            // Add Expense
            return (
                <ExpensesAdd
                    // Function to call to go back to the previous scene
                    onBack={() => {
                        if (route.index > 0) {
                            navigator.pop();
                        }
                    }}
                    />
            )
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={ this.renderScene }
                />
        )
    }
}
*/

import React, { Component } from 'react'
import { View } from 'react-native'
import ExpensesHeader from '../components/ExpensesHeader'

class ExpensesApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <ExpensesHeader />
            </View>
        )
    }
}

export default ExpensesApp
