import { View, Text, SafeAreaView, TouchableWithoutFeedback, FlatList, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const DUMMY_DATA = [
  {
      name:"NO Peeing in Lift!!",
      type: "Warning",
      desc: "Pls be considerate and not pee in life",
      photoURL:"https://github.com/twbs.png",
      id: 1,
  },
  {
      name:"Construction along corridoor",
      type: "Notices",
      desc: "There will be construction along level 5",
      photoURL:"https://github.com/npm.png?size=200",
      id: 2,
  },
  {
      name:"Christmas Wonderland",
      type: "Event",
      desc: "Come down for a fun time building snowmen",
      photoURL:"https://github.com/github.png?size=40",
      id:3,
  }
];

const AnnouncementScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View className="flex-1 bg-white rounded-xl mb-4 p-4">
        {item.photoURL ? (<Image source={{uri:item.photoURL}} className="aspect-square w-full rounded-t-xl"/>):(<View></View>)}
        <Text className="text-xl font-bold">{item.name}</Text>
        <Text className="text-zinc-400 text-lg">{item.type}</Text>
        <Text className="text-lg">{item.desc}</Text>
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
          data={DUMMY_DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

    </SafeAreaView>
  )
}

export default AnnouncementScreen