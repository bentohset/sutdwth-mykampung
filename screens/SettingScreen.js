import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from "../hooks/useAuth";

const SettingScreen = () => {
  
  const navigation = useNavigation();
  const {user, logout} = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className = "bg-white flex-1 relative">
     {/*Settings Section*/} 
     <View className = "top-12 flex-row items-center justify-center">
        <Text className = "text-[30px] font-semibold ">
            Settings
        </Text>
    </View>
    
    {/* Postal Code
      <View>
        <View>
          <Text className = "top-32 left-10 font-light text-[14px]">
            Address 
          </Text>
        </View>
      <TouchableOpacity className = "top-32 items-center mx-8 rounded-xl bg-red-50 py-2 px-2 shadow-lg">
          <Text className = "relative left-1 text-[20px]">
            640688
          </Text>
      </TouchableOpacity>
    </View>

    <View>
        <View>
            <Text className = "top-40 left-10 font-light text-[14px]">
                Payment Methods
            </Text>
        </View>
        <TouchableOpacity className = "relative top-40 items-center mx-8 rounded-xl bg-red-50 py-2 px-2 shadow-lg">
            <Text className = "relative left-1 text-[20px]">
                9123 4567
            </Text>
        </TouchableOpacity>
  </View> */}
    
    {/*Sign Out*/}
    <TouchableOpacity 
    className =  "flex items-center justify-center left-24 top-96 w-36 h-12 bg-red-400 rounded-xl mx-8 shadow-lg"
    onPress={logout}
    >
        <Text className = "items-center justify-center text-[16px] font-bold">
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SettingScreen