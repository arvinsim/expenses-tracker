import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ListView
} from 'react-native';


class HomepageHeader extends Component {
    render() {
        return (
            <View style={header.view}>
                <Text numberOfLines={5} style={header.text}>Expenses Manager</Text>
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
                        <View style={expensesList.row}>
                            <Text style={expensesList.date}>{rowData.date}</Text>
                            <View style={expensesList.details}>
                                <Text style={expensesList.amount}>PHP {rowData.amount}</Text>
                                <Text style={expensesList.type}>{rowData.type}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        )
    }
}

class HomepageContent extends Component {
    render() {
        return (
            <View style={content.view}>
                <ExpensesList />
            </View>
        );
    }
};

export class HomePage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HomepageHeader />
                <HomepageContent />
            </View>
        );
    }
};

const header = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'lightskyblue'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlignVertical: 'center', // TODO: Not working
        textAlign: 'center',
        marginTop: 20
    }
});

const expensesList = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    date: {
        flex: 1,
        fontSize: 28,
        color: 'gray'
    },
    details: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    type: {
        flex: 1,
        fontSize: 12,
        textAlignVertical: 'center'
    },
    amount: {
        flex: 1,
        color: 'green',
        fontSize: 28,
        textAlignVertical: 'center'
    }
});

const content = StyleSheet.create({
    view: {
        flex: 7
    },
    text: {
        color: 'black',
        fontSize: 20
    }
});
