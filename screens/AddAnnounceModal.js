import { View, Text, SafeAreaView, ScrollView, TouchableWithoutFeedback, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker'
import * as ImagePicker from "expo-image-picker";



const AddAnnounceModal = () => {
    const navigation = useNavigation();
    const [error, setError] = useState(null);
    const [name,setName] = useState('')
    const [desc, setDesc] = useState('')
    
    const [typeValue, setTypeValue] = useState(null);
    const [type, setType] = useState([
      { label: "Event", value: "Event" },
      { label: "Notice", value: "Notice" },
      { label: "Warning", value: "Warning" },
    ]);
    const [openType, setOpenType] = useState(false);

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4,4],
        })
        const source = {uri: result.uri};
        console.log(source);
        setImage(source);
    }

    function submitForm(){
        if (name===''){
            setError('Name required');
            return;
        }
        if (type===''){
            setError('Type required');
            return;
        }
        if (desc===''){
            setError('Description required');
            return;
        }

    }

  return (
    <SafeAreaView className="flex-1">
        <View className="mr-2 p-4 items-center flex-row justify-between">
            <Text className="font-bold text-3xl">
                Create Announcement
            </Text>
            <TouchableWithoutFeedback className="" onPress={() => navigation.goBack()}>
                <Icon name="x" type="octicon" size={30}/>
            </TouchableWithoutFeedback>
        </View>

        <ScrollView
            nestedScrollEnabled={true} 
            keyboardDismissMode="on-drag" 
        >
            {!!error && 
                <View 
                    className="flex self-center items-center opacity-90 w-2/6 z-10 p-4 bg-[#D54826FF] rounded-2xl"
                >
                    <Text className="text-white">
                        {error}
                    </Text>
                </View>
            }
            <View className="flex-1 flex-col items-start p-2 pr-8 m-1 mt-0">
                <Text className="font-semibold m-1 text-xl">Announcement Name</Text>
                <TextInput
                    className="bg-[#D9D9D9] w-full h-12 m-2 p-4 rounded-xl"
                    value={name}
                    onChangeText={(name)=>setName(name)}
                    autoCorrect={false}
                    placeholder="Name of Announcement"
                    autoCapitalize={true}

                />

                <Text className="font-semibold m-1 text-xl">Type</Text>
                <DropDownPicker
                    props={{activeOpacity:1}}
                    className="w-full h-12 rounded-xl m-2"
                    style={styles.drop}
                    open={openType}
                    setOpen={setOpenType}
                    value={typeValue}
                    items={type}
                    setValue={setTypeValue}
                    setItems={setType}
                    placeholder="Choose"
                    zIndex={3000}
                    zIndexInverse={1000}
                    placeholderStyle={styles.placeholderStyle}
                    dropDownContainerStyle={styles.dropDown}
                    textStyle={styles.textDrop}
                    listMode="SCROLLVIEW"
                />

                <Text className="font-semibold m-1 text-xl">Description</Text>
                <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    value={desc}
                    onChangeText={(desc)=>setDesc(desc)}
                    placeholder="Add a description to your announcement"
                    className="bg-[#D9D9D9] w-full m-2 p-4 rounded-xl"
                />

                <Text className="font-semibold m-1 text-xl">Pic</Text>
                <TouchableWithoutFeedback onPress={pickImage} className="">
                    {image===null ?  
                    <View className="w-full aspect-square bg-[#D9D9D9] rounded-xl m-2 p-4 border-box flex items-center justify-center">
                        <Icon type="octicon" name="plus" color="gray"/>
                    </View>
                    :
                    <Image source={{uri: image.uri}} className="w-full aspect-square rounded-xl m-2 p-4"/>
                    }
                </TouchableWithoutFeedback>
            </View>

        </ScrollView>
        <View className="flex items-center justify-center pt-5 border-t border-zinc-400">
            <TouchableOpacity
            className="bg-[#5b5b5b] w-11/12 p-4 rounded-2xl"
            onPress={()=>{
                submitForm();
            }}
            >
            <Text className="text-white text-center font-semibold">Add</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AddAnnounceModal

const styles = StyleSheet.create({
    placeholderStyle: {
      color: "grey",
      marginLeft: 4,
    },
    dropDown:{
      borderWidth: 0,
      backgroundColor: "#D9D9D9",
      margin: 8,
      borderRadius: 5,
    },
    drop:{
      backgroundColor: "#D9D9D9",
      borderWidth: 0,
      margin: 0,
    },
    textDrop:{
      marginLeft: 4,
      borderBottomWidth:1,
    },
    contentContainer:{
      flexGrow:1,
    }
  })