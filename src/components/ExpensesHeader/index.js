import React, {
    Component,
    PropTypes
} from 'react'

import {
    Text,
    View
} from 'react-native'

import expensesHeaderStyle from './styles'

class ExpensesHeader extends Component {
    render() {
        const { numberOfLines, headerText } = this.props

        return (
            <View style={expensesHeaderStyle.view}>
                <Text
                    numberOfLines={numberOfLines}
                    style={expensesHeaderStyle.text}
                >
                    { headerText }
                </Text>
            </View>
        )
    }
}

ExpensesHeader.propTypes = {
    numberOfLines: PropTypes.number,
    headerText: PropTypes.string
}

ExpensesHeader.defaultProps = {
    numberOfLines: 5,
    headerText: 'Expenses Manager'
}

export default ExpensesHeader

