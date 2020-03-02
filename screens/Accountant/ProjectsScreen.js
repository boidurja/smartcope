import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../../common/Header';


class Projects extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Project 1" />
            <ScrollView>
                <Card borderless shadow style={ styles.cardStyle }>
                    <Block style={ styles.spaceBetween}>
                        <Block>
                            <Text h5 style={ styles.textStyle }>Task 1</Text>
                            <Text muted>03-08-2019</Text>
                        </Block>
                        <Block style={ styles.price }>
                            <Text>Rs. 1000</Text>
                        </Block>
                        <Block style={ styles.rightStyle }>
                            <Button onlyIcon icon="right" iconSize={30} iconColor="#DCDCDC" iconFamily="antdesign" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Tasks')}>
                                
                            </Button>
                            {/*<Ionicons name="ios-arrow-forward" style={ styles.iconStyle } onPress={() => this.props.navigation.navigate('Tasks')} />*/}
                        </Block>
                    </Block>
                </Card>
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

export default Projects;