import { View, Text, SafeAreaView, TouchableWithoutFeedback, FlatList, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { auth, firebase, db } from '../firebase';
import { doc, collection, onSnapshot, orderBy, getDocs, query } from "firebase/firestore";

const AnnouncementScreen = () => {
  const navigation = useNavigation();
  const [announce, setAnnounce] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const unsub = onSnapshot(query(collection(db,"announcements"),orderBy("time", "desc")),snapshot=>{
      setAnnounce(
        snapshot.docs.map(doc => ({
          id:doc.id,
          ...doc.data(),
        }))
      )
    })
  }

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      unsub = onSnapshot(query(collection(db,"announcements"),orderBy("time", "desc")),snapshot=>{
        setAnnounce(
          snapshot.docs.map(doc => ({
            id:doc.id,
            ...doc.data(),
          }))
        )
      })
    }
    fetchCards();
    return unsub;
  },[])


  const onRefresh = () => {
    setRefreshing(true)
    setAnnounce([])
    fetchData()
    setRefreshing(false)
    console.log("refreshed")
  }

  const renderItem = ({ item }) => {
    return (
      <View className="flex-1 bg-white rounded-xl mb-4 p-4">
        {item.photoURL ? (<Image source={{uri:item.photoURL}} className="aspect-square w-full rounded-t-xl"/>):(<View></View>)}
        <Text className="text-2xl font-bold mt-1">{item.name}</Text>
        <Text className="text-zinc-400 text-lg">{item.announce_type}</Text>
        <Text className="text-lg">{item.description}</Text>
      </View>
    )
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center p-4 justify-between mr-2">
        <Text className="font-bold text-3xl">Announcements</Text>
        <TouchableWithoutFeedback className="" onPress={()=>navigation.navigate("AddModal")}>
          <Icon type="octicon" name="plus" color="black"/>
        </TouchableWithoutFeedback>
      </View>

      <View className="flex-1 p-4">
        <FlatList
          data={announce}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </View>

    </SafeAreaView>
  )
}

export default AnnouncementScreen