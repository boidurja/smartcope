import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import SignInScreen from './screens/Login/SignInScreen';
import ForgotPasswordScreen from './screens/Login/ForgotPasswordScreen';
import ChooseUserScreen from './screens/Login/ChooseUserScreen';
import AccountantScreen from './screens/Accountant/AccountantScreen';
import ProjectsScreen from './screens/Accountant/ProjectsScreen';
import TasksScreen from './screens/Accountant/TasksScreen';
import SuperAdminScreen from './screens/SuperAdmin/SuperAdminScreen';
import AddNewOrganizationScreen from './screens/SuperAdmin/AddNewOrganizationScreen';
import OrganizationMembersScreen from './screens/SuperAdmin/OrganizationMembersScreen';
import AddNewUserScreen from './screens/SuperAdmin/AddNewUserScreen';
import EditNewUserScreen from './screens/SuperAdmin/EditNewUserScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


const FirstNavGroup = createSwitchNavigator({
  SignIn: {
    screen: SignInScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  },
  ChooseUser: {
    screen: ChooseUserScreen
  },

  Accountant: {
    screen: AccountantScreen
  },
  Projects: {
    screen: ProjectsScreen
  },
  Tasks: {
    screen: TasksScreen
  },
 
  SuperAdmin: {
    screen: SuperAdminScreen
  },
  AddNewOrganization: {
    screen: AddNewOrganizationScreen
  },
  OrganizationMembers: {
    screen: OrganizationMembersScreen
  },
  AddNewUser: {
    screen: AddNewUserScreen
  },
  EditNewUser: {
    screen: EditNewUserScreen
  }
})

/*export default function App(props) {

  return (
    <View style={{ flex: 1 }}>
      <SignInScreen />
      
    </View>
  );

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}*/

/*async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});*/

export default createAppContainer(FirstNavGroup)