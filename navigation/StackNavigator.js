import { View, Text } from 'react-native'
import React from 'react'
import useAuth from "../hooks/useAuth";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
//import BottomTabNavigator from './BottomTabNavigator';
import RegistrationScreen from '../screens/RegistrationScreen';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfigureProfileScreen from '../screens/ConfigScreen';
import SettingScreen from '../screens/SettingScreen';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  const {user, configState} = useAuth();

  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
            configState ? (
              <>
                 
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Setting" component={SettingScreen}/>
              </>
              ):(
              <>
                <Stack.Screen name="Config" component={ConfigureProfileScreen}/>
            </>
            )
          ) : (
            <>
               <Stack.Screen name="Registration" component = {RegistrationScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              
              
            </>
          )}
    </Stack.Navigator>
  )
}

export default StackNavigator