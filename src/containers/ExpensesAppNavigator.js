import React, { Component } from 'react'
import { Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux';

import {
    ROUTE_EXPENSES_SHOW,
    ROUTE_EXPENSES_ADD,
    routePop
} from '../redux/modules/navigationState'

// Scenes
import ExpensesShowScene from './ExpensesShowScene'
import ExpensesAddScene from './ExpensesAddScene'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class ExpensesAppNavigator extends Component {
    constructor(props, context) {
        super(props, context)
        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        return (
            <NavigationCardStack
                onNavigateBack={this.props.routePop}
                navigationState={this.props.navigationState}
                renderScene={this._renderScene}
            />
        )
    }

    // Render a scene for route.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    // Here you could choose to render a different component for each route, but
    // we'll keep it simple.
    _renderScene(sceneProps) {
        let scene
        switch(sceneProps.scene.route.key) {
            case ROUTE_EXPENSES_SHOW:
                scene = (
                    <ExpensesShowScene
                        route={sceneProps.scene.route}
                        {...this.props}
                    />
                )
                break
            case ROUTE_EXPENSES_ADD:
                scene = (
                    <ExpensesAddScene
                        route={sceneProps.scene.route}
                        {...this.props}
                    />
                )
                break
        }
        return scene
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigationState.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesAppNavigator)
