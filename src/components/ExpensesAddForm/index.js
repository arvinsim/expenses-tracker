import React, { Component, PropTypes } from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

class ExpensesAddForm extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>ExpensesAddForm</Text>
                <TouchableHighlight onPress={this.props.actions.onBack}>
                    <Text>GO BACK</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

ExpensesAddForm.propTypes = {}
ExpensesAddForm.defaultProps = {}

export default ExpensesAddForm