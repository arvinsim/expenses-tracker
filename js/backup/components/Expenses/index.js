import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';
import {
    expensesStyle,
    expensesHeaderStyle,
    expensesToolbarStyle,
    expensesContentStyle
} from './style.js'
import { API_EXPENSES } from '../../constants/api.js'


class ExpensesHeader extends Component {
    render() {
        return (
            <View style={expensesHeaderStyle.view}>
                <Text numberOfLines={5} style={expensesHeaderStyle.text}>Expenses Manager</Text>
            </View>
        )
    }
}


class ExpensesList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            expenses: ds
        }

        /*
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            expenses: ds.cloneWithRows([
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00},
                {date: '9/11/2016', type: 'food', amount: 9.00},
                {date: '9/20/2016', type: 'transportation', amount: 34.00}
            ])
        }
        */
    }

    componentDidMount() {
        this.getExpenses().done()
    }

    async getExpenses() {
        const response = await this.ajaxExpensesRequest()
        const results = response.results
        const ds = new ListView.DataSource({
            rowHasChanged: function (prevRowData, nextRowData) {
                return prevRowData !== nextRowData
            }
        })
        this.setState({expenses: ds.cloneWithRows(results)})
    }

    async ajaxExpensesRequest() {
        try {
            console.log('API_EXPENSES: %s', API_EXPENSES)
            let response = await fetch(API_EXPENSES)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.expenses}
                renderRow={(rowData) => {
                    return (
                        <View style={expensesStyle.row}>
                            <Text style={expensesStyle.date}>{rowData.date}</Text>
                            <View style={expensesStyle.details}>
                                <Text style={expensesStyle.amount}>PHP {rowData.price}</Text>
                                <Text style={expensesStyle.type}>{rowData.category}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        )
    }
}

class ExpensesToolbar extends Component {
    render() {
        return (
            <View style={expensesToolbarStyle.view}>
                <TouchableHighlight onPress={this.props.onAddExpense}>
                    <Text style={expensesToolbarStyle.addExpense}>Add Expense</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class ExpensesContent extends Component {
    render() {
        return (
            <View style={expensesContentStyle.view}>
                <ExpensesList />
            </View>
        )
    }
};

export class Expenses extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ExpensesHeader />
                <ExpensesToolbar {...this.props} />
                <ExpensesContent />
            </View>
        );
    }
};
