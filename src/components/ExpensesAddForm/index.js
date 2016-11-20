import React, { Component, PropTypes } from 'react'
import {
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Picker
} from 'react-native'

import expensesAddFormStyles from './styles'

class ExpensesAddForm extends Component {
    render() {
        return (
            <View>
                <Text>ExpensesAddForm</Text>
                <TouchableHighlight onPress={this.props.actions.onBack}>
                    <Text>GO BACK</Text>
                </TouchableHighlight>

                <View>
                    <View>
                        <Text>Date:</Text>
                        <TouchableHighlight onPress={()=>{}}>
                            <Text>Pick Time</Text>
                        </TouchableHighlight>
                    </View>

                    <View>
                        <Text>Category:</Text>
                        <Picker
                            onValueChange={()=>{}}>
                            <Picker.Item label="Food" value="1" />
                            <Picker.Item label="Transportation" value="2" />
                            <Picker.Item label="Entertainment" value="3" />
                        </Picker>
                    </View>

                    <View>
                        <Text>Amount:</Text>
                        <TextInput
                            placeholder="Enter Amount"
                        />
                    </View>

                    <TouchableHighlight>
                        <Text>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

ExpensesAddForm.propTypes = {}
ExpensesAddForm.defaultProps = {}

export default ExpensesAddForm