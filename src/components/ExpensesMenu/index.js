import React, { Component, PropTypes } from 'react'
import {
    Text,
    TextInput,
    ListView,
    TouchableHighlight,
    Picker
} from 'react-native'
import

class ExpensesMenu extends Component {
    render() {
        return (
            <SideMenu menu={menu}>
            <ListView>
                <TouchableHighlight>
                    <Text>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Add Form</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>About</Text>
                </TouchableHighlight>
            </ListView>
        )
    }
}

export default ExpensesMenu
