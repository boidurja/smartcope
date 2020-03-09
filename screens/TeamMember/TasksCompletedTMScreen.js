import React, { Component } from 'react';
import { Card, Text, Block, Button } from 'galio-framework';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const height = Dimensions.get('window').height - 147;

class TasksCompletedTM extends Component {

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
                <Header title="Organization 1" />
                
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
                        {/*<Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text h4>Organization 1</Text>
                        </Block>
                        <Block style={ styles.btnGroup } >
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                                <Text style={ styles.text }>Open</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                                <Text style={ styles.text }>In Progress</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksBlocked')}>
                                <Text style={ styles.text }>Blocked</Text>
                            </Button>
                            <Button style={ styles.btnActive }>
                                <Text style={ styles.textActive }>Completed</Text>
                            </Button>
                            
                        </Block>
                        
                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 1</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Task Details:</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Assigned to </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum </Text>
                                </Block>
                            </View>
                            <View>
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Block>
                                        <Text style={{ marginTop: 10 }}>Total Expense</Text>
                                        <Text h4 style={ styles.expenses }>1000/-</Text>
                                    </Block>
                                    <Block>
                                        <Text>Start Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>Complete Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                </Block>
                            </View>
                        </Block>
                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 1</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Task Details:</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Assigned to </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum </Text>
                                </Block>
                            </View>
                            <View>
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Block>
                                        <Text style={{ marginTop: 10 }}>Total Expense</Text>
                                        <Text h4 style={ styles.expenses }>1000/-</Text>
                                    </Block>
                                    <Block>
                                        <Text>Start Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>Complete Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                </Block>
                            </View>
                        </Block>*/}
                    </Block>
                </ScrollView>
                <Block style={ styles.btnBlock }>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TeamMember')}>
                        <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                        <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlockedTM')}>
                        <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                    </Button>
                    <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompletedTM')}>
                        <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                    </Button>
                </Block>
                    {/*<Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                                <Text h5>Tasks</Text>
                            </Button>
                        </Block>
                    </Block>*/}
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
        marginTop: 1,
        marginHorizontal: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 12 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 24
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
    },
    expenses: {
        backgroundColor: 'rgb(213,234,236)', 
        paddingHorizontal: 10,
        borderRadius: 5
    },
    btnGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: '24.5%',
        backgroundColor: 'rgb(190,222,226)'
    },
    btnActive: {
        backgroundColor: 'rgb(77,176,188)',
        width: '24.5%'
    },
    textActive: {
        color: 'white'
    },
    text: {
        color: 'rgb(48,114,122)'
    },
    textBackground: {
        backgroundColor: 'rgb(213,234,236)', 
        padding: 5,
        borderRadius: 5
    },
    startTaskBtn: {
        backgroundColor: 'rgb(77,176,188)',
        width: '100%'
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    footerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerBtn: {
        width: '49%',
        backgroundColor: 'rgb(238,244,248)',
    }*/
    btnBlock: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 45
    },
    centering: {
        width: '25%'
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

export default TasksCompletedTM;