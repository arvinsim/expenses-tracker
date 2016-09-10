import React, { Component } from 'react';
import {
    Text,
    View,
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
                {date: '9/11/2016', amount: 9.00},
                {date: '9/20/2016', amount: 34.00}
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
                            <Text style={expensesList.namr}>{rowData.amount}</Text>
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
        flexDirection: 'row'
    },
    date: {
        flex: 1
    },
    amount: {
        flex: 1
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
