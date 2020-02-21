import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 10,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20
    }

});

export default Header;