import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed';

import AnnouncementStack from './AnnouncementStack'
import GroupsStack from './GroupsStack'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
        }}
    >
        <Tab.Screen name="Announcements" component={AnnouncementStack}
            options={{
                tabBarIcon: ({focused, color, size})=>(
                    <Icon type="material-community" name={focused ? "home" : "home-outline"} color={color} size={size}/>
                ),
            }}
        />
        <Tab.Screen name="Groups" component={GroupsStack}
            options={{
                tabBarIcon: ({focused, color, size})=>(
                    <Icon type="material-community" name={focused ? "account-group" : "account-group-outline"} color={color} size={size}/>
                ),
            }}
        />
        <Tab.Screen name="Profile" component={ProfileStack}
            options={{
                tabBarIcon: ({focused, color, size})=>(
                    <Icon type="imaterial" name={focused?"person":"person-outline"} color={color} size="30"/>
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator