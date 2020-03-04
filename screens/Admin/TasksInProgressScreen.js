import React, { Component } from 'react';
import { Text, Block, Input, Button, Card, Icon } from 'galio-framework';
import { StyleSheet, View, ScrollView, Dimensions, Modal } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height - 147;

class TasksInProgress extends Component {

    state = {
        notesModalVisibility: false,
        addExpenseModalVisibility: false,
        blockTaskModalVisibility: false
    }

    setNotesModalVisible(visible) {
        this.setState({notesModalVisibility: visible});
    }
    setAddExpenseModalVisible(visible) {
        this.setState({addExpenseModalVisibility: visible})
    }
    setBlockTaskModalVisible(visible) {
        this.setState({blockTaskModalVisibility: visible})
    }

    cancelNotes() {
        this.setNotesModalVisible(false)
    }
    submitNotes() {
        this.setNotesModalVisible(false)
    }

    cancelAddExpense() {
        this.setAddExpenseModalVisible(false)
    }
    submitAddExpense() {
        this.setAddExpenseModalVisible(false)
    }

    cancelBlockTask() {
        this.setBlockTaskModalVisible(false)
    }
    submitBlockTask() {
        this.setBlockTaskModalVisible(false)
        this.props.navigation.navigate('TasksBlocked')
    }

    taskComplete() {
        this.props.navigation.navigate('TasksCompleted')
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" />
                <ScrollView>
                    <Block style={{ minHeight: height }}>
                        <Card borderless style={ styles.card } >
                            <Block style={ styles.row1 }>
                                <Ionicons name="md-time" style={ styles.icon } ></Ionicons>
                                <Block>
                                    <Text>Task 1</Text>
                                    <Text h5>1000/-</Text>
                                    <Text muted>02-01-2020</Text>
                                </Block>
                                <Button style={ styles.iconBtn } onPress={() => { this.setNotesModalVisible(true);}}>
                                    <MaterialIcons name="edit" style={ styles.iconEdit} ></MaterialIcons>
                                </Button>
                                <Button style={ styles.expenseBtn } onPress={() => { this.setAddExpenseModalVisible(true);}}>
                                    <Text style={ styles.btnText }>Add Expense</Text>
                                </Button>
                            </Block>
                            <Block style={ styles.row2 }>
                                <Button style={ styles.blockBtn } onPress={() => { this.setBlockTaskModalVisible(true);}}>
                                    <Text style={ styles.btnText }>Block Task</Text>
                                </Button>
                                <Button style={ styles.shareBtn }>
                                    <Text style={ styles.btnText }>Share Location</Text>
                                </Button>
                                <Button style={ styles.completeBtn } onPress={() => { this.taskComplete()}}>
                                    <Text style={ styles.btnText }>Task Complete</Text>
                                </Button>
                            </Block>
                        </Card>
                        {/*<Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                    <Block style={ styles.btnBlock }>
                        <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                            <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                        </Button>
                        <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                            <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                        </Button>
                        <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlocked')}>
                            <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                        </Button>
                        <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompleted')}>
                            <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                        </Button>
                        <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('Admin')}>
                            <Ionicons name="md-laptop" style={ styles.openIcon }></Ionicons>
                        </Button>
                    </Block>
                </ScrollView>
                <Modal animationType="slide" transparent={false} visible={this.state.notesModalVisibility}>
                    <Block style={ styles.myModal }>
                        <Card style={ styles.myCard }>
                            <Text style={ styles.modalTextStyle}>
                                Add Notes
                            </Text>
                            <Input placeholder="Task notes"></Input>
                            <Block style={ styles.btnGroup }>
                                <Button 
                                    round 
                                    style={ styles.cancelBtn } 
                                    onPress={() => this.cancelNotes() }
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    round 
                                    style={ styles.submitBtn } 
                                    onPress={() => this.submitNotes() }
                                >
                                    Submit
                                </Button>
                            </Block>
                        </Card>
                    </Block>
                </Modal>
                <Modal animationType="slide" transparent={false} visible={this.state.addExpenseModalVisibility}>
                    <Block style={ styles.myModal }>
                        <Card style={ styles.myCard }>
                            <Text style={ styles.modalTextStyle}>
                                Add Expense
                            </Text>
                            <Text>Task 1</Text>
                            <Input placeholder="Expense Ammount"></Input>
                            <Input placeholder="Expense Details"></Input>
                            <Block style={ styles.btnGroup }>
                                <Button 
                                    round 
                                    style={ styles.cancelBtn } 
                                    onPress={() => this.cancelAddExpense() }
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    round 
                                    style={ styles.submitBtn } 
                                    onPress={() => this.submitAddExpense() }
                                >
                                    Submit
                                </Button>
                            </Block>
                        </Card>
                    </Block>
                </Modal>
                <Modal animationType="slide" transparent={false} visible={this.state.blockTaskModalVisibility}>
                    <Block style={ styles.myModal }>
                        <Card style={ styles.myCard }>
                            <Text style={ styles.modalTextStyle}>
                                Block Task
                            </Text>
                            <Text>Task 1</Text>
                            <Input placeholder="Reason to Block the task"></Input>
                            <Block style={ styles.btnGroup }>
                                <Button 
                                    round 
                                    style={ styles.cancelBtn } 
                                    onPress={() => this.cancelBlockTask() }
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    round 
                                    style={ styles.submitBtn } 
                                    onPress={() => this.submitBlockTask() }
                                >
                                    Submit
                                </Button>
                            </Block>
                        </Card>
                    </Block>
                </Modal>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        overflow: 'scroll',
        paddingHorizontal: 0
    },
    card: {
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 1,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 24
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -60
    },
    iconBtn: {
        width: 50,
        backgroundColor: Colors.iconBackground,
        borderWidth: 0
    },
    icon: {
        color: Colors.orangeIcon,
        fontSize: 50
    },
    iconEdit: {
        fontSize: 30
    },
    expenseBtn: {
        backgroundColor: Colors.addBtn,
        width: '35%',
        borderRadius: 10
    },
    btnText: {
        fontSize: 12,
        color: Colors.btnText
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    blockBtn: {
        backgroundColor: Colors.errorBackground,
        width: '29%',
        borderRadius: 10
    },
    shareBtn: {
        backgroundColor: Colors.shareLocation,
        width: '39%',
        borderRadius: 10
    },
    completeBtn: {
        backgroundColor: Colors.greenIcon,
        width: '29%',
        borderRadius: 10
    },
    myModal: {
        marginTop: 200,
        padding: 20
    },
    myCard: {
        padding: 20
    },
    modalTextStyle: {
        marginTop: -30,
        fontSize: 30
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    cancelBtn: {
        width: '48%',
        backgroundColor: Colors.cancelBtn
    },
    submitBtn: {
        width: '48%',
        backgroundColor: Colors.submitBtn
    },
    /*quickAddTaskBtn: {
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
    }*/
    btnBlock: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
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

export default TasksInProgress;