import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
//import { Header } from 'react-native/Libraries/NewAppScreen';


export default function Header(props) {
    return (
        <Block style={ styles.header }>
            <Ionicons name="md-menu" size={32} color="grey" onPress={() => this.props.navigation.openDrawer()}/>
            <Text style={ styles.title }>{ props.title }</Text>
        </Block>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        flexDirection: 'row',
        paddingLeft: 10
    },
    title: {
        marginLeft: 50,
        marginTop: 6
    }
});