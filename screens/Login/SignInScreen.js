import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Redirect, Router } from 'react-router-dom';

class SignIn extends Component {
    state = {  
        email: '',
        pass: '',
        helpEmail: false,
        helpPass: false
    }
    signIn() {
        /*if ( (this.state.email != "") && (this.state.pass != "")) {
            this.props.navigation.navigate('ChooseUser');
        } else {
            this.setState({ helpEmail: true })
            this.setState({ helpPass: true })
        }*/
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
        this.props.navigation.navigate('ChooseUser');
    }
    
    render() {
        return (
            <Block style={ styles.blockStyle }>
                <Block style={ styles.blockStyle }>
                    <Text p style={ styles.signIn }>Sign In</Text>
                    <Text muted style={ styles.login }>Smartcope login screen</Text>
                </Block>
                <Block style={ styles.blockStyle }>
                    <Block style={ styles.formStyle }>
                        <Input placeholder="Email" help="Email is required" topHelp={false} bottomHelp={this.state.helpEmail} rounded onChangeText={(text) => this.setState({email: text})}/>
                        <Input placeholder="password" help="Password is required" topHelp={false} bottomHelp={this.state.helpPass} password viewPass rounded onChangeText={(text) => this.setState({pass: text})} />
                        <Block style={ styles.forgotPassword }>
                            <Text onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot your password?</Text>
                        </Block>
                        <Button round color="info" style={ styles.btn } onPress={ this.signIn.bind(this) }>
                            Sign in
                        </Button>
                        <Text style={ styles.signUpText }>Don't have an account? Sign up</Text>
                    </Block>
                </Block>
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
    formStyle: {
        paddingHorizontal: 20
    },
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