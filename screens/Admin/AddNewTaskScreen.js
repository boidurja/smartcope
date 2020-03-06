import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import DatePicker from 'react-native-datepicker';

class AddNewTask extends Component {

    constructor(props){
        super(props)
        this.state = {dueDate: ''}
    }

    handleDueDateChange(date) {
        this.props.date = true;
        this.setState({dueDate: date});
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Users" />

                <ScrollView>

                <Text h4>
                    Add New Task
                </Text>
                
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>

                <Input placeholder="Task Name" rounded style={{ marginTop: 10 }} />

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
                
                <Input placeholder="Owner / Username" rounded />

                <Input placeholder="Task Details" rounded multiline style={{ height: 100 }} />

                </KeyboardAvoidingView>

                <Block style={ styles.btnBox }>
                    <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                        <Text style={ styles.btnTextColor }>Cancel</Text>
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
    datePickerStyle: {
        width: '100%',
        marginBottom: 15
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

export default AddNewTask;