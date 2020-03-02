import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';

class ProjectTasks extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                
                <ScrollView>
                    <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text h4>Project 1</Text>
                        <Button round style={ styles.quickAddTaskBtn } onPress={() => this.props.navigation.navigate('AddNewTask')}>
                            <Text style={{ color: 'white'}}>Quick Add Task</Text>
                        </Button>
                    </Block>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditTask')} >
                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h4 style={{ marginBottom: 20 }}>Task 1</Text>
                                    <Text>Assign to:</Text>
                                    <Text style={{ color: 'grey'}}>Jony Leo</Text>
                                    <Text>Task Details:</Text>
                                    <Text style={{ color: 'grey'}}>Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Latest Comments </Text>
                                    <Text style={{ color: 'grey'}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                </Block>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>Status</Text>
                                <Text style={{ color: 'grey', marginBottom: 30 }}>Lorem</Text>
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
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
                    </TouchableOpacity>
                    
                    <Block style={ styles.card }>
                        <View style={{ flex: 2, marginRight: 10 }}>
                            <Block style={{ flexDirection: 'column' }}>
                                <Text h4 style={{ marginBottom: 20 }}>Task 2</Text>
                                <Text>Assign to:</Text>
                                <Text style={{ color: 'grey'}}>Jony Leo</Text>
                                <Text>Task Details:</Text>
                                <Text style={{ color: 'grey'}}>Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                <Text>Latest Comments </Text>
                                <Text style={{ color: 'grey'}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                            </Block>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>Status</Text>
                            <Text style={{ color: 'grey', marginBottom: 30 }}>Lorem</Text>
                            <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
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
    }   
});

export default ProjectTasks;