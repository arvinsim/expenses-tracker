import React, { Component, PropTypes } from 'react'
import {
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Picker
} from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'

import expensesAddFormStyles from './styles'

class ExpensesAddForm extends Component {
    render() {
        return (
            <View>
                <Text>ExpensesAddForm</Text>
                <Button 
                    onPress={this.props.actions.onBack} 
                    title="Back"
                    backgroundColor="lightskyblue"
                />

                <View>
                    <View>
                        <FormLabel>Date:</FormLabel>
                        <FormInput>Pick Time</FormInput>
                    </View>

                    <View>
                        <FormLabel>Category:</FormLabel>
                        <Picker
                            onValueChange={()=>{}}>
                            <Picker.Item label="Food" value="1" />
                            <Picker.Item label="Transportation" value="2" />
                            <Picker.Item label="Entertainment" value="3" />
                        </Picker>
                    </View>

                    <View>
                        <FormLabel>Amount:</FormLabel>
                        <FormInput placeholder="Enter Amount" />
                    </View>

                    <Button icon={{ name: 'done' }} title="Save"/>
                </View>
            </View>
        )
    }
}

ExpensesAddForm.propTypes = {}
ExpensesAddForm.defaultProps = {}

export default ExpensesAddForm