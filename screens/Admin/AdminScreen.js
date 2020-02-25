import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../../common/Header';
//import DrawerLeft from '../../common/DrawerLeft';

class Admin extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organization 1" />
                {/*<DrawerLeft />*/}
                <ScrollView>
                    <Block style={ styles.btnPosition }>
                        <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewProject')} >
                            <Text style={ styles.btnText}>
                                Add
                            </Text>
                        </Button>
                    </Block>
                    <Card borderless shadow style={ styles.cardStyle } >
                        <Block style={ styles.spaceBetween}>
                            <Block>
                                <Text h5 style={ styles.textStyle }>Project 1</Text>
                                <Text muted>02-01-2010</Text>
                            </Block>
                            <Block>
                                <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('ProjectTasks')}>
                                    
                                </Button>
                                {/*<Ionicons name="ios-arrow-forward" size={32} style={ styles.iconStyle} onPress={() => this.props.navigation.navigate('Projects')}/>*/}
                            </Block>
                        </Block>
                    </Card>
            
                    <Block style={ styles.footer }>
                        <Block style={ styles.footerBtns }>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('Admin')}>
                                <Text h5>Projects</Text>
                            </Button>
                            <Button style={ styles.footerBtn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
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
    cardStyle: {
        padding: 20
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
        backgroundColor: 'white'
    },
    addBtn: {
        backgroundColor: 'blue',
        width: '26%',
        height: 32,
        marginBottom: 20
    },
    btnText: {
        color: 'white'
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
        backgroundColor: 'rgb(238,244,248)',
    }
});

export default Admin;