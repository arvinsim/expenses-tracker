import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//import { editExpense } from '../redux/modules/expenses'
import { routePush, ROUTE_EXPENSES_ADD } from '../redux/modules/navigationState'

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
        currency: state.settings.get('currency'),
        navigationState: state.navigationState.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            onExpenseListItemClick: (rowData) => {
                dispatch(routePush(ROUTE_EXPENSES_ADD))
                //dispatch(editExpense(rowData.id))
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesShowScene)
