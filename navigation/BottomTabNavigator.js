import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import AnnouncementStack from './AnnouncementStack'
import GroupsStack from './GroupsStack'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Announcements" component={AnnouncementStack}/>
        <Tab.Screen name="Groups" component={GroupsStack}/>
        <Tab.Screen name="Profile" component={ProfileStack}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator