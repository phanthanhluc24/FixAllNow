import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import LoaderKit from 'react-native-loader-kit';
import React, { useEffect, useRef, } from 'react'
interface Answer {
  question: string;
  answer: string;
}
const QuestionAndAnswer = ({ answer, isLoading }: any) => {
  const scrollViewRef: any = useRef<ScrollView>(null)
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  }, [answer])
  return (
    <View style={{ flex: 8.5 }}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
        contentContainerStyle={styles.messagesList}
      >
        {answer.map((item: Answer, index: number) => {
          const fromUs = (item.answer && item.answer != item.question) || (item.question === item.question)
          return (
              <View>
                {item.answer && (
                    <Text style={styles.userMessage}>{item?.question}</Text>
                )}
                {item.question && (
                    <Text style={styles.otherMessage}>{item?.answer}</Text>
                )}
              </View>
    
          )
        })}
        <View ref={scrollViewRef} />
      </ScrollView>
      {isLoading !== false && <Text style={styles.loadingText}>
        <LoaderKit style={styles.loadingText}
          name={'BallPulse'}
          color={'#FCA234'}
        /></Text>}
    </View>
  )
}

export default QuestionAndAnswer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  questionContainer: {
    marginBottom: 8,
    backgroundColor: '#e0f2ff',
    borderRadius: 8,
    borderTopLeftRadius: 8,
    padding: 8,
    maxWidth: 300,
  },
  answerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    maxWidth: 300,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
  },
  question: {
    color: '#333',
  },
  answer: {
    color: '#000',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: "center",
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end',
    marginRight: 10,
    backgroundColor: '#007AFF',
    padding:6,
    color:"#ffffff",
    borderRadius:6,
    margin:5
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#394C6D',
    marginLeft: 10,
    padding:6,
    borderRadius:6,
    color:"#ffffff",
    width:"75%"
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
});