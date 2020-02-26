import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
//import DrawerLeft from '../../common/DrawerLeft';

class TasksInProgress extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                {/*<DrawerLeft />*/}
                <ScrollView>
                    <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text h4>Organization 1</Text>
                    </Block>
                    <Block style={ styles.btnGroup } >
                        <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                            <Text style={ styles.text }>Open</Text>
                        </Button>
                        <Button style={ styles.btnActive } >
                            <Text style={ styles.textActive }>In Progress</Text>
                        </Button>
                        <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksBlocked')}>
                            <Text style={ styles.text }>Blocked</Text>
                        </Button>
                        <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksCompleted')}>
                            <Text style={ styles.text }>Completed</Text>
                        </Button>
                        
                    </Block>
                    
                    <Block style={ styles.card }>
                        <Block style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 3</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Task Details:</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Latest Comments </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                    <Text>Owner / User</Text>
                                    <Text muted style={ styles.textBackground } >Lorem Ipsum</Text>
                                </Block>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button round style={ styles.addExpenseBtn }>
                                    <Text>Add Expense</Text>
                                </Button>
                                
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Block>
                                        <Text style={{ marginTop: 10 }}>Total Expense</Text>
                                        <Text h4 style={ styles.expenses }>1000/-</Text>
                                    </Block>
                                    <Block>
                                        <Text>Status</Text>
                                        <Text style={{ fontSize: 13 }}>Lorem ipsum</Text>
                                    </Block>
                                    <Block>
                                        <Text>Due Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>Start Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>End Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                </Block>
                            </View>
                        </Block>
                        <Block style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -30, marginBottom: -40 }}>
                            <Button round style={ styles.blockedBtn } onPress={() => this.props.navigation.navigate('ConvertToBlock')}>
                                <Text style={{ color: 'rgb(68,125,132)' }}>Block Task</Text>
                            </Button>
                            <Button round style={ styles.completedBtn } onPress={() => this.props.navigation.navigate('ConvertToComplete')}>
                                <Text style={{ color: 'white' }}>Task Completed</Text>
                            </Button>
                        </Block>
                    </Block>

                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                                <Text h5>Tasks</Text>
                            </Button>
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        overflow: 'scroll',
        paddingHorizontal: 10
    },
    quickAddTaskBtn: {
        width: '48%',
        backgroundColor: 'rgb(77,176,188)'
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 15,
        backgroundColor: 'rgb(190,222,226)',
        padding: 13,
        borderRadius: 10
    },
    dates: {
        backgroundColor: 'rgb(213,234,236)', 
        paddingHorizontal: 10,
        borderRadius: 5
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
    addExpenseBtn: {
        backgroundColor: 'rgb(217,242,245)',
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgb(130,137,138)'
    },
    blockedBtn: {
        backgroundColor: 'rgb(217,242,245)',
        width: '48%',
        marginVertical: 50,
        borderWidth: 1,
        borderColor: 'rgb(68,125,132)'
    },
    completedBtn: {
        backgroundColor: 'rgb(77,176,188)',
        width: '48%',
        marginVertical: 50,
        borderColor: 'rgb(95,143,149)',
        borderWidth: 1
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
    }
});

export default TasksInProgress;