import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';

class ConvertToComplete extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="" />
                
                <Text h4 style={{ color: 'rgb(24,96,105)' }}>Convert to Complete</Text>
                <Text style={{ marginTop: 40, color: 'rgb(24,96,105)' }}>Task Name</Text>
                <Text>Lorem Ipsum</Text>

                <Text style={{ marginTop: 40, color: 'rgb(24,96,105)' }}>Expense</Text>
                <Card borderless style={{ padding: 10,width: '40%' }}>
                    <Text style={{ marginTop: -10 }}>1000/-</Text>
                </Card>

                <Text style={{ marginTop: 40, color: 'rgb(24,96,105)' }}>Details</Text>
                <Input placeholder="Enter details here">
                
                </Input>

                <Block style={ styles.btnBox }>
                    <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('TasksInProgress')}>
                        <Text style={{ color: 'rgb(68,125,132)' }}>Cancel</Text>
                    </Button>
                    <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('TasksCompleted')}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        paddingHorizontal: 10
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})

export default ConvertToComplete;