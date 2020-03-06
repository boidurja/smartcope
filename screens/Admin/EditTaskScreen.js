import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, ScrollView, Picker, View, KeyboardAvoidingView } from 'react-native';
import Header from '../../common/Header';
import DatePicker from 'react-native-datepicker';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class EditTask extends Component {
    constructor(props){
        super(props)
        this.state = {startDate:''}
        this.state = {endDate:''}
        this.state = {dueDate: ''}
        this.state = {status: ''}
        this.state = {assignedTo: ''}
    }

    handleStartDateChange(date) {
        this.props.date = true;
        this.setState({startDate: date});
    }
    handleEndDateChange(date) {
        this.props.date = true;
        this.setState({endDate: date});
    }
    handleDueDateChange(date) {
        this.props.date = true;
        this.setState({dueDate: date});
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
    
                <ScrollView>
                    <Text h4>
                        Edit Task
                    </Text>
                    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                        <Input placeholder="Task Name" rounded />
                        <DatePicker
                            style={ styles.datePickerStyle }
                            date={this.state.dueDate}
                            mode="date"
                            placeholder="Due Date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {  
                                    borderRadius: 30,
                                    marginTop: 15,
                                    backgroundColor: 'white'
                                },
                                placeholderText: {
                                    marginLeft: -248,
                                    color: 'darkgrey'
                                },
                                dateText: {
                                    marginRight: 225
                                }
                            }}
                            onDateChange={ this.handleDueDateChange.bind(this) }
                        />
                        <Input placeholder="Owner / User Name" rounded style={{ marginTop: 15 }}/>
                        <Input placeholder="Task Details" rounded multiline style={{ height: 100 }}/>
                        <View style={ styles.picker }>
                            <Picker
                                selectedValue={this.state.status}
                                style={{height: 45, width: '100%', marginLeft: 5, color: 'grey' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({status: itemValue})
                                }
                            >
                                <Picker.Item label="Task Status" value="0" />
                                <Picker.Item label="Open" value="1" />
                                <Picker.Item label="In Progress" value="2" />
                                <Picker.Item label="Blocked" value="3" />
                                <Picker.Item label="Completed" value="4" />
                            </Picker>
                        </View>
                        <View style={ styles.pickerAssigned }>
                            <Picker
                                selectedValue={this.state.assignedTo}
                                style={{height: 45, width: '100%', marginLeft: 5, color: 'grey' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({assignedTo: itemValue})
                                }
                            >
                                <Picker.Item label="Assigned To" value="0" />
                                <Picker.Item label="Rohit" value="1" />
                                <Picker.Item label="Ramesh" value="2" />
                                <Picker.Item label="xxxxxx" value="3" />
                                <Picker.Item label="uyyyyyyy" value="4" />
                            </Picker>
                        </View>
                        <DatePicker
                            style={ styles.startDatePickerStyle }
                            date={this.state.startDate}
                            mode="date"
                            placeholder="Start Date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {  
                                    borderRadius: 30,
                                    marginTop: 15,
                                    backgroundColor: 'white'
                                },
                                placeholderText: {
                                    marginLeft: -248,
                                    color: 'darkgrey'
                                },
                                dateText: {
                                    marginRight: 225
                                }
                            }}
                            onDateChange={ this.handleStartDateChange.bind(this) }
                        />
                        <DatePicker
                            style={ styles.endDatePickerStyle }
                            date={this.state.endDate}
                            mode="date"
                            placeholder="End Date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {  
                                    borderRadius: 30,
                                    marginTop: 15,
                                    backgroundColor: 'white'
                                },
                                placeholderText: {
                                    marginLeft: -248,
                                    color: 'darkgrey'
                                },
                                dateText: {
                                    marginRight: 225
                                }
                            }}
                            onDateChange={ this.handleEndDateChange.bind(this) }
                        />
                        <Block style={ styles.attachmentsBlock }>
                            <Text muted style={{ marginLeft: 15 }}>Add Attachments</Text>
                            <Ionicons name="ios-add" style={{ marginRight: 17, fontSize: 20 }}></Ionicons>
                        </Block>
                        <Input placeholder="Notes" rounded multiline style={{ height: 100, marginTop: 7}} />
                    </KeyboardAvoidingView>







                    {/*<Input placeholder="Enter Task Name here" label="Task Name" style={ styles.input }/>
                    <Input placeholder="Enter task status here" label="Task Status" style={ styles.input }/>
                    <Input style={ styles.input } placeholder="Enter Task details here" label="Task Details" />
                    <Input style={ styles.input } placeholder="Enter Assigned To name here" label="Assigned To" />
                    
                    <Text>Start Date</Text>
                    <DatePicker
                        style={ styles.datePickerStyle }
                        date={this.state.startDate}
                        mode="date"
                        placeholder="Select Start Date here"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateInput: {  
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                marginTop: 15
                            },
                            placeholderText: {
                                marginLeft: -178
                            },
                            dateText: {
                                marginLeft: -245
                            }
                        }}
                        onDateChange={ this.handleStartDateChange.bind(this) }
                    />
                    <Text style={{ marginTop: 20 }}>End Date</Text>
                    <DatePicker
                        style={ styles.datePickerStyle }
                        date={this.state.endDate}
                        mode="date"
                        placeholder="Select Start Date here"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateInput: {  
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                marginTop: 15
                            },
                            placeholderText: {
                                marginLeft: -178
                            },
                            dateText: {
                                marginLeft: -245
                            }
                        }}
                        onDateChange={ this.handleEndDateChange.bind(this) }
                    />
                    <Text style={{ marginTop: 20 }}>Due Date</Text>
                    <DatePicker
                        style={ styles.datePickerStyle }
                        date={this.state.dueDate}
                        mode="date"
                        placeholder="Select Start Date here"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateInput: {  
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                marginTop: 15
                            },
                            placeholderText: {
                                marginLeft: -178
                            },
                            dateText: {
                                marginLeft: -245
                            }
                        }}
                        onDateChange={ this.handleDueDateChange.bind(this) }
                    />
                    
                    <Block style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', marginTop: 20 }}>
                        <Input style={ styles.attachments } placeholder="" label="Attachments" />
                        <Button style={ styles.attachmentBtn }>
                            <Text style={{ fontSize: 30 }}>+</Text>
                        </Button>
                    </Block>

                    <Input style={ styles.input } placeholder="Enter notes here" label="Notes" />
                    */}
                    
                    <Block style={ styles.btnBox }>
                        <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                            <Text style={ styles.btnTextColor }>Delete</Text>
                        </Button>
                        <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                            <Text style={ styles.btnTextColor }>Submit</Text>
                        </Button>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        paddingHorizontal: 10
    },
    /*input: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1
    },*/
    datePickerStyle: {
        width: '100%'
    },
    picker: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'grey',
        backgroundColor: 'white',
        height: 45,
        marginTop: 7
    },
    pickerAssigned: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'grey',
        backgroundColor: 'white',
        height: 45,
        marginTop: 15
    },
    startDatePickerStyle: {
        marginTop: 8,
        width: '100%'
    },
    endDatePickerStyle: {
        marginTop: 15,
        width: '100%'
    },
    attachmentsBlock: {
        borderWidth: 1, 
        borderColor: 'grey', 
        borderRadius: 30, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: 40,
        marginTop: 20,
        backgroundColor: 'white'
    },
    cancelBtn: {
        backgroundColor: Colors.cancelBtn,
        width: '48%',
        marginVertical: 50
    },
    submitBtn: {
        backgroundColor: Colors.submitBtn,
        width: '48%',
        marginVertical: 50
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnTextColor: {
        color: Colors.btnText
    }
});

export default EditTask;