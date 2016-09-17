import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {} from './style.js'

class ExpensesAddHeader extends Component {
    render() {
        return (
            <View>
<Text>Add Expense</Text>
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
                <ExpensesAddContent />
            </View>
        )
    }
}
