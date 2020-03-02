import React, { Component } from 'react';
import { Text, Block, Input, Button, Card } from 'galio-framework';
import { StyleSheet, Modal, TouchableHighlight, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'; 
import Colors from '../../constants/Colors';

class ForgotPassword extends Component {

    state = {
        modalVisible: false,
        email: '',
        helpEmail: false
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    submit() {
        if (this.state.email == "") {
            this.setState({ helpEmail: true})
            return false
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (reg.test(this.state.email) === false) {
            this.setState({ helpEmail: true })
            return false
        }
        this.setModalVisible(true);
    }

    onChangeText(text) {
        this.setState({email: text})
        if (this.state.email != "") {
            this.setState({ helpEmail: false })
        }
    }

    render() {
        return (
            <Block style={ styles.blockStyle }>
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled keyboardVerticalOffset="10">
                    <Block style={{ flex: 1}}>
                        <Text muted style={ styles.enterEmail }>Please enter your email address</Text>
                    </Block>
                    
                    <Block style={ styles.formStyle }>    
                        <Input 
                            style={ styles.email } 
                            placeholder="Email" 
                            rounded 
                            help="Email field is empty or Email is Not Correct" 
                            topHelp={false} 
                            bottomHelp={this.state.helpEmail}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                        <Block style={ styles.btnGroup }>
                            <Button round style={ styles.cancelBtn } onPress={() => this.props.navigation.navigate('SignIn')}>Cancel</Button>
                            <Button round style={ styles.submitBtn } onPress={() => this.submit() } >Submit</Button>
                        </Block>
                        <Text 
                            style={ styles.resend }
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            Email not received? Resend link
                        </Text>
                        <Button round style={ styles.signInBtn } onPress={() => this.props.navigation.navigate('SignIn')}>Sign in</Button>
                    </Block>
                </KeyboardAvoidingView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <Block style={ styles.myModal }>
                        <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
                        <Card style={ styles.myCard }>
                            <Image style={ styles.imgStyle } source={require('../../assets/images/sent.png')} />
                            <Text muted style={ styles.textStyle}>Email has been sent with</Text>
                            <Text muted style={ styles.textStyle}>Password reset link</Text>
                        </Card>
                        </TouchableOpacity>
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
    cancelBtn: {
        width: '48%',
        backgroundColor: Colors.cancelBtnForgotPassword
    },
    submitBtn: {
        width: '48%',
        backgroundColor: Colors.submitBtnForgotPassword
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
        marginTop: 60,
        marginBottom: 50,
        backgroundColor: Colors.signInBtn
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
        marginRight: 'auto',
        backgroundColor: Colors.blueBtn
    }
})

export default ForgotPassword;