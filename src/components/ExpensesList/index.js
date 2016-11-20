import React, { Component, PropTypes } from 'react'
import {
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native'
import expensesStyle from './styles'

class ExpensesList extends Component {
    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(this.props.expenses);
        return (
            <ListView
                dataSource={ds}
                renderRow={(rowData) => {
                    return (
                        <TouchableHighlight onPress={ this.props.actions.onExpenseListItemClick.bind(this, rowData) }>
                            <View style={expensesStyle.row}>
                                <Text style={expensesStyle.date}>{rowData.date}</Text>
                                        <View style={expensesStyle.details}>
                                            <Text style={expensesStyle.amount}>{this.props.currency} {rowData.price}</Text>
                                            <Text style={expensesStyle.type}>{rowData.category.name}</Text>
                                        </View>
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />
        )
    }
}

ExpensesList.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }).isRequired,
        price: PropTypes.number.isRequired
    })),
    currency: PropTypes.string
}

ExpensesList.defaultProps = {
    expenses: [
        { id: 1, date: '9/11/2016', category: { id: 1, name: 'food' }, price: 9.00},
        { id: 2, date: '9/20/2016', category: { id: 2, name: 'transportation' }, price: 34.00},
        { id: 3, date: '9/21/2016', category: { id: 3, name: 'entertainment' }, price: 17.00}
    ]
}

export default ExpensesList
