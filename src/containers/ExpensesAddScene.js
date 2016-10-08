import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import ExpensesHeader from '../components/ExpensesHeader'
import ExpensesAddForm from '../components/ExpensesAddForm'

class ExpensesAddScene extends Component {
    render() {
        return (
            <View>
                <ExpensesHeader />
                <View>
                    <ExpensesAddForm />
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
)(ExpensesAddScene)
