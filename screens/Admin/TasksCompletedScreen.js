import React, { Component } from 'react';
import { Card, Text, Block, Button } from 'galio-framework';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const height = Dimensions.get('window').height - 147;

class TasksCompleted extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" />
                
                <ScrollView>
                    <Block style={{ minHeight: height }}>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-checkmark-circle" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 1</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
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
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                        <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                        <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlocked')}>
                        <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                    </Button>
                    <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompleted')}>
                        <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('Admin')}>
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

export default TasksCompleted;