import React, { Component } from 'react';
import { Text, Block, Card, Button, Input } from 'galio-framework';
import { StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
//import { FlatList } from 'react-native-gesture-handler';

class TaskNotesM extends Component {

    cancel () {
        
    }

    submit () {
        
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Task 1" />
                <ScrollView>
                <Block style={{ paddingHorizontal: 20 }}>
                    <Input rounded placeholder="Task notes" multiline style={{ height: 100}} />
                    <Block style={ styles.btnBox }>
                        <Button round style={ styles.cancelBtn } onPress={() => this.cancel()}>
                            <Text style={ styles.btnTextColor }>Cancel</Text>
                        </Button>
                        <Button round style={ styles.submitBtn } onPress={() => this.submit()}>
                            <Text style={ styles.btnTextColor }>Submit</Text>
                        </Button>
                    </Block>
                </Block>
                <Card borderless style={ styles.card }>
                    <Block style={ styles.row1 }>
                        <Block style={ styles.image }>
                            <Image source={require('../../assets/images/man.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                            <Block>
                                <Text>Rohit</Text>
                                <Text muted style={{ fontSize: 10}}>Manager</Text>
                            </Block>
                        </Block>
                        <Block style={ styles.time }>
                            <Text style={{ fontSize: 12 }}>
                                10.00 am 24 Feb 2020
                            </Text>
                        </Block>
                    </Block>
                    <Block style={ styles.row2 }>
                        <Text>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                    </Block>
                </Card>
                <Card borderless style={ styles.card }>
                    <Block style={ styles.row1 }>
                        <Block style={ styles.image }>
                            <Image source={require('../../assets/images/man.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                            <Block>
                                <Text>Rohit</Text>
                                <Text muted style={{ fontSize: 10}}>Manager</Text>
                            </Block>
                        </Block>
                        <Block style={ styles.time }>
                            <Text style={{ fontSize: 12 }}>
                                10.00 am 24 Feb 2020
                            </Text>
                        </Block>
                    </Block>
                    <Block style={ styles.row2 }>
                        <Text>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                    </Block>
                </Card>
                <Card borderless style={ styles.card }>
                    <Block style={ styles.row1 }>
                        <Block style={ styles.image }>
                            <Image source={require('../../assets/images/man.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                            <Block>
                                <Text>Rohit</Text>
                                <Text muted style={{ fontSize: 10}}>Manager</Text>
                            </Block>
                        </Block>
                        <Block style={ styles.time }>
                            <Text style={{ fontSize: 12 }}>
                                10.00 am 24 Feb 2020
                            </Text>
                        </Block>
                    </Block>
                    <Block style={ styles.row2 }>
                        <Text>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                    </Block>
                </Card>
                <Card borderless style={ styles.card }>
                    <Block style={ styles.row1 }>
                        <Block style={ styles.image }>
                            <Image source={require('../../assets/images/man.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                            <Block>
                                <Text>Rohit</Text>
                                <Text muted style={{ fontSize: 10}}>Manager</Text>
                            </Block>
                        </Block>
                        <Block style={ styles.time }>
                            <Text style={{ fontSize: 12 }}>
                                10.00 am 24 Feb 2020
                            </Text>
                        </Block>
                    </Block>
                    <Block style={ styles.row2 }>
                        <Text>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                    </Block>
                </Card>
                </ScrollView>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    card: {
        padding: 10, 
        marginTop: 10, 
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10
    },
    cancelBtn: {
        backgroundColor: Colors.cancelBtn,
        width: '49%'
    },
    submitBtn: {
        backgroundColor: Colors.submitBtn,
        width: '49%'
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    btnTextColor: {
        color: Colors.btnText
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -65
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default TaskNotesM;