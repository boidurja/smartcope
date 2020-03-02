import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';

class SuperAdmin extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organizations" />
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OrganizationMembers')}>
                    <Card borderless shadow style={ styles.cardStyle }>
                        <Block style={ styles.spaceBetween}>
                            <Block>
                                <Text h5 style={ styles.textStyle }>Organization 1</Text>
                                <Text muted>Activated</Text>
                            </Block>
                            <Block>
                                <Button round size="small" style={ styles.btnOn }>
                                    Online
                                </Button>
                            </Block>
                        </Block>
                    </Card>
                    </TouchableOpacity>
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
                </ScrollView>
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
        justifyContent: 'space-between',
        marginTop: -30
    },
    btnOn: {
        backgroundColor: Colors.onlineBtn,
        width: 80,
        marginTop: -25,
        height: 35
    },
    btnOff: {
        backgroundColor: Colors.offlineBtn,
        width: 80,
        marginTop: -25,
        height: 35
    },
    addBtn: {
        marginTop: 30,
        backgroundColor: Colors.addBtn,
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default SuperAdmin;