import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = props => {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20
    }

});

export default Footer;