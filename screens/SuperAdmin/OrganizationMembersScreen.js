import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../common/Header';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
//import { Drawer } from '../../common/Drawer';

class OrganizationMembers extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Organizations" />
            {/*<Drawer />*/}
            <ScrollView>
                <Card borderless style={ styles.cardStyle }>
                    <Block style={ styles.spaceBetween}>
                        <Block>
                            <Text h5 style={ styles.textStyle }>Organization 1</Text>
                            <Text muted style={ styles.expirationDate }>Expiration Date: 03-08-2019</Text>
                            
                        </Block>
                        <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button round style={ styles.addBtn } onPress={() => this.props.navigation.navigate('AddNewUser')} >
                                <Text style={{ fontSize: 12, color: 'white' }}>
                                    Add User
                                </Text>
                            </Button>
                            <Button round style={ styles.deleteBtn } onPress={() => this.props.navigation.navigate('EditNewUser')}>
                                <Text style={{ fontSize: 12, color: 'white' }}>
                                    Delete
                                </Text>
                            </Button>
                        </Block>
                    </Block>
                    <Block style={ styles.contactInfo}>
                        <Text muted>+1 654 893 8098</Text>
                        <Text>root@organization.com</Text>
                    </Block>
                    <Text muted style={ styles.totalMembers }>Total Members: 2</Text>
                    <Card borderless style={ styles.members }>
                        <Block style={ styles.spaceBetweenCardItems}>
                            <Block style={{ flexDirection: 'row'}}>
                                <Block>
                                    <Image source={require('../../assets/images/man.jpg')} style={ styles.image } />
                                </Block>
                                <Block style={ styles.center }>    
                                    <Text p>Prateek Patel</Text>
                                    <Text muted>Admin</Text>
                                </Block>
                            </Block>
                            <Block>
                                <Button round style={ styles.editRoleBtn } onPress={() => this.props.navigation.navigate('AddNewUser')}>
                                    <Text style={{ fontSize: 12, color: 'white' }}>Edit Role</Text>
                                </Button>
                            </Block>
                        </Block>
                    </Card>
                    <Card borderless style={ styles.members }>
                        <Block style={ styles.spaceBetweenCardItems}>
                            <Block style={{ flexDirection: 'row' }}>
                                <Block>
                                    <Image source={require('../../assets/images/man.jpg')} style={ styles.image } />
                                </Block>
                                <Block style={ styles.center }>    
                                    <Text p>Rohit Patil</Text>
                                    <Text muted>manager</Text>
                                </Block>
                            </Block>
                            <Block>
                            <Button round style={ styles.editRoleBtn } onPress={() => this.props.navigation.navigate('AddNewUser')}>
                                <Text style={{ fontSize: 12, color: 'white' }}>Edit Role</Text>
                            </Button>
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
    expirationDate: {
        fontSize: 10
    },
    cardStyle: {
        padding: 20
    },
    addBtn: {
        width: 70,
        height: 30,
        backgroundColor: 'green',
        marginRight: 10
    },
    deleteBtn: {
        width: 70,
        height: 30,
        backgroundColor: 'red',
        marginRight: -10
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -60,
        marginBottom: 16
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -15,
        marginBottom: 16,
        marginRight: -9
    },
    totalMembers: {
        padding: 5,
        marginTop: -10,
        marginHorizontal: '-5%',
        paddingLeft: 15,
        backgroundColor: 'rgb(238,244,248)'
    },
    members: {
        padding: 10,
        marginHorizontal: -15,
        backgroundColor: 'rgb(230,239,243)',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    editRoleBtn: {
        width: 70,
        height: 30,
        backgroundColor: 'blue',
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

export default OrganizationMembers;