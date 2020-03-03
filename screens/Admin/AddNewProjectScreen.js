import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';

class AddNewProject extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                <Text h4>
                    Add New Project
                </Text>
                
                <Input placeholder="Enter Project Name here" label="Project Name" style={ styles.input }/>

                <Input style={ styles.input } placeholder="Enter due date here" label="Due Date" />
                
                <Input style={ styles.input } placeholder="Enter owner / user name here" label="Owner / Users" />

                <Input style={ styles.input } placeholder="Enter Project details here" label="Project Details" />

                <Block style={ styles.btnBox }>
                    <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                        <Text style={ styles.btnTextColor }>Cancel</Text>
                    </Button>
                    <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                        <Text style={ styles.btnTextColor }>Submit</Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        paddingHorizontal: 10
    },
    input: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1
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

export default AddNewProject;