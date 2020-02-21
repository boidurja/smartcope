import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';

class Home extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            
            <Text>Home Screen</Text>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    }
});

export default Home;