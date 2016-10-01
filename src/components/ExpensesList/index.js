import React, { Component, PropTypes } from 'react'
import {
    Text,
    View,
    ListView
} from 'react-native'
import expensesStyle from './styles'

class ExpensesList extends Component {
    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(this.props.expenses)
        return (
            <ListView
                dataSource={ds}
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

ExpensesList.propTypes = {
    expenses: PropTypes.array
}

ExpensesList.defaultProps = {
    expenses: [
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00},
        {date: '9/11/2016', category: 'food', price: 9.00},
        {date: '9/20/2016', category: 'transportation', price: 34.00}
    ]
}

export default ExpensesList
