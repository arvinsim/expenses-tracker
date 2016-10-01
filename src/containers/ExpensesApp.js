import React, { Component } from 'react'
import { View, Navigator } from 'react-native'
import { connect } from 'react-redux';

import ShowExpensesScene from './ShowExpensesScene'

class ExpensesApp extends Component {
    renderScene(route, navigator) {
        if (route.index === 0) {
            // Home
            return (
                <View>
                    <ShowExpensesScene />
                </View>
            )
        } else if (route.index === 1) {
            // TODO: Add Expense
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

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesApp)

