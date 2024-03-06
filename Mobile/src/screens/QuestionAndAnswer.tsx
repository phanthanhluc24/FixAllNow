import { FlatList, StyleSheet, Text, View } from 'react-native'
import LoaderKit from 'react-native-loader-kit';
import React, { useEffect, useRef } from 'react'
interface Answer {
    question: string;
    answer: string;
}
const QuestionAndAnswer = ({answer,isLoading}:any) => {
    const flatListRef:any = useRef(null);
    const renderItem = ({ item }: { item: Answer }) => {
        return (
        <>
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>{item?.question}</Text>
                </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.answer}>{item?.answer}</Text>
                </View>
            </View>
        </>
        );
    };
    useEffect(() => {
        if (!isLoading && flatListRef.current) {
            flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
    }, [isLoading]);
    return (
        <View style={{ flex: 8.5 }}>
            <FlatList
                data={answer}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            {isLoading!==false && <Text style={styles.loadingText}>
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
        alignSelf:"center",
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50,
      },
});