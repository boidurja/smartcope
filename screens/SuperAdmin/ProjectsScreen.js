import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const height = Dimensions.get('window').height - 147;

class Projects extends Component {
    state = {
        Projects: [
            {
                "id": 1,
                "name": "Project 1"
            },
            {
                "id": 2,
                "name": "Project 2"
            },
            {
                "id": 3,
                "name": "Project 3"
            },
            {
                "id": 4,
                "name": "Project 4"
            },
            {
                "id": 5,
                "name": "Project 5"
            },
            {
                "id": 6,
                "name": "Project 6"
            },
            {
                "id": 7,
                "name": "Project 7"
            }
        ]
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" navigation={this.props.navigation} />
                
                    <Block style={ styles.btnPosition }>
                        <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewProjectSA')} >
                            <Text style={ styles.btnText }>
                                Add
                            </Text>
                        </Button>
                    </Block>
                    <ScrollView>
                        <Block style={ styles.footerAtBottom }>
                            { this.state.Projects.map((item, index) => { 
                                return (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksSA')}>
                                        <Card borderless style={ styles.cardStyle } >
                                            <Block style={ styles.spaceBetween}>
                                                <Block>
                                                    <Text h5 style={ styles.textStyle }>{item.name}</Text>
                                                    <Text muted>02-01-2010</Text>
                                                </Block>
                                                <Block>
                                                    <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksSA')}>
                                                    </Button>
                                                </Block>
                                            </Block>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            })}    
                        </Block>
                    </ScrollView>

                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Projects')}>
                                <Ionicons name="md-laptop" style={ styles.icon } />
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpenSA')}>
                            <Ionicons name="md-calendar" style={ styles.icon } />
                                <Text h5>Tasks</Text>
                            </Button>
                        </Block>
                    </Block>
                
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    footerAtBottom: {
        minHeight: height
    },
    cardStyle: {
        padding: 20,
        marginHorizontal: 10,
        marginTop: 1,
        marginBottom: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 12 },
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
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: Colors.iconBackground
    },
    addBtn: {
        backgroundColor: Colors.addBtn,
        width: '26%',
        height: 32,
        marginBottom: 10
    },
    btnText: {
        color: Colors.btnText
    },
    btnPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 45
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

export default Projects;