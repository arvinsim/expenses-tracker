import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

import ExpensesShowScene from './ExpensesShowScene'
import ExpensesAppNavigator from './ExpensesAppNavigator'

class ExpensesApp extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <ExpensesAppNavigator
                navigationState={this.props.navigationState}
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

