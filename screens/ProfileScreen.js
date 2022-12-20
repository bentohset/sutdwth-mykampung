import { View, Text, SafeAreaView, Image, TouchableOpacity, Touchable, TouchableHighlight, TextInput, StyleSheet, textAlign} from 'react-native'
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
        <View className = "top-12 flex-row items-center justify-center">
            <Text className = "text-[30px] font-semibold ">
                Profile
            </Text>
        </View>

        {/*Settings button*/}
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
            <Image 
            source = {{
                uri: "https://img.icons8.com/dusk/512/gear.png"
            }}
            className = "top-1 left-80 w-14 h-14 object-cover"
            />
        </TouchableOpacity>

        {/*Profile Image*/}
        <View className = "items-center">
            <View className = "top-5 w-40 h-40 bg-red-300 rounded-full items-center justify-center">
                <Image
                // source= {ProfileImage}
                    className = "w-full h-full rounded-full object-cover shadow-lg"
                />
            </View>
        </View>

        {/*Edit Profile Section*/}
        <TouchableOpacity>
            <View className = "flex-row item-center justify-center top-8">
                <Text className = "text-[16px] text-blue-600 font-semibold">
                    Edit Profile Image
                </Text>
            </View>
        </TouchableOpacity>
        {/*Edit Name*/}
        <View >
            <View>
                <Text className = "top-16 left-10 font-light text-[14px]">
                    Name* 
                </Text>
            </View>
            
            <TextInput 
                className = "top-16 mx-8 rounded-xl bg-red-50 py-2 px-2"       
                onChangeText = {(name) => setName(name)}
                value = {name}
                placeholder= {Name}
            
                />
        </View>

        {/*Edit Mobile Number*/}
        <View>
            <View>
                <Text className = "top-20 left-10 font-light text-[14px]">
                    Mobile Number*
                </Text>
            </View>
            <TextInput 
                className = "relative top-20 items-center mx-8 rounded-xl bg-red-50 py-2 px-2 shadow-lg"
                onChangeText = {(number) => setNumber(number)}
                value = {number}
                placeholder= {Number}
            />
        </View>

        {/*Edit Profile Description*/}
        <View> 
            <Text className = "top-24 left-10 font-light text-[14px]">
                Description (Max: 100 Characters)
            </Text>
            <TextInput 
                className = "top-24 items-center mx-8 rounded-xl bg-red-50 py-6 px-6 shadow-lg text-[12px]" 
                maxLength = {100}
                onChangeText = {(desc) => setDesc(desc)}
                value = {desc}
                multiline = {true}
                placeholder= {Desc}
            />
        </View>
    
        <View className = "top-64 items-center justify-center">
            {/*Edit Cancel Button*/}
            <TouchableOpacity className = " flex items-center justify-center right-24 w-36 h-12 bg-red-50 rounded-xl mx-8 shadow-lg">
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
        setDesc(null);
        setName(null);
        setNumber(null);
        
            }}
            className = "flex items-center justify-center left-24 bottom-12 w-36 h-12 bg-blue-400 rounded-xl mx-8 shadow-lg">
                <Text>
                    Save
                </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>

  )
}

export default ProfileScreen