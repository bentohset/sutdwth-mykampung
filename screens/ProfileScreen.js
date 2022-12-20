import { View, Text, SafeAreaView, Image, TouchableOpacity, Touchable, TouchableHighlight, TextInput, StyleSheet, textAlign, ScrollView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getDoc, doc, updateDoc, setDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import { renderNode } from '@rneui/base';



const ProfileScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = React.useState(null);
    const [number, setNumber] = React.useState(null);
    const [desc, setDesc] = React.useState(null);
    const {user} = useAuth();
    const [Name, setName2] = useState('')
    const [Number, setNumber2] = useState('')
    const [Desc, setDesc2] = useState('')

    const getName = async () =>{
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data().full_name)
      return setName2(docSnap.data().full_name)
    }

    const getMobile = async () =>{
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data().full_name)
      return setNumber2(docSnap.data().mobile_number)
    }

    const getDesc = async () =>{
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data().full_name)
      return setDesc2(docSnap.data().description)
    }
 
    getName();
    getDesc();
    getMobile();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  
    function changeName(){              //add under "users" in db
     
      const docRef = doc(db,"users", user.uid);
      if (name){
      setDoc(docRef,{
        full_name: name,

      },
      {merge:true})
      .catch ((error)=>{setError(error)})
    }
  }

    function changeMobile(){              //add under "users" in db
     
      const docRef = doc(db,"users", user.uid);
      if (number){
      setDoc(docRef,{
      
        mobile_number: number,
   
      },
      {merge:true})
      .catch ((error)=>{setError(error)})
    }}

    function changeDesc(){              //add under "users" in db
    
      const docRef = doc(db,"users", user.uid);
      if (desc){
      setDoc(docRef,{
     
        description: desc


      },
      {merge:true})
      .catch ((error)=>{setError(error)})
    }}





  return (
    <SafeAreaView className = "flex-1 relative"> 

        {/*Profile Section*/} 
        <View className = "flex-row items-center justify-between p-2 mr-2 ml-2">
            <Text className = "text-3xl font-bold ">
                Profile
            </Text>
        

            {/*Settings button*/}
            <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}
                className="flex"
            >
                <Image 
                source = {{
                    uri: "https://img.icons8.com/dusk/512/gear.png"
                }}
                className = "w-14 h-14 object-cover"
                />
            </TouchableOpacity>
        </View>

        {/*Profile Image*/}
        <View className = "flex items-center">
            <View className = "w-40 h-40 bg-red-300 rounded-full items-center justify-center">
                <Image
                // source= {ProfileImage}
                    className = "w-full h-full rounded-full object-cover shadow-lg"
                />
            </View>
        

            {/*Edit Profile Section*/}
            <TouchableOpacity>
                <View className = "mt-2 item-center justify-center">
                    <Text className = "text-[16px] text-blue-600 font-semibold">
                        Edit Profile Image
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView
            keyboardDismissMode="on-drag"
        >
        {/*Edit Name*/}
        <View className="flex-1 flex-col items-start p-2 pr-8 m-1 mt-0">
            <Text className="font-semibold m-1 text-xl">
                Name* 
            </Text>
            <TextInput 
                className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl"     
                onChangeText = {(name) => setName(name)}
                value = {name}
                placeholder= {Name}
                placeholderTextColor="gray"
            />

        {/*Edit Mobile Number*/}
            <Text className="font-semibold m-1 text-xl">
                Mobile Number*
            </Text>
            <TextInput 
                className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl" 
                onChangeText = {(number) => setNumber(number)}
                value = {number}
                placeholder= {Number}
                placeholderTextColor="gray"
            />

        {/*Edit Profile Description*/}
            <Text className="font-semibold m-1 text-xl">
                Description (Max: 100 Characters)
            </Text>
            <TextInput 
                className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl" 
                maxLength = {100}
                onChangeText = {(desc) => setDesc(desc)}
                value = {desc}
                multiline = {true}
                placeholder= {Desc}
                placeholderTextColor="gray"
            />
        </View>
        </ScrollView>
        <View className = "flex-1 items-center justify-center">
            {/*Edit Cancel Button*/}
            <TouchableOpacity className = " flex items-center justify-center right-24 w-36 h-12 bg-[#D9D9D9] rounded-xl mx-8">
                <Text>
                    Cancel
                </Text>
            </TouchableOpacity>

        {/*Edit Save Button*/}
            <TouchableOpacity 
                onPress={()=>{
                    changeName();
                    changeMobile();
                    changeDesc();
                }}
                className = "flex items-center justify-center left-24 bottom-12 w-36 h-12 bg-blue-400 rounded-xl mx-8"
            >
                <Text>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>

  )
}

export default ProfileScreen