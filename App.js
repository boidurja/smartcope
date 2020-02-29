import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import AppNavigator from './navigation/AppNavigator';

import SignInScreen from './screens/Login/SignInScreen';
import ForgotPasswordScreen from './screens/Login/ForgotPasswordScreen';
import ChooseUserScreen from './screens/Login/ChooseUserScreen';

import AccountantDrawerScreen from './screens/Accountant/AccountantDrawerScreen';
import AccountantScreen from './screens/Accountant/AccountantScreen';
import ProjectsScreen from './screens/Accountant/ProjectsScreen';
import TasksScreen from './screens/Accountant/TasksScreen';

import SuperAdminScreen from './screens/SuperAdmin/SuperAdminScreen';
import AddNewOrganizationScreen from './screens/SuperAdmin/AddNewOrganizationScreen';
import OrganizationMembersScreen from './screens/SuperAdmin/OrganizationMembersScreen';
import AddNewUserScreen from './screens/SuperAdmin/AddNewUserScreen';
import EditNewUserScreen from './screens/SuperAdmin/EditNewUserScreen';

import AdminScreen from './screens/Admin/AdminScreen';
import AddNewProjectScreen from './screens/Admin/AddNewProjectScreen';
import ProjectTasksScreen from './screens/Admin/ProjectTasksScreen';
import AddNewTaskScreen from './screens/Admin/AddNewTaskScreen';
import EditTaskScreen from './screens/Admin/EditTaskScreen';
import TasksOpenScreen from './screens/Admin/TasksOpenScreen';
import TasksInProgressScreen from './screens/Admin/TasksInProgressScreen';
import ConvertToCompleteScreen from './screens/Admin/ConvertToCompleteScreen';
import TasksBlockedScreen from './screens/Admin/TasksBlockedScreen';
import TasksCompletedScreen from './screens/Admin/TasksCompletedScreen';
import ConvertToBlockScreen from './screens/Admin/ConvertToBlockScreen';

//import { createSwitchNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ChooseUser" component={ChooseUserScreen} />

        <Stack.Screen name="AccountantDrawer" component={AccountantDrawerScreen} />
        <Stack.Screen name="Accountant" component={AccountantScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />

        <Stack.Screen name="SuperAdmin" component={SuperAdminScreen} />
        <Stack.Screen name="AddNewOrganization" component={AddNewOrganizationScreen} />
        <Stack.Screen name="OrganizationMembers" component={OrganizationMembersScreen} />
        <Stack.Screen name="AddNewUser" component={AddNewUserScreen} />
        <Stack.Screen name="EditNewUser" component={EditNewUserScreen} />

        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="AddNewProject" component={AddNewProjectScreen} />
        <Stack.Screen name="ProjectTasks" component={ProjectTasksScreen} />
        <Stack.Screen name="AddNewTask" component={AddNewTaskScreen} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />
        <Stack.Screen name="TasksOpen" component={TasksOpenScreen} />
        <Stack.Screen name="TasksInProgress" component={TasksInProgressScreen} />
        <Stack.Screen name="ConvertToComplete" component={ConvertToCompleteScreen} />
        <Stack.Screen name="TasksBlocked" component={TasksBlockedScreen} />
        <Stack.Screen name="TasksCompleted" component={TasksCompletedScreen} />
        <Stack.Screen name="ConvertToBlock" component={ConvertToBlockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


/*const FirstNavGroup = createSwitchNavigator({
  SignIn: {
    screen: SignInScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  },
  ChooseUser: {
    screen: ChooseUserScreen
  },

  AccountantDrawer: {
    screen: AccountantDrawerScreen
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
  },

  Admin: {
    screen: AdminScreen
  },
  AddNewProject: {
    screen: AddNewProjectScreen
  },
  ProjectTasks: {
    screen: ProjectTasksScreen
  },
  AddNewTask: {
    screen: AddNewTaskScreen
  },
  EditTask: {
    screen: EditTaskScreen
  },
  TasksOpen: {
    screen: TasksOpenScreen
  },
  TasksInProgress: {
    screen: TasksInProgressScreen
  },
  ConvertToComplete: {
    screen: ConvertToCompleteScreen
  },
  TasksBlocked: {
    screen: TasksBlockedScreen
  },
  TasksCompleted: {
    screen: TasksCompletedScreen
  },
  ConvertToBlock: {
    screen: ConvertToBlockScreen
  }
})*/

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

/*export default createAppContainer(FirstNavGroup)*/