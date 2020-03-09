import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native';
import Header from '../../common/Header';
import { ScrollView } from 'react-native-gesture-handler';

class AddNewUser extends Component {

    state = {role: ''}

    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Users" />
            <ScrollView>
            <Text p style={ styles.addNew }>Add New User</Text>
            <KeyboardAvoidingView enabled behavior="padding" >
                <Input placeholder="First Name" rounded />
                <Input placeholder="Last Name" rounded />
                <Input placeholder="Email" rounded />
                <Input placeholder="Contact Number" rounded />
                
                <Block style={ styles.roleContainerStyle }>
                    <Picker
                        style={ styles.roleStyle }
                        selectedValue={this.state.role}
                        mode="dropdown"
                        placeholder="role"
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({role: itemValue})
                        }>
                        <Picker.Item label="Role" value="-1" />
                        <Picker.Item label="Accountant" value="a" />
                        <Picker.Item label="Super Admin" value="b" />
                        <Picker.Item label="Admin" value="c" />
                        <Picker.Item label="Manager" value="d" />
                        <Picker.Item label="Team Member" value="e" />
                    </Picker>
                </Block>
            </KeyboardAvoidingView>
            <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('OrganizationMembers')}>Submit</Button>
            </ScrollView>
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
    submitBtn: {
        backgroundColor: 'blue',
        width: '50%',
        marginVertical: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    roleContainerStyle: {
        height: 45,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
        marginTop: 10,
        paddingLeft: 7 
    },
    roleStyle: {
        position: 'relative',
        bottom: 3,
        color: 'grey'
    }
});

export default AddNewUser;