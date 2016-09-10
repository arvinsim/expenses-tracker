import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
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

class HomepageContent extends Component {
    render() {
        return (
            <View style={content.view}>
                <Text style={content.text}>Content</Text>
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

const content = StyleSheet.create({
    view: {
        flex: 7
    },
    text: {
        color: 'black',
        fontSize: 20
    }
});
