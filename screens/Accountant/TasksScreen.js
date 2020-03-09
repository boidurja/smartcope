import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
//import { TouchableOpacity } from 'react-native-gesture-handler';


class Tasks extends Component {

    state = {
        tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7']
    }

    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Project 1" navigation={this.props.navigation} />
            <ScrollView>
                { this.state.tasks.map((item, index) => { 
                    return (
                        <TouchableOpacity>
                            <Card borderless shadow style={ styles.cardStyle }>
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                    <Text h5 style={ styles.textStyle }>{item}</Text>
                                        <Text muted>03-08-2019</Text>
                                    </Block>
                                    <Block style={ styles.price }>
                                        <Text>Rs. 1000</Text>
                                    </Block>
                                    <Block style={ styles.rightStyle }>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Task Price')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    cardStyle: {
        padding: 20,
        marginBottom: 10,
        marginTop: 1,
        marginHorizontal: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 5
    },
    textStyle: {
        marginTop: -30
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -30
    },
    iconStyle: {
        width: 30,
        height: 30,
        backgroundColor: 'white'
    },
    rightStyle: {
        marginTop: -20
    },
    price: {
        fontSize: 28,
        marginTop: -15,
        marginRight: -80
    }
});

export default Tasks;