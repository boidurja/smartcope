import React from 'react';
import { Text, Block } from 'galio-framework';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {

    return (
        <Block style={ styles.header }>
            <Block>
                <Ionicons name="md-menu" size={32} color="grey" onPress={() => props.navigation.openDrawer()} />
                <Text style={ styles.title } p>{ props.title }</Text>
            </Block>
            <Block>
                <Ionicons name="md-search" size={32} color="grey" />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 50,
        marginTop: -28
    }
});