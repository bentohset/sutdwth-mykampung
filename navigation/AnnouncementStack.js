import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnnouncementScreen from '../screens/AnnouncementScreen';

const Stack = createNativeStackNavigator();

const AnnouncementStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AnnouncementScreen" component={AnnouncementScreen} />
    </Stack.Navigator>
  )
}

export default AnnouncementStack