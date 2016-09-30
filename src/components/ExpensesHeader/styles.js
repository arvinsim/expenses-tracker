import { StyleSheet } from 'react-native'

const expensesHeaderStyle = StyleSheet.create({
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
})

export default expensesHeaderStyle
