import React, { Component } from 'react';
import { Card, Text, Block, Button } from 'galio-framework';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const height = Dimensions.get('window').height - 147;

class TasksCompletedSA extends Component {

    state = {
        TaskNames: [
            {
                "name": "Task 1"
            },
            {
                "name": "Task 2"
            },
            {
                "name": "Task 3"
            },
            {
                "name": "Task 4"
            },
            {
                "name": "Task 5"
            },
            {
                "name": "Task 6"
            },
            {
                "name": "Task 7"
            },
            {
                "name": "Task 8"
            },
            {
                "name": "Task 9"
            },
            {
                "name": "Task 10"
            },
            {
                "name": "Task 11"
            },
        ]
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" navigation={this.props.navigation}/>
                
                <ScrollView>
                    <Block style={{ minHeight: height }}>
                        { this.state.TaskNames.map((item, index) => { 
                            return (
                                <TouchableOpacity>
                                    <Card borderless style={ styles.cardStyle } >
                                        <Block style={ styles.spaceBetween}>
                                            <Block style={ styles.leftSpaceBetween}>
                                                <Ionicons name="md-checkmark-circle" style={ styles.cardIcon }></Ionicons>
                                                <Block>
                                                    <Text h5 style={ styles.textStyle }>{ item.name }</Text>
                                                    <Text muted>02-11-2010</Text>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Card>
                                </TouchableOpacity>
                            )
                        })}
                    </Block>
                </ScrollView>
                <Block style={ styles.btnBlock }>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksOpenSA')}>
                        <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgressSA')}>
                        <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlockedSA')}>
                        <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                    </Button>
                    <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompletedSA')}>
                        <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('Projects')}>
                        <Ionicons name="md-laptop" style={ styles.openIcon }></Ionicons>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        overflow: 'scroll'
    },
    cardStyle: {
        padding: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 1,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 5
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -30
    },
    leftSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        marginTop: -30
    },
    cardIcon: {
        fontSize: 40,
        marginRight: 30,
        marginTop: -30,
        color: Colors.greenIcon
    },
   
    btnBlock: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 45
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
});

export default TasksCompletedSA;