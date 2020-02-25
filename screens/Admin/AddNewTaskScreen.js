import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, TextInput } from 'react-native';
import Header from '../../common/Header';
//import DrawerLeft from '../../common/DrawerLeft';

class AddNewTask extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                {/*<DrawerLeft />*/}
                <Text h4>
                    Add New Task
                </Text>
                
                <Input placeholder="Enter Task Name here" label="Task Name" style={ styles.input }/>
                
                <Input style={ styles.input } placeholder="Enter Task details here" label="Task Details" />

                <Input style={ styles.input } placeholder="Enter due date here" label="Due Date" />
                
                <Input style={ styles.input } placeholder="Enter owner / user name here" label="Owner / Users" />

                <Block style={ styles.btnBox }>
                    <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                        <Text style={{ color: 'rgb(68,125,132)' }}>Cancel</Text>
                    </Button>
                    <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                        <Text style={{ color: 'white' }}>Submit</Text>
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
        backgroundColor: 'rgb(190,222,226)',
        width: '48%',
        marginVertical: 50,
        borderWidth: 1,
        borderColor: 'rgb(68,125,132)'
    },
    submitBtn: {
        backgroundColor: 'rgb(77,176,188)',
        width: '48%',
        marginVertical: 50,
        borderColor: 'rgb(95,143,149)',
        borderWidth: 1
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default AddNewTask;