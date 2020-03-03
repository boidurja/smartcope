import React, { Component } from 'react';
import { Card, Text, Block, Button } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class Footer extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Block style={ styles.centering }>
                    <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                </Block>
                <Block style={ styles.centering }>
                    <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                </Block>
                <Block style={ styles.centering }>
                    <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                </Block>
                <Block style={ styles.centering }>
                    <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                </Block>
                <Block style={ styles.centering }>
                    <Ionicons name="md-laptop" style={ styles.openIcon }></Ionicons>
                </Block>
            </Block>



        )
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    centering: {
        width: '20%'
    },
    openIcon: {
        fontSize: 40,
        textAlign: 'center'
    },
    orangeIcon: {
        fontSize: 40,
        textAlign: 'center',
        color: Colors.orangeIcon
    },
    redIcon: {
        fontSize: 40,
        textAlign: 'center',
        color: Colors.redIcon
    },
    greenIcon: {
        fontSize: 40,
        textAlign: 'center',
        color: Colors.greenIcon
    }
})

export default Footer;