import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../../common/Header';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

class Accountant extends Component {

    state = {
        projectNames: ['Project 1', 'Project 2', 'Project 3']
    }

    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Accounts" />
            <ScrollView>
                { this.state.projectNames.map((item, index) => { 
                    return (
                        <Card borderless shadow style={ styles.cardStyle } >
                            <Block style={ styles.spaceBetween}>
                                <Block>
                                    <Text h5 style={ styles.textStyle }>
                                        {item}
                                    </Text>
                                    <Text muted>3 accounted tasks</Text>
                                </Block>
                                <Block>
                                    <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Projects')}>
                                        
                                    </Button>
                                </Block>
                            </Block>
                        </Card>
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
    }
});

export default Accountant;