import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet } from 'react-native';
import Header from '../../common/Header';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
//import DrawerLeft from '../../common/DrawerLeft';

class Accountant extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Accounts" />
            {/*<DrawerLeft />*/}
            <Card borderless shadow style={ styles.cardStyle } >
                <Block style={ styles.spaceBetween}>
                    <Block>
                        <Text h5 style={ styles.textStyle }>Project 1</Text>
                        <Text muted>3 accounted tasks</Text>
                    </Block>
                    <Block>
                        <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Projects')}>
                            
                        </Button>
                        {/*<Ionicons name="ios-arrow-forward" size={32} style={ styles.iconStyle} onPress={() => this.props.navigation.navigate('Projects')}/>*/}
                    </Block>
                </Block>
            </Card>
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
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginTop: -20,
        width: 30,
        height: 30,
        backgroundColor: 'white'
    }
});

export default Accountant;