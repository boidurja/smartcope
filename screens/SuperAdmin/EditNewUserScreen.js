import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, TouchableOpacity, Picker } from 'react-native';
import Header from '../../common/Header';

class AddNewUser extends Component {

    state = {role: ''}

    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Users" />
            <Block>
                <Text p style={ styles.editNew }>Edit New User</Text>
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
                <Block style={ styles.btnBox }>
                    <Button round style={ styles.deleteBtn } onPress={() => this.props.navigation.navigate('OrganizationMembers')}>Delete</Button>
                    <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('OrganizationMembers')}>Submit</Button>
                </Block>
            </Block>
            
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        paddingHorizontal: 20
    },
    editNew: {
        textAlign: 'center',
        marginBottom: 30
    },
    deleteBtn: {
        backgroundColor: 'red',
        width: '48%',
        marginVertical: 50
    },
    submitBtn: {
        backgroundColor: 'blue',
        width: '48%',
        marginVertical: 50
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
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default AddNewUser;