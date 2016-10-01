import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import ExpensesHeader from '../components/ExpensesHeader'
import ExpensesList from '../components/ExpensesList'

class ShowExpensesScene extends Component {
    render() {
        return (
            <View>
                <ExpensesHeader />
                <View>
                    <ExpensesList />
                </View>
            </View>
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
)(ShowExpensesScene)
