import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import AddAnnounceModal from '../screens/AddAnnounceModal';

const Stack = createNativeStackNavigator();

const AnnouncementStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Announcements"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="AnnouncementScreen" component={AnnouncementScreen} />
        <Stack.Group screenOptions={{presentation:"fullScreenModal"}}>
            <Stack.Screen name="AddModal" component={AddAnnounceModal}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default AnnouncementStack