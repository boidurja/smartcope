import React, { Component } from 'react';
import { Text, Block, Card, Button } from 'galio-framework';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class TaskDetailsSA extends Component {

    latestNotes () {
        this.props.navigation.navigate('TaskNotesSA');
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Project 1" navigation={this.props.navigation} />
                <ScrollView>
                    <Card borderless style={ styles.topCard } >
                        <Block style={ styles.row }>
                            <Text h5>Task 1</Text>
                            <Block style={ styles.rightSide }>
                                <Text muted style={{ marginHorizontal: 5, fontSize: 10 }}>Status</Text>
                                <Ionicons style={{ marginHorizontal: 5, fontSize: 35 }} name="md-radio-button-off"></Ionicons>
                                <Text style={{ marginHorizontal: 5 }} >Open</Text>
                            </Block>
                        </Block>
                    </Card>
                    <Card borderless style={ styles.bottomCard } >
                        <Text muted style={{ fontSize: 10, marginTop: -50 }}>Task Details</Text>
                        <Text>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                        <Block style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center'}}>
                            <Card borderless style={{ width: '50%', padding: 10, marginRight: 3 }}>
                                <Text muted style={{ fontSize: 10, position: 'relative', top: -65  }}>
                                    Owner
                                </Text>
                                <Block style={{ marginTop: -55, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 50, marginRight: 3 }} source={require('../../assets/images/man.jpg')} />
                                    <Block>
                                        <Text>Rohit Patil</Text>
                                        <Text muted style={{ fontSize: 12}}>Manager</Text>
                                    </Block>
                                </Block>
                            </Card>
                            <Card borderless style={{ width: '50%', padding: 10 }}>
                                <Text muted style={{ fontSize: 10, position: 'relative', top: -65  }}>
                                    Assigned to
                                </Text>
                                <Block style={{ marginTop: -55, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 50, marginRight: 3 }} source={require('../../assets/images/man.jpg')} />
                                    <Block>
                                        <Text>Ramesh</Text>
                                        <Text muted style={{ fontSize: 12}}>Team Member</Text>
                                    </Block>
                                </Block>
                            </Card>
                        </Block>
                        <Text muted style={{ fontSize: 10, marginTop: 10 }}>
                            Latest notes
                        </Text>
                        <Text onPress={() => this.latestNotes() }>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                        <Card borderless style={{ marginTop: 5, padding: 10 }}>
                            <Block style={{ marginTop: -60, flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Block>
                                    <Text muted style={{ fontSize: 10 }}>
                                        Due Date
                                    </Text>
                                    <Text>
                                        21-02-2020
                                    </Text>
                                </Block>
                                <Block>
                                    <Text muted style={{ fontSize: 10 }}>
                                        Start Date
                                    </Text>
                                    <Text>
                                        21-02-2020
                                    </Text>
                                </Block>
                                <Block>
                                    <Text muted style={{ fontSize: 10 }}>
                                        End Date
                                    </Text>
                                    <Text>
                                        21-02-2020
                                    </Text>
                                </Block>
                            </Block>
                        </Card>

                        <Text muted style={{ fontSize: 10, marginTop: 10 }}>
                            Attachments
                        </Text>
                        <Block style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Block style={{ flexDirection: 'row'}}>
                                <Card borderless style={{ padding: 10, width: 40, marginRight: 5 }}>
                                    <Ionicons name="md-download" style={{ color: 'grey', fontSize: 20, marginTop: -60, textAlign: 'center' }}></Ionicons>
                                </Card>
                                <Card borderless style={{ padding: 10, width: 40, marginRight: 5 }}>
                                    <Ionicons name="md-download" style={{ color: 'grey', fontSize: 20, marginTop: -60, textAlign: 'center' }}></Ionicons>
                                </Card>
                                <Card borderless style={{ padding: 10, width: 40 }}>
                                    <Ionicons name="md-download" style={{ color: 'grey', fontSize: 20, marginTop: -60, textAlign: 'center' }}></Ionicons>
                                </Card>
                            </Block>
                            <Button style={{ backgroundColor: Colors.shareLocation, width: '50%' }}>
                                <Text style={{ color: Colors.btnText }}>
                                    Request Location
                                </Text>
                            </Button>
                        </Block>
                    </Card>
                    <Block style={ styles.btnBox }>
                        <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('ProjectTasksSA')}>
                            <Text style={ styles.btnTextColor }>Delete</Text>
                        </Button>
                        <Button round style={ styles.submitBtn } onPress={() => this.props.navigation.navigate('EditTaskSA')}>
                            <Text style={ styles.btnTextColor }>Edit Task</Text>
                        </Button>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    topCard: {
        padding: 20,
        marginBottom: 10,
        marginTop: 1,
        marginHorizontal: 10,
        backgroundColor: Colors.footerBtnColor,
        zIndex: 1
    },
    bottomCard: {
        padding: 20,
        marginBottom: 10,
        marginTop: -30,
        marginHorizontal: 10,
        backgroundColor: 'white',
        zIndex: 0
    },
    row: {
        marginTop: -70,
        marginBottom: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancelBtn: {
        backgroundColor: Colors.cancelBtn,
        width: '45%',
        marginVertical: 50
    },
    submitBtn: {
        backgroundColor: Colors.submitBtn,
        width: '45%',
        marginVertical: 50
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnTextColor: {
        color: Colors.btnText
    }
});

export default TaskDetailsSA;
