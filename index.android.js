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
    render() {
        return (
            <Expenses />
        )
    }
}

AppRegistry.registerComponent('expenses', () => ExpensesManager);
