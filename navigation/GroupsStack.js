import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from '../screens/GroupsScreen';

const Stack = createNativeStackNavigator();

const GroupsStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
    </Stack.Navigator>
  )
}

export default GroupsStack