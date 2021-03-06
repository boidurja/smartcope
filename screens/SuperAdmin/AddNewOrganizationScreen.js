import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import Header from '../../common/Header';
import DatePicker from 'react-native-datepicker';
import Colors from '../../constants/Colors';

class AddNewOrganization extends Component {
    constructor(props){
        super(props)
        this.state = {date:''}
    }

    handleDateChange(date) {
        this.props.date = true;
        this.setState({date: date});
    }

    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Organizations" navigation={this.props.navigation}/>
            <Block>
                <ScrollView>
                    <Text p style={ styles.addNew }>Add New Organization</Text>

                    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                        <Input placeholder="Organization Name" rounded />
                        <Input placeholder="Organization Email" rounded />
                        <Input placeholder="Contact Person" rounded />
                        <Input placeholder="Contact Person Contact Number" rounded />
                        <Input placeholder="Total Members" rounded />
                        
                        <DatePicker
                            style={ styles.datePickerStyle }
                            date={this.state.date}
                            mode="date"
                            placeholder="Expiration date"
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
                                    marginLeft: -190
                                },
                                dateText: {
                                    marginRight: 210
                                }
                            }}
                            onDateChange={ this.handleDateChange.bind(this) }
                        />
                    </KeyboardAvoidingView>
                    <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('SuperAdmin')}>Submit</Button>
                </ScrollView>
            </Block>
            
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        paddingHorizontal: 20
    },
    addNew: {
        textAlign: 'center',
        marginBottom: 30
    },
    datePickerStyle: {
        width: '100%'
    },
    submitBtn: {
        backgroundColor: Colors.submitBtn,
        width: '50%',
        marginVertical: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default AddNewOrganization;