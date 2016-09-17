/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Expenses } from './js/components/Expenses'

class ExpensesManager extends Component {
  render() {
    return (
        <Expenses />
    );
  }
}

AppRegistry.registerComponent('expenses', () => ExpensesManager);
