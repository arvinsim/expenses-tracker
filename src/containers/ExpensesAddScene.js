import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { routePop } from '../redux/modules/navigationState'

import ExpensesHeader from '../components/ExpensesHeader'
import ExpensesAddForm from '../components/ExpensesAddForm'

class ExpensesAddScene extends Component {
    render() {
        return (
            <View>
                <ExpensesHeader />
                <View>
                    <ExpensesAddForm {...this.props} />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            onBack: () => {
                dispatch(routePop())
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesAddScene)
