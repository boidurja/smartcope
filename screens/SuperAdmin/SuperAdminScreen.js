import React, { Component } from 'react';
import { Text, Block, Button, Card } from 'galio-framework';
import { StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Header from '../../common/Header';
import Colors from '../../constants/Colors';

class SuperAdmin extends Component {
    state = {
        modalVisible: false,
        organizationNames: [ 
            {
                "id": 1,
                "name": "Org 1",
                "activated": true
            }, 
            {
                "id": 2,
                "name": "Org 2",
                "activated": false
            },
            {
                "id": 3,
                "name": "Org 3",
                "activated": false
            },
            {
                "id": 4,
                "name": "Org 4",
                "activated": false
            },
            {
                "id": 5,
                "name": "Org 5",
                "activated": false
            },
            {
                "id": 6,
                "name": "Org 6",
                "activated": false
            },
            {
                "id": 7,
                "name": "Org 7",
                "activated": false
            }
        ],
        selectedItem: null
    };
    
    setModalVisible(visible, item) {
        this.setState({modalVisible: visible, selectedItem: item });
    }

    cancel() {
        //console.log('cancel')
        this.setModalVisible(false)
    }

    submit(item) {
        //console.log('submit')
        this.setModalVisible(false)
        item["activated"] = !item["activated"]
    }
    
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Header title="Organizations" />
                <ScrollView>
                    { this.state.organizationNames.map((item, index) => { 
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('OrganizationMembers')}>
                                <Card borderless shadow style={ styles.cardStyle }>
                                    <Block style={ styles.spaceBetween}>
                                        <Block>
                                            <Text h5 style={ styles.textStyle }>{item.name}</Text>
                                            <Text muted>{item.activated ? 'Activated' : 'Deactivated'}</Text>
                                        </Block>
                                        <Block>
                                            <Button 
                                                round 
                                                size="small" 
                                                style={ item.activated ? styles.btnOn : styles.btnOff } 
                                                onPress={() => { this.setModalVisible(true, item);}}  
                                            >
                                                { item.activated ? 'Online' : 'Offline' }
                                            </Button>
                                        </Block>
                                    </Block>
                                    
                                </Card>
                            </TouchableOpacity>
                        )
                    }
                    )}
                </ScrollView>    
                <Button style={ styles.addBtn } round onPress={() => this.props.navigation.navigate('AddNewOrganization')}>
                    Add Organization
                </Button>
                
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <Block style={ styles.myModal }>
                        <Card style={ styles.myCard }>
                            <Text style={ styles.modalTextStyle}>
                                { this.state.selectedItem?.activated ? 'Do you want to make this organization offline ' : 'Do you want to make this organization online ' }
                                ?
                            </Text>
                            <Block style={ styles.btnGroup }>
                                <Button 
                                    round 
                                    style={ styles.cancelBtn } 
                                    onPress={() => this.cancel() }
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    round 
                                    style={ styles.submitBtn } 
                                    onPress={() => this.submit(this.state.selectedItem) }
                                >
                                    Submit
                                </Button>
                            </Block>
                        </Card>
                        
                    </Block>
                </Modal>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    cardStyle: {
        padding: 20,
        marginBottom: 5,
        marginHorizontal: 10,
        marginTop: 1,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 5
    },
    textStyle: {
        marginTop: -30,
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
        marginTop: 10,
        backgroundColor: Colors.addBtn,
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    myModal: {
        marginTop: 200,
        padding: 20
    },
    myCard: {
        padding: 20
    },
    modalTextStyle: {
        marginTop: -30,
        fontSize: 30
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    cancelBtn: {
        width: '48%',
        backgroundColor: Colors.cancelBtn
    },
    submitBtn: {
        width: '48%',
        backgroundColor: Colors.submitBtn
    }
});

export default SuperAdmin;