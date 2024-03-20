import { Image, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAddNewMessage from '../../hooks/useAddNewMessage';
import useGetMessageConversation from '../../hooks/useGetMessageConversation';
import { FlatList } from 'react-native';
import { url } from '../../hooks/apiRequest/url';
import { io } from 'socket.io-client';
const socket = io(url)
interface Message {
    senderId: string,
    message: string
}
const Conversation = ({ route }: any) => {
    const { idRoom, idReceived }: any = route.params
    const [message, setMessage] = useState('');
    const { sendNewMessage } = useAddNewMessage()
    const { messages, setMessages } = useGetMessageConversation(idRoom)
    useEffect(() => {
        socket.emit("chat-with-new-partner", idReceived)
    }, [idReceived])

    useEffect(() => {
        try {
            socket.on("received-message-from-server", (data) => {
                console.log("server data", data);
                setMessages(prevMessages => {
                    const isDataDifferent = !prevMessages.some(prevMessage => prevMessage.message === data.message);
                    return isDataDifferent ? [...prevMessages, data] : prevMessages;
                });
            })
        } catch (error) {
            console.log(error);

        }
        return () => {
            socket.off("received-message-from-server")
        }
    }, [])

    const scrollViewRef: any = useRef<ScrollView>(null)

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true })
        }
    }, [messages])

    const handleSend = () => {
        const data: any = {
            receivedId: idReceived,
            message: message
        }
        sendNewMessage(data)
        socket.emit("send-new-conversation", data)
        setMessages(prevMessages => [...prevMessages, data]);
        setMessage("")
    };
    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
                contentContainerStyle={styles.messagesList}
            >
                {messages.map((item, index) => {
                    const fromUs = (item.senderId && item.senderId != idReceived) || (item.receivedId === idReceived)
                    return (
                    <View
                        key={index}
                        style={[styles.messageContainer, fromUs ? styles.userMessage : styles.otherMessage]}
                    >
                        <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                    )})}
                <View ref={scrollViewRef} />
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholder="Type your message..."
                    placeholderTextColor="#666"
                    multiline
                />
                {message.trim().length == 0 ? (
                    <TouchableOpacity>
                        <Ionicons name="send" size={24} color="#000" style={styles.sendIcon} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleSend}>
                        <Ionicons name="send" size={24} color="#007AFF" style={styles.sendIcon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default Conversation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    messagesList: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    messageContainer: {
        maxWidth: '70%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF',
        marginRight: 10,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#394C6D',
        marginLeft: 10,
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        marginRight: 10,
    },
    sendIcon: {
        marginLeft: 10,
    },
})