/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Expenses } from './js/components/Expenses'
import { ExpensesAdd } from './js/components/ExpensesAdd'

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

AppRegistry.registerComponent('expenses', () => ExpensesManager);
