import React, { Component } from 'react';
import { Card, Text, Block, Button } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import { Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
//import Footer from '../../common/Footer';

const height = Dimensions.get('window').height - 147;

class TeamMemberScreen extends Component {
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
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 1</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block style={ styles.leftSpaceBetween}>
                                        <Ionicons name="md-radio-button-off" style={ styles.cardIcon }></Ionicons>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>Task 2</Text>
                                            <Text muted>02-11-2010</Text>
                                        </Block>
                                    </Block>
                                    <Block>
                                        <Button style={ styles.startBtn } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                                            Start
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        {/*<Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text h4>Organization 1</Text>
                        </Block>
                        <Block style={ styles.btnGroup } >
                            <Button style={ styles.btnActive } >
                                <Text style={ styles.textActive }>Open</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                                <Text style={ styles.text }>In Progress</Text>
                            </Button>
                            <Button style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksBlocked')}>
                                <Text style={ styles.text }>Blocked</Text>
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
                                    <Text>Task Details:</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Latest Comments </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
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
                                    <Button round style={ styles.startTaskBtn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                                        <Text style={{ color: 'white' }}>Start Task</Text>
                                    </Button>
                                </Block>
                            </View>
                        </Block>
                    
                        <Block style={ styles.card }>
                            <View style={{ flex: 2, marginRight: 10 }}>
                                <Block style={{ flexDirection: 'column' }}>
                                    <Text h5 style={{ marginBottom: 20 }}>Project 2</Text>
                                    <Text>Task name</Text>
                                    <Text muted style={ styles.textBackground } >Lorem</Text>
                                    <Text>Task Details:</Text>
                                    <Text muted style={ styles.textBackground } >Lor em ip s um Lo r em i ps um L or em ips um Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>
                                    <Text>Latest Comments </Text>
                                    <Text muted style={ styles.textBackground } >Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</Text>
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
                                    <Button round style={ styles.startTaskBtn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                                        <Text style={{ color: 'white' }}>Start Task</Text>
                                    </Button>
                                </Block>
                            </View>
                        </Block>*/}
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
                </ScrollView>
                <Block style={ styles.btnBlock }>
                    <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TeamMember')}>
                        <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgressTM')}>
                        <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlockedTM')}>
                        <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompletedTM')}>
                        <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        overflow: 'scroll',
        paddingHorizontal: 0
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
        marginTop: -30
    },
    iconStyle: {
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: Colors.iconBackground
    },
    startBtn: {
        backgroundColor: Colors.addBtn,
        width: 100,
        borderRadius: 10,
        marginTop: -30,
        shadowOffset: { width: 0, height: 12 },
        shadowColor: 'blue',
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 24
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

export default TeamMemberScreen;