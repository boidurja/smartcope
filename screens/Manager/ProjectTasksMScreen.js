import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../common/Header';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const height = Dimensions.get('window').height - 147;

class ProjectTasksM extends Component {

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
            }
        ]
    }
    
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Project 1" />
                    <Block style={ styles.btnPosition }>
                        <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewTaskM')} >
                            <Text style={ styles.btnText }>
                                Add
                            </Text>
                        </Button>
                    </Block>
                    <ScrollView>
                        <Block style={ styles.footerAtBottom }>
                            { this.state.TaskNames.map((item, index) => { 
                                return (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TaskDetailsM')}>
                                        <Card borderless style={ styles.cardStyle } >
                                            <Block style={ styles.spaceBetween}>
                                                <Block style={ styles.leftSpaceBetween}>
                                                    <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                                    <Block>
                                                        <Text h5 style={ styles.textStyle }>{ item.name }</Text>
                                                        <Text muted>02-11-2010</Text>
                                                    </Block>
                                                </Block>
                                                <Block>
                                                    <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } >
                                                    </Button>
                                                </Block>
                                            </Block>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            })}
                        </Block>
                    </ScrollView>

                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Manager')}>
                                <Ionicons name="md-laptop" style={ styles.icon } />
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpenM')}>
                            <Ionicons name="md-calendar" style={ styles.icon } />
                                <Text h5>Tasks</Text>
                            </Button>
                        </Block>
                    </Block>
                
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        overflow: 'scroll'
    },
    footerAtBottom: {
        minHeight: height
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
    iconStyle: {
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: Colors.iconBackground
    },
    cardIcon: {
        fontSize: 40,
        marginRight: 30,
        marginTop: -30
    },
    orangeIcon: {
        fontSize: 40,
        marginRight: 30,
        marginTop: -30,
        color: Colors.orangeIcon
    },
    redIcon: {
        fontSize: 40,
        marginRight: 30,
        marginTop: -30,
        color: Colors.redIcon
    },
    greenIcon: {
        fontSize: 40,
        marginRight: 30,
        marginTop: -30,
        color: Colors.greenIcon
    },
    /*quickAddTaskBtn: {
        width: '48%',
        backgroundColor: 'rgb(77,176,188)'
    },
    card: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: 'rgb(190,222,226)',
        padding: 13,
        borderRadius: 10
    },
    dates: {
        backgroundColor: 'rgb(213,234,236)', 
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 14
    },*/

    btnPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    addBtn: {
        backgroundColor: Colors.addBtn,
        width: '26%',
        height: 32,
        marginBottom: 10,
        marginRight: 10
    },
    btnText: {
        color: Colors.btnText
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 45
    },
    footerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerBtn: {
        width: '49%',
        backgroundColor: Colors.footerBtnColor,
        flexDirection: 'row'
    },
    icon: {
        fontSize: 25,
        marginRight: 8
    }
});

export default ProjectTasksM;