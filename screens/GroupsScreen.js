import { View, Text, TouchableOpacity, Linking, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';


const GroupsScreen = () => {
  const {user} = useAuth();
  const [postal, setPostal] = useState('');

  const getPostalCode = async () =>{
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef);

    return setPostal(docSnap.data().postal_code);
  }

  getPostalCode();

  return (
    <SafeAreaView className="bg-white flex-1">

        <View>
          <Text className="text-3xl font-bold mt-4 ml-2"> Groups </Text>
        </View>

        <View className="items-center">
          <View className="mt-11">
            <TouchableOpacity className="flex justify-center bg-[#5b5b5b] active:bg-zinc-700 font-bold rounded-2xl h-28 w-60" onPress={() => Linking.openURL("https://tinyurl.com/" + postal)}>  
              <Image className=" bg-white w-10 h-10 absolute ml-8" source={require('../assets/groupsScreen/fast-delivery.png')} />
              <Text className = "text-white text-2xl text-center ml-12">Food Sharing </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-9">
            <TouchableOpacity className="flex justify-center bg-[#5b5b5b] active:bg-zinc-700 font-bold rounded-2xl h-28 w-60" onPress={() => Linking.openURL("https://tinyurl.com/carpl" + postal)}>
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