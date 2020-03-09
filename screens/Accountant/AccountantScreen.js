import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
//import DrawerLeft from '../../common/DrawerLeft';

class Accountant extends Component {

    state = {
        projectNames: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7']
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Accounts" navigation={this.props.navigation} />
                {/*<DrawerLeft />*/}
                <ScrollView>
                    { this.state.projectNames.map((item, index) => { 
                        return (
                            <TouchableOpacity>
                                <Card borderless shadow style={ styles.cardStyle } >
                                    <Block style={ styles.spaceBetween}>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>
                                                {item}
                                            </Text>
                                            <Text muted>3 accounted tasks</Text>
                                        </Block>
                                        <Block>
                                            <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Tasks')}>
                                                
                                            </Button>
                                        </Block>
                                    </Block>
                                </Card>
                            </TouchableOpacity>
                        )
                    }
                    )}
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        paddingHorizontal: 0
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
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: 'white'
    }
});

export default Accountant;