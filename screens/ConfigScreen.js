import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { getDoc, doc, updateDoc, setDoc, addDoc } from "firebase/firestore";
import { db,firebase } from "../firebase";
import useAuth from "../hooks/useAuth"; 
import AppContext from '../components/AppContext';

const ConfigureProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [postal, setPostal] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const {user, configurationState} = useAuth();
  const myContext = useContext(AppContext);


  function configPostal(){              //add under "users" in db
    if (fullName === '' || postal === '') {
      setError('fullname and username are required');
      return;
    }
    const docRef = doc(db,"users", user.uid);
    setDoc(docRef,{
      full_name: fullName,
      postal_code: postal,
      uid: user.uid,
      email: user.email,
    })
    .catch ((error)=>{setError(error)})
  }

  function configPostal2(){                //add under 'postalcodes' in db
    if (fullName === '' || postal === '') {
      setError('fullname and username are required');
      return;
    }
    const docRef = doc(db,postal, user.uid);
    setDoc(docRef,{
      full_name: fullName,
      postal_code: postal,
      uid: user.uid,
      email: user.email,
    })
}
 
    


  return (
    <SafeAreaView className="flex-1">
      {!!error && 
        <View 
          className="flex justify-center self-center absolute bottom-36 opacity-90 z-10 p-4 bg-[#D54826FF] rounded-2xl"
        >
          <Text className="text-white">
              {error}
          </Text>
        </View>
      }
      <View className="p-4 mt-20">
        <Text className="font-bold text-5xl leading-loose">
          You're In!
        </Text>
        
        <Text className="font-bold text-lg leading-loose mt-5">
          Now, please tell us your name and postal code.
        </Text>
      </View>

      <View className="flex-1 items-start p-2 pr-8 m-1 mt-10">
        <Text className="font-semibold m-1">Full Name</Text>
        <TextInput 
          className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl"
          value={fullName} 
          onChangeText={(fullName) => setFullName(fullName)} 
          autoCorrect={false}
          placeholder="John Appleseed" 
        />
        <Text className="font-semibold m-1">Postal Code</Text>
        <TextInput 
          placeholder="Eg. 123456" 
          className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl"
          value={postal} 
          onChangeText={(postal) => setPostal(postal)} 
          autoCorrect={false}
          autoCapitalize={false}
        />
      </View>
      <View className="flex items-center justify-center p-4">
        <TouchableOpacity
          className="bg-[#5b5b5b] w-full p-4 rounded-2xl"
          onPress={()=>{
            configPostal();
            configPostal2();
            configurationState();
            
          }}
        >
          <Text className="text-white text-center font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
        {/* <Text className="font-semibold underline text-center mt-4" onPress={()=>navigation.navigate('Home')}>
          Skip
        </Text> */}
      </View>
    </SafeAreaView>
  )
}

export default ConfigureProfileScreen