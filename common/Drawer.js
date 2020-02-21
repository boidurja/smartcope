import React, { Component } from 'react';
import { Text, Block, Input, Button } from 'galio-framework';
import { StyleSheet, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Accountant/HomeScreen';
import { DrawerNavigator } from 'react-navigation';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      
    </Drawer.Navigator>
  );
}

export default MyDrawer;

/*class Drawer extends Component {
    render() {
        return (
            <AppStack />
        )
    }
}

const AppStack = DrawerNavigator({
    Home: { screen: HomeScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Drawer;*/

/*const Drawer = createDrawerNavigator();

class Drawer extends Component {
    render() {
        return (
            <Block style={ styles.blockStyle }>        
                <Text>Drawer</Text>
            </Block>
        );
    }
}*/

/*function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      
    </Drawer.Navigator>
  );
}

export default function App() {
    return (
      
        <MyDrawer />
     
    );
}*/