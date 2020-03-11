import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, Dimensions, Modal } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height - 147;

class TasksInProgressSA extends Component {

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
        this.props.navigation.navigate('TasksBlockedSA')
    }

    taskComplete() {
        this.props.navigation.navigate('TasksCompletedSA')
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" navigation={this.props.navigation} />
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
                        
                    </Block>
                </ScrollView>
                   
                <Block style={ styles.btnBlock }>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksOpenSA')}>
                        <Ionicons name="md-radio-button-off" style={ styles.openIcon }></Ionicons>
                    </Button>
                    <Button color="white" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksInProgressSA')}>
                        <Ionicons name="md-time" style={ styles.orangeIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksBlockedSA')}>
                        <Ionicons name="md-close-circle" style={ styles.redIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('TasksCompletedSA')}>
                        <Ionicons name="md-checkmark-circle" style={ styles.greenIcon }></Ionicons>
                    </Button>
                    <Button color="transparent" style={ styles.centering } onPress={() => this.props.navigation.navigate('Projects')}>
                        <Ionicons name="md-laptop" style={ styles.openIcon }></Ionicons>
                    </Button>
                </Block>
                
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
        elevation: 5
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

export default TasksInProgressSA;