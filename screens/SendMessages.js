import React, { useState } from 'react'
import { db, auth, firebase } from '../firebase'
import { TextInput, Button, View } from 'react-native'
import useAuth from '../hooks/useAuth';
import { serverTimestamp, addDoc } from 'firebase/firestore';

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    const {user} = useAuth()

    async function sendMessage(e) {
        e.preventDefault()
        const { uid} = user

        await addDoc(collection(db,"messages"),{
            text: msg,
            uid,
            createdAt: serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <View>
                <View className="sendMsg">
                    <TextInput style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button className="mt-3" style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} onPress={sendMessage} title="Send"></Button>
                </View>
        </View>
    )
}

export default SendMessage
