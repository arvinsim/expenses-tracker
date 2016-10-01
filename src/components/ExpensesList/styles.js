import { StyleSheet } from 'react-native'

const expensesStyle = StyleSheet.create({
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
})

export default expensesStyle
