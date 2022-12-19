import { View, Text } from 'react-native'
import React from 'react'
import useAuth from "../hooks/useAuth";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import RegistrationScreen from '../screens/RegistrationScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  const {user} = useAuth();

  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ?
      (
        <>
          <Stack.Screen name="Tab" component={BottomTabNavigator}/>
        </>
      ):(
        <>
          <Stack.Screen name="Register" component={RegistrationScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </>

      )}
    </Stack.Navigator>
  )
}

export default StackNavigator