import React, { Component } from 'react';
import { Text, Block, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

class ChooseUser extends Component {
    render() {
    return (
        <Block style={ styles.parentBlockStyle }>
            <Block style={ styles.childBlockStyle }>
                <Button round style={ styles.btn } onPress={() => this.props.navigation.navigate('Accountant')}>
                    <Text style={ styles.txtColor }>
                        Accountant
                    </Text>
                </Button>
            </Block>
            <Block style={ styles.childBlockStyle }>
                <Button round style={ styles.btn } onPress={() => this.props.navigation.navigate('SuperAdmin')}>
                    <Text style={ styles.txtColor }>
                        Super Admin
                    </Text>
                </Button>
            </Block>
            <Block style={ styles.childBlockStyle }>
                <Button round style={ styles.btn } onPress={() => this.props.navigation.navigate('Admin')}>
                    <Text style={ styles.txtColor }>
                        Admin
                    </Text>
                </Button>
            </Block>
            <Block style={ styles.childBlockStyle }>
                <Button round style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                    <Text style={ styles.txtColor }>
                        Manager
                    </Text>
                </Button>
            </Block>
            <Block style={ styles.childBlockStyle }>
                <Button round style={ styles.btn } onPress={() => this.props.navigation.navigate('TasksOpen')}>
                    <Text style={ styles.txtColor }>
                        Team Member
                    </Text>
                </Button>
            </Block>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    parentBlockStyle: {
        flex: 1,
        paddingVertical: 120
    },
    childBlockStyle: {
        flex: 1,
        justifyContent: 'space-between'
    },
    btn: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 30,
        backgroundColor: Colors.chooseUserBtn
    },
    txtColor: {
        color: Colors.btnText,
        fontSize: 17
    }
});

export default ChooseUser;