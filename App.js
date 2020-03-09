import 'react-native-gesture-handler';
import React from 'react';

import SignInScreen from './screens/Login/SignInScreen';
import ForgotPasswordScreen from './screens/Login/ForgotPasswordScreen';
import ChooseUserScreen from './screens/Login/ChooseUserScreen';

import AccountantDrawerScreen from './screens/Accountant/AccountantDrawerScreen';
import AccountantScreen from './screens/Accountant/AccountantScreen';
import TasksScreen from './screens/Accountant/TasksScreen';
import TaskPriceScreen from './screens/Accountant/TaskPriceScreen';
import MyAccountScreen from './screens/Accountant/MyAccountScreen';

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
import TaskDetailsScreen from './screens/Admin/TaskDetailsScreen';
import TaskNotesScreen from './screens/Admin/TaskNotesScreen';

import ManagerScreen from './screens/Manager/ManagerScreen';
import TasksOpenMScreen from './screens/Manager/TasksOpenMScreen';
import TasksInProgressMScreen from './screens/Manager/TasksInProgressMScreen';
import TasksBlockedMScreen from './screens/Manager/TasksBlockedMScreen';
import TasksCompletedMScreen from './screens/Manager/TasksCompletedMScreen';
import ProjectTasksMScreen from './screens/Manager/ProjectTasksMScreen';
import AddNewTaskMScreen from './screens/Manager/AddNewTaskMScreen';
import TaskDetailsMScreen from './screens/Manager/TaskDetailsMScreen';
import TaskNotesMScreen from './screens/Manager/TaskNotesMScreen';
import EditTaskMScreen from './screens/Manager/EditTaskMScreen';

import TeamMemberScreen from './screens/TeamMember/TeamMemberScreen';
import TasksInProgressTMScreen from './screens/TeamMember/TasksInProgressTMScreen';
import TasksBlockedTMScreen from './screens/TeamMember/TasksBlockedTMScreen';
import TasksCompletedTMScreen from './screens/TeamMember/TasksCompletedTMScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();

const DrawerAccountant = createDrawerNavigator();

function AccountantDrawer() {
  return (
    <DrawerAccountant.Navigator initialRouteName="Accountant">
      <DrawerAccountant.Screen name="Accountant Home" component={AccountantScreen} />
      <DrawerAccountant.Screen name="My Account" component={MyAccountScreen} />
      <DrawerAccountant.Screen name="Tasks" component={TasksScreen} />
      <DrawerAccountant.Screen name="Task Price" component={TaskPriceScreen} />
    </DrawerAccountant.Navigator>
  );
}

const DrawerSuperAdmin = createDrawerNavigator();

function SuperAdminDrawer() {
  return (
    <DrawerSuperAdmin.Navigator initialRouteName="SuperAdmin">
      <DrawerSuperAdmin.Screen name="SuperAdmin" component={SuperAdminScreen} />
    </DrawerSuperAdmin.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ChooseUser" component={ChooseUserScreen} />

        <Stack.Screen name="Accountant" component={AccountantDrawer} />
        <Stack.Screen name="AccountantDrawer" component={AccountantDrawerScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="Task Price" component={TaskPriceScreen} />
        <Stack.Screen name="My Account" component={MyAccountScreen} />

        <Stack.Screen name="SuperAdmin" component={SuperAdminDrawer} />
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
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        <Stack.Screen name="TaskNotes" component={TaskNotesScreen} />

        <Stack.Screen name="Manager" component={ManagerScreen} />
        <Stack.Screen name="TasksOpenM" component={TasksOpenMScreen} />
        <Stack.Screen name="TasksInProgressM" component={TasksInProgressMScreen} />
        <Stack.Screen name="TasksBlockedM" component={TasksBlockedMScreen} />
        <Stack.Screen name="TasksCompletedM" component={TasksCompletedMScreen} />
        <Stack.Screen name="ProjectTasksM" component={ProjectTasksMScreen} />
        <Stack.Screen name="AddNewTaskM" component={AddNewTaskMScreen} />
        <Stack.Screen name="TaskDetailsM" component={TaskDetailsMScreen} />
        <Stack.Screen name="TaskNotesM" component={TaskNotesMScreen} />
        <Stack.Screen name="EditTaskM" component={EditTaskMScreen} />

        <Stack.Screen name="TeamMember" component={TeamMemberScreen} />
        <Stack.Screen name="TasksInProgressTM" component={TasksInProgressTMScreen} />
        <Stack.Screen name="TasksBlockedTM" component={TasksBlockedTMScreen} />
        <Stack.Screen name="TasksCompletedTM" component={TasksCompletedTMScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;