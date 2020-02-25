import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../common/Header';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
//import { Drawer } from '../../common/Drawer';

class Tasks extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Project 1" />
            {/*<Drawer />*/}
            <ScrollView>
                <Card borderless style={ styles.cardStyle }>
                    <Block style={ styles.spaceBetween}>
                        <Block>
                            <Text h5 style={ styles.textStyle }>Task 1</Text>
                            <Text muted>03-08-2019</Text>
                        </Block>
                        <Block style={ styles.price }>
                            <Text>Rs. 1000</Text>
                        </Block>
                    </Block>
                    <Card borderless style={ styles.priceBreakup }>
                        <Block style={ styles.spaceBetweenCardItems}>
                            <Block style={{ flexDirection: 'row' }}>
                                <Block>
                                    <Image source={require('../../assets/images/man.jpg')} style={ styles.image } />
                                </Block>
                                <Block style={ styles.center }>    
                                    <Text p>Prateek Patel</Text>
                                    <Text muted>22-06-2019</Text>
                                </Block>
                            </Block>
                            <Block>
                                <Text>Rs. 100</Text>
                            </Block>
                        </Block>
                    </Card>
                    <Card borderless style={ styles.priceBreakup }>
                        <Block style={ styles.spaceBetweenCardItems}>
                            <Block style={{ flexDirection: 'row' }}>
                                <Block>
                                    <Image source={require('../../assets/images/man.jpg')} style={ styles.image } />
                                </Block>
                                <Block style={ styles.center }>    
                                    <Text p>Ramesh Pawar</Text>
                                    <Text muted>22-06-2019</Text>
                                </Block>
                            </Block>
                            <Block>
                                <Text>Rs. 100</Text>
                            </Block>
                        </Block>
                    </Card>
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
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -60,
        marginBottom: 16
    },
    priceBreakup: {
        padding: 10,
        marginHorizontal: -15,
        backgroundColor: 'rgb(230,239,243)',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    spaceBetweenCardItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -50
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    center: {
        marginLeft: 10
    }
});

export default Tasks;