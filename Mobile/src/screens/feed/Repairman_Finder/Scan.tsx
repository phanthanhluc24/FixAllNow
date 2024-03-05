import { Alert, Button, Image, StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuestionAndAnswer from '../../QuestionAndAnswer'
import useAskAiToGiveAnswer from '../../../hooks/useAskAiToGiveAnswer'
interface ItemType {
  label: string;
  value: any;
}
const Scan = () => {
  const { questionAndAnswer, answer,isLoading,setIsLoading } = useAskAiToGiveAnswer()
  const [question, setQuestion] = useState<string>("")
  const clientQuestion = { question: question }
  const handleSendQuestion = async () => {
    await questionAndAnswer(clientQuestion)
    Keyboard.dismiss()
    setQuestion("")
    setIsLoading(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerScan}>
        <Image source={require("../../../assets/Landing/logo.png")} style={styles.image}></Image>
      </View>
      <QuestionAndAnswer answer={answer} isLoading={isLoading} />
      <View style={{ flex: 2 }}>
        <View style={styles.inputAskDiv}>
          <TextInput style={styles.inputAsk}
            placeholder="Nhập câu hỏi của bạn"
            multiline={true}
            value={question}
            onChangeText={(text) => setQuestion(text)}
          ></TextInput>
          <Ionicons name="send" size={24} color="#000" style={styles.iconSend} onPress={handleSendQuestion} />
        </View>
      </View>
    </View>
  )
}
export default Scan

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerScan: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10
  },
  image: {
    height: 60,
    width: 60
  },
  inputAsk: {
    paddingLeft: 15,
    width: 270,
    height: 50
  },
  inputAskDiv: {
    width: "95%",
    height: 50,
    borderWidth: 1,
    borderColor: "#FCA234",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,

  },
  dropdown: {
    margin: 5,
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 37,
    shadowColor: '#000',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingLeft: 15,
    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  textTitle: {
    fontSize: 18,
    color: "#FCA234",
    paddingBottom: 20
  },
  iconSend: {
    paddingRight: 10,
    alignSelf: "center"
  }
})