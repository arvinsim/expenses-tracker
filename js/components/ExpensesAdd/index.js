import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'
import { expensesAddToolbarStyle } from './style.js'

class ExpensesAddHeader extends Component {
    render() {
        return (
            <View>
                <Text>Add Expense</Text>
            </View>
        )
    }
}

class ExpensesAddToolbar extends Component {
    render() {
        return (
            <View style={expensesAddToolbarStyle.view}>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text style={expensesAddToolbarStyle.back}>Back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class ExpensesAddForm extends Component {
    render() {
        return (
            <View>
                <Text>Add Expense Form goes Here</Text>
            </View>
        )
    }
}

class ExpensesAddContent extends Component {
    render() {
        return (
            <View>
                <ExpensesAddForm />
            </View>
        )
    }
}

export class ExpensesAdd extends Component {
    render() {
        return (
            <View>
                <ExpensesAddHeader />
                <ExpensesAddToolbar {...this.props} />
                <ExpensesAddContent />
            </View>
        )
    }
}
