import React, { Component } from 'react';
import { Text, Block, Card, Button } from 'galio-framework';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class TaskNotes extends Component {

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Project 1" />

            </Block>
        )
    }
}

const styles = StyleSheet.create({

})


export default TaskNotes;