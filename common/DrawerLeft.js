import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountantScreen from '../screens/Accountant/AccountantScreen';
import MyAccountScreen from '../screens/Accountant/MyAccountScreen';
import ProjectsScreen from '../screens/Accountant/ProjectsScreen';
import SignInScreen from '../screens/Login/SignInScreen';



/*function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={AccountantScreen} />
      <Drawer.Screen name="My Account" component={MyAccountScreen} />
    </Drawer.Navigator>
  );
}

export default function DrawerLeft() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}*/

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="My Account" component={MyAccountScreen} />
      <Drawer.Screen name="Home" component={AccountantScreen} />
    </Drawer.Navigator>
  );
}

export default function DrawerLeft() {
  return (
    
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    
  );
}

/*export default function DrawerLeft() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AccountantScreen} />
        <Drawer.Screen name="My Account" component={MyAccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/

/*const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      
    </Drawer.Navigator>
  );
}

export default MyDrawer;
*/

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