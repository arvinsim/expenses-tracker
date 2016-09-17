import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ListView
} from 'react-native';
import {
    expensesStyle,
    expensesHeaderStyle,
    expensesContentStyle
} from './style.js'


class ExpensesHeader extends Component {
    render() {
        return (
            <View style={expensesHeaderStyle.view}>
                <Text numberOfLines={5} style={expensesHeaderStyle.text}>Expenses Manager</Text>
            </View>
        );
    }
};

class ExpensesList extends Component {
    constructor(props) {
        super(props);
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
                                <Text style={expensesStyle.amount}>PHP {rowData.amount}</Text>
                                <Text style={expensesStyle.type}>{rowData.type}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        )
    }
}

class ExpensesContent extends Component {
    render() {
        return (
            <View style={expensesContentStyle.view}>
                <ExpensesList />
            </View>
        );
    }
};

export class Expenses extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ExpensesHeader />
                <ExpensesContent />
            </View>
        );
    }
};

