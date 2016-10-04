import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import ExpensesHeader from '../components/ExpensesHeader'
import ExpensesList from '../components/ExpensesList'

class ExpensesShowScene extends Component {
    render() {
        return (
            <View>
                <ExpensesHeader />
                <View>
                    <ExpensesList {...this.props} />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        currency: state.settings.currency
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesShowScene)
