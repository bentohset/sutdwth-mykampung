import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const GroupsScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 items-center space-y-10 ">

        <TouchableOpacity className="flex justify-center bg-blue-500 active:bg-violet-700 font-bold rounded h-28 w-60" onPress={() => Linking.openURL("https://chat.whatsapp.com/E5JZ1fmL2W45IRXKOCT2Mr")}>
          <Text className = "text-white text-2xl text-center">Food Sharing</Text>
        </TouchableOpacity>

        <View className = "">
          <TouchableOpacity className="flex justify-center bg-blue-500 active:bg-violet-700 font-bold rounded h-28 w-60" onPress={() => Linking.openURL("https://chat.whatsapp.com/E5JZ1fmL2W45IRXKOCT2Mr")}>
            <Text className = "text-white text-2xl text-center">
              Car Pooling
            </Text>
          </TouchableOpacity>
        </View>


    </SafeAreaView>
  )
}

export default GroupsScreen