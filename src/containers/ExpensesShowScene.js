import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { editExpense } from '../redux/modules/expenses'

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
        currency: state.settings.get('currency')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            onExpenseListItemClick: (rowData) => {
                dispatch(editExpense(rowData.id))
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesShowScene)
