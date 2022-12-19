

import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native'


import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Tabs" component={BottomTabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootNavigation