import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const height = Dimensions.get('window').height - 147;

class Manager extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" />
                <ScrollView>
                    <Block style={ styles.footerAtBottom }>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                            <Card borderless style={ styles.cardStyle } >
                                <Block style={ styles.spaceBetween}>
                                    <Block>
                                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                                        <Text muted>02-01-2010</Text>
                                    </Block>
                                    <Block>
                                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasksM')}>
                                        </Button>
                                    </Block>
                                </Block>
                            </Card>
                        </TouchableOpacity>
                    </Block>
                    </ScrollView>

                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Manager')}>
                                <Ionicons name="md-laptop" style={ styles.icon } />
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpenM')}>
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
        elevation: 24
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

export default Manager;