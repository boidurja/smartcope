import React, { Component } from 'react';
import { Text, Block } from 'galio-framework';
import { StyleSheet } from 'react-native';
import Header from '../../common/Header';

class MyAccount extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="My Account" navigation={this.props.navigation} />
                <Text>My Account Screen</Text>
            </Block>
        );
    }

}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        paddingHorizontal: 10
    }
})

export default MyAccount;