import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import Header from '../../common/Header';
//import DrawerLeft from '../../common/DrawerLeft';

class EditTask extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                {/*<DrawerLeft />*/}
                <ScrollView>
                    <Text h4>
                        Edit Task
                    </Text>
                    
                    <Input placeholder="Enter Task Name here" label="Task Name" style={ styles.input }/>
                    <Input placeholder="Enter task status here" label="Task Status" style={ styles.input }/>
                    <Input style={ styles.input } placeholder="Enter Task details here" label="Task Details" />
                    <Input style={ styles.input } placeholder="Enter Assigned To name here" label="Assigned To" />
                    <Input style={ styles.input } placeholder="Select Start Date here" label="Start Date" />
                    <Input style={ styles.input } placeholder="Select End Date here" label="End Date" />
                    <Input style={ styles.input } placeholder="Select Due Date here" label="Due Date" />
                    
                    <Block style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Input style={ styles.attachments } placeholder="" label="Attachments" />
                        <Button style={ styles.attachmentBtn }>
                            <Text style={{ fontSize: 30 }}>+</Text>
                        </Button>
                    </Block>

                    <Input style={ styles.input } placeholder="Enter notes here" label="Notes" />

                    <Block style={ styles.btnBox }>
                        <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                            <Text style={{ color: 'rgb(68,125,132)' }}>Cancel</Text>
                        </Button>
                        <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                            <Text style={{ color: 'white' }}>Submit</Text>
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
    },
    attachments: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '60%'
    },
    attachmentBtn: {
        width: '25%',
        backgroundColor: 'rgb(190,222,226)',
        borderWidth: 1,
        borderColor: 'rgb(68,125,132)'
    }
});

export default EditTask;