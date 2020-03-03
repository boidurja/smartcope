import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const height = Dimensions.get('window').height - 147;

class Admin extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" />
                <ScrollView>
                    <Block style={ styles.footerAtBottom }>
                        <Block style={ styles.btnPosition }>
                            <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewProject')} >
                                <Text style={ styles.btnText }>
                                    Add
                                </Text>
                            </Button>
                        </Block>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                    </Block>

                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                                <Ionicons name="md-laptop" style={ styles.icon } />
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                            <Ionicons name="md-calendar" style={ styles.icon } />
                                <Text h5>Tasks</Text>
                            </Button>
                        </Block>
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
    footerAtBottom: {
        minHeight: height
    },
    cardStyle: {
        padding: 20,
        backgroundColor: 'white'
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
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: Colors.iconBackground
    },
    addBtn: {
        backgroundColor: Colors.addBtn,
        width: '26%',
        height: 32,
        marginBottom: 20
    },
    btnText: {
        color: Colors.btnText
    },
    btnPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    footerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerBtn: {
        width: '49%',
        backgroundColor: Colors.footerBtnColor,
        flexDirection: 'row'
    },
    icon: {
        fontSize: 25,
        marginRight: 8
    }
});

export default Admin;