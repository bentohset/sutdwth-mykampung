import { View, Text, TouchableOpacity, Linking, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GroupsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">

        <View>
          <Text className="text-3xl mt-6 ml-5"> Groups </Text>
        </View>

        <View className="items-center">
          <View className="mt-11">
            <TouchableOpacity className="flex justify-center bg-black active:bg-zinc-700 font-bold rounded-2xl h-28 w-60" onPress={() => Linking.openURL("https://chat.whatsapp.com/E5JZ1fmL2W45IRXKOCT2Mr")}>  
              <Image className=" bg-white w-10 h-10 absolute ml-8" source={require('../assets/groupsScreen/fast-delivery.png')} />
              <Text className = "text-white text-2xl text-center ml-12">Food Sharing</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-9">
            <TouchableOpacity className="flex justify-center bg-black active:bg-zinc-700 font-bold rounded-2xl h-28 w-60" onPress={() => navigation.navigate('Chat')}>
            <Image className=" bg-white w-10 h-10 absolute ml-10" source={require('../assets/groupsScreen/car-sharing.png')} />
              <Text className = "text-white text-2xl text-center ml-12">
                Car Pooling
              </Text>
            </TouchableOpacity>
          </View>
        </View>

    </SafeAreaView>
  )
}

export default GroupsScreen