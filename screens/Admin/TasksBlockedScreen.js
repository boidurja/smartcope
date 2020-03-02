import React, { Component } from 'react';
import { Text, Block, Button } from 'galio-framework';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../../common/Header';
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height - 147;

class TasksBlocked extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                <ScrollView>
                    <Block style={{ minHeight: height }}>
                        <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text h4>Organization 1</Text>
                        </Block>
                        <Block style={ styles.btnGroup } >
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                                <Text style={ styles.text }>Open</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                                <Text style={ styles.text }>In Progress</Text>
                            </Button>
                            <Button style={ styles.btnActive }>
                                <Text style={ styles.textActive }>Blocked</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksCompleted')}>
                                <Text style={ styles.text }>Completed</Text>
                            </Button>
                            
                        </Block>
                        
                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 1</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Assigned to</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps </Text>
                                    <Text>Task details </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem  Lorem ipsum Lorem ipsum Lorem  ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                </Block>
                            </View>
                            <View style={{ flex: 1 }}>
                                
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Block>
                                        <Text>Block Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>Reason</Text>
                                        <Text muted style={ styles.textBackground } >Lorem lore lorem loore ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                    </Block>
                                </Block>
                            </View>
                        </Block>

                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 2</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Assigned to</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps </Text>
                                    <Text>Task details </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem  Lorem ipsum Lorem ipsum Lorem  ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                </Block>
                            </View>
                            <View style={{ flex: 1 }}>
                                
                                <Block style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Block>
                                        <Text>Block Date</Text>
                                        <Text p style={ styles.dates }>03-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Text>Reason</Text>
                                        <Text muted style={ styles.textBackground } >Lorem lore lorem loore ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
                                    </Block>
                                </Block>
                            </View>
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
    }
});

export default TasksBlocked;