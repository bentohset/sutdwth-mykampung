import React, { useState, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { db, auth } from '../firebase'
import SendMessage from './SendMessages'
import { onSnapshot,query, collection, orderBy, limit } from 'firebase/firestore'


function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        onSnapshot(query(collection(db,"messages"),orderBy('createdAt'),limit(50)),snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <View>
            <View className="msgs">
                {messages.map(({ id, text, uid }) => (
                    <View>
                        <View key={id} className={`msg ${uid === user.uid ? 'sent' : 'received'}`}>
                            <Text>{text}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <SendMessage scroll={scroll} />
            <View ref={scroll}></View>
        </View>
    )
}

export default Chat