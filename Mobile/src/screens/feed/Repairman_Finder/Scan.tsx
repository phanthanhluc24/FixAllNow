import { Alert, Button, Image, StyleSheet, Text, View, Keyboard, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuestionAndAnswer from '../../QuestionAndAnswer'
import useAskAiToGiveAnswer from '../../../hooks/useAskAiToGiveAnswer'
interface ItemType {
  label: string;
  value: any;
}
const Scan = () => {
  const { questionAndAnswer, answer,isLoading,setIsLoading} = useAskAiToGiveAnswer()
  const [question, setQuestion] = useState<string>("")
  const clientQuestion = { question: question }
  const handleSendQuestion = async () => {
    await questionAndAnswer(clientQuestion)
    // Keyboard.dismiss()
    setQuestion("")
    setIsLoading(true)
  }
  return (
    <View style={styles.container}>
      <QuestionAndAnswer isLoading={isLoading} answer={answer}  />
      <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={question}
                    onChangeText={(text) => {setQuestion(text),setIsLoading(false)}}
                    placeholder="Nhập câu hỏi của bạn..."
                    placeholderTextColor="#666"
                    multiline
                />
                {question.trim().length == 0 ? (
                    <TouchableOpacity>
                        <Ionicons name="send" size={24} color="#000" style={styles.sendIcon} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleSendQuestion}>
                        <Ionicons name="send" size={24} color="#007AFF" style={styles.sendIcon} />
                    </TouchableOpacity>
                )}
            </View>
    </View>
  )
}
export default Scan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
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