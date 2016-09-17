import { StyleSheet } from 'react-native'

export const expensesStyle = StyleSheet.create({
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

export const expensesHeaderStyle = StyleSheet.create({
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

export const expensesToolbarStyle = StyleSheet.create({
    view: {
        flex: 0.5,
        backgroundColor: 'gray'
    },
    addExpense: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})

export const expensesContentStyle = StyleSheet.create({
    view: {
        flex: 7
    },
    text: {
        color: 'black',
        fontSize: 20
    }
});
