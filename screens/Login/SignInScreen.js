import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';

class SignIn extends Component {
    render() {
    return (
        <Block style={ styles.blockStyle }>
            <Block style={ styles.blockStyle }>
                <Text p style={ styles.signIn }>Sign In</Text>
                <Text muted style={ styles.login }>Smartcope login screen</Text>
            </Block>
            <Block style={ styles.blockStyle }>
                <Block style={ styles.formStyle }>
                    <Input placeholder="Email" rounded />
                    <Input placeholder="password" password viewPass rounded />
                    <Block style={ styles.forgotPassword }>
                        <Text onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot your password?</Text>
                    </Block>
                    <Button round color="info" style={ styles.btn } onPress={() => this.props.navigation.navigate('ChooseUser')}>Sign in</Button>
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