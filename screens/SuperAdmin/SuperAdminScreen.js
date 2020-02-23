import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet } from 'react-native';
import Header from '../../common/Header';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
//import { Drawer } from '../../common/Drawer';

class SuperAdmin extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Header title="Organizations" />
            {/*<Drawer />*/}
            <Card borderless shadow style={ styles.cardStyle } >
                <Block style={ styles.spaceBetween}>
                    <Block>
                        <Text h5 style={ styles.textStyle }>Organization 1</Text>
                        <Text muted>Activated</Text>
                    </Block>
                    <Block>
                        <Button round size="small" style={ styles.btnOn } onPress={() => this.props.navigation.navigate('OrganizationMembers')} >
                            Online
                        </Button>
                    </Block>
                </Block>
            </Card>
            <Card borderless shadow style={ styles.cardStyle } >
                <Block style={ styles.spaceBetween}>
                    <Block>
                        <Text h5 style={ styles.textStyle }>Organization 2</Text>
                        <Text muted>Deactivated</Text>
                    </Block>
                    <Block>
                        <Button round size="small" style={ styles.btnOff }>
                            Offline
                        </Button>
                    </Block>
                </Block>
            </Card>
            <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewOrganization')}>
                Add Organization
            </Button>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1,
        paddingHorizontal: 20
    },
    cardStyle: {
        padding: 20,
        marginBottom: 2
    },
    textStyle: {
        marginTop: -30
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnOn: {
        backgroundColor: 'green',
        width: 80,
        marginTop: -25,
        height: 35
    },
    btnOff: {
        backgroundColor: 'red',
        width: 80,
        marginTop: -25,
        height: 35
    },
    addBtn: {
        marginTop: 30,
        backgroundColor: 'blue',
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default SuperAdmin;