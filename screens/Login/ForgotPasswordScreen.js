import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, Modal, TouchableHighlight, Image } from 'react-native'; 
import { AuthSession } from 'expo';

class ForgotPassword extends Component {

    state = {
        modalVisible: false,
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
    return (
        <Block>
            <Block>
                <Text muted style={ styles.enterEmail }>Please enter your email address</Text>
            </Block>
            
            <Block style={ styles.formStyle }>
                <Input style={ styles.email }placeholder="Email" rounded />
                <Block style={ styles.btnGroup }>
                    <Button color="info" round style={ styles.btn } onPress={() => this.props.navigation.navigate('SignIn')}>Cancel</Button>
                    <Button color="black" round style={ styles.btn } onPress={() => { this.setModalVisible(true); }} >Submit</Button>
                </Block>
                <Text 
                    style={ styles.resend }
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        Email not received? Resend link
                </Text>
                <Button round color="info" style={ styles.signInBtn } onPress={() => this.props.navigation.navigate('SignIn')}>Sign in</Button>
            </Block>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
            >
                <Block style={ styles.myModal }>
                    <Card style={ styles.myCard }>
                        <Image style={ styles.imgStyle } source={require('../../assets/images/sent.png')} />
                        <Text muted style={ styles.textStyle}>Email has been sent with</Text>
                        <Text muted style={ styles.textStyle}>Password reset link</Text>
                        <TouchableHighlight>
                            <Button round color="info" style={ styles.btnDismiss } onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>Dismiss</Button>
                        </TouchableHighlight>
                    </Card>
                </Block>
            </Modal>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    formStyle: {
        paddingHorizontal: 20
    },
    email: {
        marginTop: 140
    },
    enterEmail: {
        marginTop: 100,
        textAlign: 'center'
    },
    btn: {
        width: '48%'
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    resend: {
        textAlign: 'center',
        marginTop: 60
    },
    signInBtn: {
        marginTop: 70
    },
    myModal: {
        marginTop: 200,
        padding: 20
    },
    myCard: {
        padding: 20
    },
    textStyle: {
        textAlign: 'center'
    },
    imgStyle: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnDismiss: {
        marginTop: 10,
        width: 90,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export default ForgotPassword;