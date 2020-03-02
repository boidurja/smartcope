import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { Keyboard, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView, TouchableWithoutFeedback  } from 'react-native';
//import { Redirect, Router } from 'react-router-dom';

class SignIn extends Component {
    state = {  
        email: '',
        pass: '',
        helpEmail: false,
        helpPass: false,
        bottom: 0
    }

    /*onFocus() {
        this.setState({
            bottom: 200
        })
    }

    onBlur() {
        this.setState({
            bottom: 0
        })
    }*/

    onChangeEmail(text) {
        this.setState({email: text})
        if (this.state.email != "") {
            this.setState({ helpEmail: false })
        }
    }

    onChangePass(text) {
        this.setState({pass: text})
        if (this.state.pass != "") {
            this.setState({ helpPass: false })
        }
    }

    signIn() {
        if (this.state.email == "") {
            this.setState({ helpEmail: true })
            return false
        } else {
            this.setState({ helpEmail: false })
        }
        if (this.state.pass == "") {
            this.setState({ helpPass: true })
            return false
        } else {
            this.setState({ helpPass: false })
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (reg.test(this.state.email) === false) {
            this.setState({ helpEmail: true })
            return false
        }
        this.props.navigation.navigate('ChooseUser');
    }
    
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled keyboardVerticalOffset="170">
                    <Block style={ styles.blockStyle }>
                        <Text p style={ styles.signIn }>Sign In</Text>
                        <Text muted style={ styles.login }>Smartcope login screen</Text>
                    </Block>
                    <Block style={ styles.blockStyle }>
                        <Block style={{ paddingHorizontal: 20, position:'relative', bottom: this.state.bottom }}>                        
                                <Input 
                                    placeholder="Email" 
                                    help="Email is Not Given or Email is Not Correct" 
                                    topHelp={false} 
                                    bottomHelp={this.state.helpEmail} 
                                    rounded 
                                    onChangeText={(text) => this.onChangeEmail(text)}
                                    //onFocus={ () => this.onFocus() }
                                    //onBlur={ () => this.onBlur() }
                                />
                                <Input 
                                    placeholder="password" 
                                    help="Password is required" 
                                    topHelp={false} 
                                    bottomHelp={this.state.helpPass} 
                                    password 
                                    viewPass 
                                    rounded 
                                    onChangeText={(text) => this.onChangePass(text)} 
                                    //onFocus={ () => this.onFocus() }
                                    //onBlur={ () => this.onBlur() }
                                />
                            
                            
                                <Block style={ styles.forgotPassword }>
                                    <Text onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot your password?</Text>
                                </Block>
                                <Button round color="info" style={ styles.btn } onPress={ this.signIn.bind(this) }>
                                    Sign in
                                </Button>
                                <Text style={ styles.signUpText }>Don't have an account? Sign up</Text>
                        </Block>
                    </Block>
                </KeyboardAvoidingView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    blockStyle: {
        flex: 1
    },
    signIn: {
      marginTop: 50,
      textAlign: 'center'
    },
    login: {
        textAlign: 'center',
        marginTop: 20
    },
    /*formStyle: {
        paddingHorizontal: 20,
        paddingBottom: this.state.paddingBottom
    },*/
    forgotPassword: {
        flexDirection: 'row-reverse',
    },
    btn: {
        marginTop: 20
    },
    signUpText: {
        textAlign: "center",
        marginTop: 20
    }
});

export default SignIn;