import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from '../screens/GroupsScreen';
import Chat from '../screens/Chat';


const Stack = createNativeStackNavigator();

const GroupsStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Groups"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default GroupsStack